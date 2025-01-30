import { hashSync } from 'bcrypt-ts-edge';

const sampleData = {
  users: [
    {
      name: 'Denis',
      email: 'admin@example.com',
      password: hashSync('123456', 10),
      role : 'admin'
    },
    {
      name: 'john',
      email: 'user@example.com',
      password: hashSync('denis####123', 10),
      role : 'user'
    }
  ],
  products: [
    {
      name: 'The Mountain Is You',
      slug: 'the-mountain-is-you',
      category: 'Self-Help',
      images: [
        '/images/sample-products/the-mountain-is-you-1.jpg',
        '/images/sample-products/the-mountain-is-you-2.jpg'
      ],
      author: 'Brianna Wiest', // Single string for author
      description: 'A transformative book by Brianna Wiest that helps you overcome self-sabotage and embrace personal growth.',
      stock: 0,
      price: 1200.00,
      rating: 4.8,
      numReviews: 2301,
      isFeatured: true,
      banner: 'banner-the-mountain-is-you.jpg',
      createdAt: new Date()
    },
    {
      name: 'The Power of Your Subconscious Mind',
      slug: 'the-power-of-your-subconscious-mind',
      category: 'Psychology',
      images: [
        '/images/sample-products/the-power-of-your-subconscious-mind-1.jpg',
        '/images/sample-products/the-power-of-your-subconscious-mind-2.jpg'
      ],
      author: 'Dr. Joseph Murphy', // Single string for author
      description: 'Dr. Joseph Murphy explores the untapped potential of the subconscious mind to achieve success and happiness.',
      stock: 25,
      price: 1200.00,
      rating: 4.7,
      numReviews: 1892,
      isFeatured: true,
      banner: 'banner-the-power-of-your-subconscious-mind.jpg',
      createdAt: new Date()
    },
    {
      name: 'The Art of Letting Go',
      slug: 'the-art-of-letting-go',
      category: 'Self-Help',
      images: [
        '/images/sample-products/the-art-of-letting-go-1.jpg',
        '/images/sample-products/the-art-of-letting-go-2.jpg'
      ],
      author: 'Damon Zahariades', // Single string for author
      description: 'A reflective guide by Damon Zahariades to releasing negativity and embracing freedom.',
      stock: 15,
      price: 11.99,
      rating: 4.6,
      numReviews: 1204,
      isFeatured: false,
      banner: null,
      createdAt: new Date()
    },
    {
      name: 'Don’t Believe Everything You Think',
      slug: 'dont-believe-everything-you-think',
      category: 'Self-Help',
      images: [
        '/images/sample-products/dont-believe-everything-you-think-1.jpg',
        '/images/sample-products/dont-believe-everything-you-think-2.jpg'
      ],
      author: 'Joseph Nguyen', // Single string for author
      description: 'Joseph Nguyen provides a deep dive into untangling your thoughts and finding mental clarity.',
      stock: 18,
      price: 13.99,
      rating: 4.5,
      numReviews: 954,
      isFeatured: false,
      banner: null,
      createdAt: new Date()
    },
    {
      name: 'Read People Like a Book',
      slug: 'read-people-like-a-book',
      category: 'Psychology',
      images: [
        '/images/sample-products/read-people-like-a-book-1.jpg',
        '/images/sample-products/read-people-like-a-book-2.jpg'
      ],
      author: 'Patrick King', // Single string for author
      description: 'Patrick King reveals techniques for understanding people’s behavior and intentions.',
      stock: 22,
      price: 12.49,
      rating: 4.4,
      numReviews: 742,
      isFeatured: false,
      banner: null,
      createdAt: new Date()
    },
    {
      name: 'The 5 AM Club',
      slug: 'the-5-am-club',
      category: 'Productivity',
      images: [
        '/images/sample-products/the-5-am-club-1.jpg',
        '/images/sample-products/the-5-am-club-2.jpg'
      ],
      author: 'Robin Sharma', // Single string for author
      description: 'Robin Sharma’s life-changing morning routine to achieve success and mastery.',
      stock: 12,
      price: 16.99,
      rating: 4.8,
      numReviews: 2834,
      isFeatured: true,
      banner: 'banner-the-5-am-club.jpg',
      createdAt: new Date()
    },
    {
      name: 'The Compound Effect',
      slug: 'the-compound-effect',
      category: 'Success',
      images: [
        '/images/sample-products/the-compound-effect-1.jpg',
        '/images/sample-products/the-compound-effect-2.jpg'
      ],
      author: 'Darren Hardy', // Single string for author
      description: 'Darren Hardy outlines how small, consistent actions lead to extraordinary results.',
      stock: 10,
      price: 15.99,
      rating: 4.9,
      numReviews: 2128,
      isFeatured: true,
      banner: 'banner-the-compound-effect.jpg',
      createdAt: new Date()
    },
  ]
};

export default sampleData;
