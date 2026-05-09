use("ecommerce");

// db.products.find();

// db.products.find({"name":"Wireless Mouse"});

// db.products.find({"price":{$gt : 1000}});

// db.products.find({ price: { $gte: 1000, $lte: 50000 } });

// db.products.find({
//   $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }],
// });

// db.products.find({},{name: 1,price:1,_id:0});

// db.products.find().limit(2);

// db.products.find().sort({price:-1}).limit(2);

// db.products.countDocuments();

db.products.distinct('category');

// aggregation pipeline - match, group (sum, avg, count), project, sort, limit
// push and pull
// transactions
// explain plan
// performance concepts
// rarely asked - admin commands, deep internal commands
