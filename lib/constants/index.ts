export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Inkspire';
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'A Morden Ecommerce Store Built With Next.js';
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
export const LATEST_PRODUCT_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

export const signInDefaultValues = {
  email: 'admin@example.com',
  password : '123456',
}


export const signUpDefaultValues = {
  name:'',
  email: '',
  password: '',
  confirmPassword:'',
}


export const shippingAddressDefaultValues = {
  fullName: 'denis bhadani',
  streetAddress: '72,akruti bunglows',
  city: 'anytown',
  postalCode: '342001',
  country: 'india'
}