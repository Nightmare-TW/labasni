const db = require('./index.js');
const Post = require('./Posts.js');

const samplePosts = [
  {
    name: 'Nike air',
    description: 'Inspired by the early 2000s look, the Air Max Genome adds a fresh face to the Air Max house. Its techy upper features a mixture of materials including sleek no-sew skins, airy mesh and durable plastic details. The low-profile, full-length Air unit adds comfort to match its sleek design that\'s sure to become your new favorite Air Max. This product is made with at least 20% recycled materials by weight.',
    image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c4cf48f0-013e-49e6-a953-c7ceb54ec902/air-max-97-shoe-nsRddC.png',
    price: '250 $',
    availability: '10 in Stock',
    brand: 'Nike',
    category: 'Men'
  },
  {
    name: 'Addidas Running',
    description: 'Inspired by the early 2000s look, the Air Max Genome adds a fresh face to the Air Max house. Its techy upper features a mixture of materials including sleek no-sew skins, airy mesh and durable plastic details. The low-profile, full-length Air unit adds comfort to match its sleek design that\'s sure to become your new favorite Air Max. This product is made with at least 20% recycled materials by weight.',
    image: 'https://d3d71ba2asa5oz.cloudfront.net/12004499/images/womens-adidas-sensebounce%2B-running-shoe-color-glory-pinkcloud-white-regular-width-size-6.5-609465445128-04.2885.jpg',
    price: '170 $',
    availability: '5 in Stock',
    brand: 'Addidas',
    category: 'Womens'
  },
  {
    name: 'Puma Peanuts',
    description: 'Inspired by the early 2000s look, the Air Max Genome adds a fresh face to the Air Max house. Its techy upper features a mixture of materials including sleek no-sew skins, airy mesh and durable plastic details. The low-profile, full-length Air unit adds comfort to match its sleek design that\'s sure to become your new favorite Air Max. This product is made with at least 20% recycled materials by weight.',
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/375740/02/sv01/fnd/IND/fmt/png/PUMA-x-PEANUTS-Shuffle-Kids\'-Shoes',
    price: '100 $',
    availability: '2 in Stock',
    brand: 'Puma',
    category: 'Kids'
  }
];

const insertSamplePosts = function() {
  Post.create(samplePosts)
    .then(() => {
      console.log('Database seeded successfully');
    })
    .catch((error) => {
      console.log('error seeding the database: ', error);
    })
    .finally(() => {
      db.close();
    });
};

insertSamplePosts();