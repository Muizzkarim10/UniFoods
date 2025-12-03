// src/Data.jsx

// Menu images
import menuImage1 from "./assets/images/menu-1.jpg";
import menuImage2 from "./assets/images/menu-2.jpg";
import menuImage3 from "./assets/images/menu-3.png";
import menuImage4 from "./assets/images/menu-4.jpg";
import menuImage5 from "./assets/images/menu-5.jpg";
import menuImage6 from "./assets/images/menu-6.jpg";
import menuImage7 from "./assets/images/menu-7.jpg"; 
import menuImage8 from "./assets/images/menu-8.jpg"; 
import menuImage9 from "./assets/images/menu-9.jpg";

// Cart images
import cartImage1 from "./assets/images/cart-item-1.jpg";
import cartImage2 from "./assets/images/cart-item-2.jpg";
import cartImage3 from "./assets/images/cart-item-3.jpg";
import cartImage4 from "./assets/images/cart-item-4.jpg";

// Product images
import productImage1 from "./assets/images/product-1.jpg";
import productImage2 from "./assets/images/product-2.jpg";
import productImage3 from "./assets/images/product-3.jpg";

// Review images
import reviewImage1 from "./assets/images/pic-1.jpg";
import reviewImage2 from "./assets/images/pic-2.jpg";
import reviewImage3 from "./assets/images/pic-3.jpg";

// Quote image (for review section)
import quoteImg from "./assets/images/quote-img.png"; // add your quote image in this path

// Blog images
import blogImage1 from "./assets/images/blog-1.jpg";
import blogImage2 from "./assets/images/blog-2.jpg";
import blogImage3 from "./assets/images/blog-3.jpg";

// Menu items
const menu = [
  { img: menuImage1, name: "Cheese Burger", price: 8.99 },
  { img: menuImage2, name: "Fries & nuggets", price: 12.5 },
  { img: menuImage3, name: "Crispy Fried Chicken", price: 10.0 },
  { img: menuImage4, name: "Pizza", price: 5.5 },
  { img: menuImage5, name: "Chicken Wraps", price: 11.0 },
  { img: menuImage6, name: "Coffee", price: 9.5 },
  { img: menuImage7, name: "Biryani", price: 14.0 },  
  { img: menuImage8, name: "Chowmein", price: 12.0 },   
  { img: menuImage9, name: "Refreshments", price: 5.0 }, 
];

// Cart items
const cart = [
  { img: cartImage1, name: "Cheese Burger", price: 8.99 },
  { img: cartImage2, name: "Veggie Pizza", price: 12.5 },
  { img: cartImage3, name: "Chicken Sandwich", price: 10.0 },
  { img: cartImage4, name: "French Fries", price: 5.5 },
];

// Products section
const product = [
  { img: productImage1, name: "Burger", price: 4.5 },
  { img: productImage2, name: "Crispy Chicken", price: 5.0 },
  { img: productImage3, name: "Ice Cream", price: 4.8 },
];

// Reviews
const review = [
  { img: reviewImage1, name: "Alina Khan", feedback: "Amazing food and fast delivery!" },
  { img: reviewImage2, name: "Salar Ahmed", feedback: "Love the variety in menu." },
  { img: reviewImage3, name: "Sheza Baig", feedback: "Easy to order and delicious!" },
];

// Blogs
const blog = [
  { img: blogImage1, title: "Top 5 Foods of our Cafeteria", date: "Dec 1, 2025" },
  { img: blogImage2, title: "Healthy Eating Tips for Students", date: "Nov 25, 2025" },
  { img: blogImage3, title: "CampusEats Recipe Highlight", date: "Nov 15, 2025" },
];

export { menu, cart, product, review, blog, quoteImg };
