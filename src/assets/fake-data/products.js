// all images imported from images directory
import product_01_image_01 from '../images/product_01.jpg';
import product_01_image_02 from '../images/product_01.1.jpg';
import product_01_image_03 from '../images/product_01.3.jpg';

import product_02_image_01 from '../images/product_2.1.jpg';
import product_02_image_02 from '../images/product_2.2.jpg';
import product_02_image_03 from '../images/product_2.3.jpg';

import product_03_image_01 from '../images/product_3.1.jpg';
import product_03_image_02 from '../images/product_3.2.jpg';
import product_03_image_03 from '../images/product_3.3.jpg';

import product_04_image_01 from '../images/product_4.1.jpg';
import product_04_image_02 from '../images/product_4.2.jpg';
import product_04_image_03 from '../images/product_4.3.png';

import product_05_image_01 from '../images/product_04.jpg';
import product_05_image_02 from '../images/product_08.jpg';
import product_05_image_03 from '../images/product_09.jpg';

import product_06_image_01 from '../images/bread(1).png';
import product_06_image_02 from '../images/bread(2).png';
import product_06_image_03 from '../images/bread(3).png';

const products = [
  {
    id: '01',
    title: 'Chicken Burger',
    price: 99.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Burger',

desc:'A burger is a popular sandwich consisting of a cooked patty, usually of ground meat, placed inside a sliced bun or roll, often accompanied by various toppings such as lettuce, tomato, cheese, and condiments.'  },

  {
    id: '02',
    title: 'Vegetarian Pizza',
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: 'Pizza',

    desc: 'A vegetarian pizza is a delicious dish featuring a crust topped with tomato sauce, a variety of vegetables such as bell peppers, onions, mushrooms, and tomatoes, and often finished with cheese and herbs.',
  },

  {
    id: '03',
    title: 'Double Cheese Margherita',
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: 'Pizza',

    desc: 'A Double Cheese Margherita is a classic pizza featuring a rich layer of tomato sauce, topped with double portions of mozzarella cheese, and garnished with fresh basil leaves for a simple yet delicious flavor profile.',
  },

  {
    id: '04',
    title: 'Mexican Green Wave',
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: 'Pizza',

    desc: 'A Mexican Green Wave pizza is a flavorful option that includes a blend of fresh vegetables such as crunchy capsicum, juicy tomatoes, spicy jalapeños, and crisp onions, all layered over a bed of mozzarella cheese and tomato sauce, often garnished with Mexican herbs and spices.',
  },

  {
    id: '05',
    title: 'Cheese Burger',
    price: 50.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: 'Burger',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },
  {
    id: '06',
    title: 'Royal Cheese Burger',
    price: 60.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Burger',

    desc: 'A Royal Cheese Burger is a gourmet sandwich that features a juicy beef patty topped with premium cheeses, typically cheddar and Swiss, along with fresh lettuce, tomato, onions, and a tangy special sauce, all nestled in a toasted brioche bun.',
  },

  {
    id: '07',
    title: 'Seafood Pizza',
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: 'Pizza',

    desc: 'A tantalizing blend of shrimp, clams, mussels, squid, or crabmeat on a tomato or white sauce base, crowned with gooey mozzarella, all atop a crispy or chewy crust.',
  },

  {
    id: '08',
    title: 'Thin Cheese Pizza',
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: 'Pizza',

    desc: 'A thin crust canvas adorned with a melty layer of stretchy mozzarella, perfect for those who savor simplicity.',
  },

  {
    id: '09',
    title: 'Pizza With Mushroom',
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: 'Pizza',

    desc: 'A delectable pizza adorned with earthy, savory mushrooms, adding depth and flavor to each cheesy bite.',
  },

  {
    id: '10',
    title: 'Classic Hamburger',
    price: 40.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: 'Burger',

    desc: 'The timeless combination of a juicy beef patty nestled between a soft bun, dressed with lettuce, tomato, onion, and a dollop of tangy sauce, satisfying cravings for comfort food.',
  },

  {
    id: '11',
    title: 'Crunchy Bread ',
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: 'Bread',

    desc: 'Crunchy bread, boasting a satisfying exterior crackle while revealing a soft, fluffy interior upon every hearty bite.',
  },

  {
    id: '12',
    title: 'Delicious Bread ',
    price: 35.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: 'Bread',

    desc: 'Indulge in the delightful aroma and taste of freshly baked bread, with a crust that crackles and a tender interior that melts in your mouth.',
  },

  {
    id: '13',
    title: 'Loaf Bread ',
    price: 35.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: 'Bread',

    desc: 'A classic loaf of bread, with its golden crust and soft, pillowy interior, ready to be sliced and enjoyed with your favorite spreads or as the perfect accompaniment to any meal.',
  },
];

export default products;
