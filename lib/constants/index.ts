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
  fullName: '',
  streetAddress: '',
  city: '',
  postalCode: '',
  country: '',
}

export const PAYMENT_METHODS = process.env.PAYMENT_METHODS ? process.env.PAYMENT_METHODS.split(',') : [ 'PayPal', 'CashOnDelivery'];

export const DEFAULT_PAYMENT_METHOD = process.env.DEFAULT_PAYMENT_METHOD || 'PayPal';

export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 10;

export const productDefaultValues = {
  name: '',
  slug: '',
  category: '',
  images: [],
  author: '',
  description: '',
  price: '0',
  stock: 0,
  rating: '0',
  numReviews: '0',
  isFeatured: false,
  banner: null,
};

export const USER_ROLES = process.env.USER_ROLES
  ? process.env.USER_ROLES.split(', ')
  : ['admin', 'user'];

  export const reviewFormDefaultValues = {
    title: '',
    comment: '',
    rating: 0,
  };
  
  export const SENDER_EMAIL = process.env.SENDER_EMAIL || 'onboarding@resend.dev';