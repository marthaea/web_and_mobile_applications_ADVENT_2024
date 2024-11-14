// CONROLLERS

const express = require('express');    //Connects to the database . picking a certain table
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// SERVICE

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

//MODELS

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}