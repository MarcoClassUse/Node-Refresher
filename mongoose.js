const mongoose = require("mongoose");
const Product = require("./models/product");

const password = process.env.MONGODB_PASSWORD;
const url = `mongodb+srv://shuateng2009:${password}@refresher-cluster.gx70tte.mongodb.net/product_test?retryWrites=true&w=majority&appName=Refresher-Cluster`;

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });

const createProduct = async (req, res, next) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  const result = await newProduct.save();

  res.json(result);
};

exports.createProduct = createProduct;
