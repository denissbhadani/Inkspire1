import { compareSync } from 'bcrypt-ts-edge'
import type { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/db/prisma'
import CredentialsProvider from 'next-auth/providers/credentials'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const config = {
    pages: {
        signIn: '/sign-in',
        error: '/sign-in'
    },
    session : {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: {type: 'email'},
                password: {type: 'password'},
            },
            async authorize(credentials) {
                if (credentials == null) return null

                // Find user in db
                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email as string
                    }
                })  

                // Check if the user exists and if the password matches
                if (user && user.password) {
                    const isMatch = compareSync(credentials.password as string, user.password)

                    // If password is correct, return user
                    if (isMatch) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: user.role
                        }
                    }
                }
                // If user does not exist or the password does not match return null
                return null
            }
        })
    ],
    callbacks: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async session({ session, user, trigger, token }: any) {
            // Set the user ID from the token
            session.user.id = token.sub;
            session.user.role = token.role
            session.user.name = token.name

            // If there is an update, set the user name
            if (trigger === 'update') {
                session.user.name = user.name
            }
            return session
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async jwt({ token, user,trigger,session}: any) {
            // Assign user fields to token
            if (user) {
                token.id = user.id;
                token.role = user.role;

                // If user has no name then use the email
                if (user.name === 'NO_NAME') {
                    token.name = user.email!.split('@')[0]

                    // Update database to reflect token name
                    await prisma.user.update({
                        where: { id: user.id },
                        data: { name: token.name }
                    })
                }
                if (trigger === 'signIn' || trigger === 'signUp' ) {
                    const cookiesObject = await cookies();
                    const sessionCartId = cookiesObject.get('sessionCartId')?.value;

                    if (sessionCartId) {
                        const sessionCart = await prisma.cart.findFirst({
                            where: { sessionCartId },
                        });
                        if (sessionCart) {
                            //Delete current user cart
                            await prisma.cart.deleteMany({
                                where: { userId: user.id },
                            });

                            //assign the cart to the user
                            await prisma.cart.update({
                                where: { id: sessionCart.id },
                                data: { userId: user.id },
                            });
                        }
                    }
                }
                if (session?.user.name && trigger === 'update') {
                    token.name = session.user.name;
                }
            }
            return token
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        authorized({ request, auth }: any) {
            
            //Array  of regex patterns of paths we want to protect
            const protectedPaths = [
                /\/shipping-address/,
                /\/payment-method/,
                /\/place-order/,
                /\/profile/,
                /\/user\/(.*)/,
                /\/order\/(.*)/,
                /\/admin/,
            ];

            //Get pathname from the req URL object
            const { pathname } = request.nextUrl;

            //check if user is not authenticated and accessing a protected path
            if(!auth && protectedPaths.some((p) => p.test(pathname))) return false;

            // Check for session cart cookie
            if (!request.cookies.get('sessionCartId')) {
                // Generate new session cart id cookie
                const sessionCartId = crypto.randomUUID()
                
                //  Clone the request headers
                const newRequestHeaders = new Headers(request.headers)
                
                // Create new response and add the new headers
                const response = NextResponse.next({
                    request: {
                        headers: newRequestHeaders
                    }
                })
                
                // Set newly generated session cart id in the response cookies
                response.cookies.set('sessionCartId', sessionCartId)
                return response
            } else {
                return true
            }
        }
    },
} satisfies NextAuthConfig

export const {handlers, auth, signIn, signOut} = NextAuth(config)