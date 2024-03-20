const MongoClient= require('mongodb').MongoClient;

const password = process.env.MONGODB_PASSWORD;
const url = `mongodb+srv://shuateng2009:${password}@refresher-cluster.gx70tte.mongodb.net/?retryWrites=true&w=majority&appName=Refresher-Cluster`;

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    }

    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db('product_test');
        const result = await db.collection('products').insertOne(newProduct);
    } catch(error) {
        return res.json({massage: "Could not store data into database."});
    }
    client.close();

    res.json(newProduct);
};

const getProducts = async (req, res, next) => {
    
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;