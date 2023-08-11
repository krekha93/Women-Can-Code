const dbConnect = require("./MongoDBconnection");

const insertData = async () => {
  let data = await dbConnect();
  data = await data.insertMany([
    { name: "kumari", email: "kumari@gmail.com" },
    { name: "kumari2", email: "kumari2@gmail.com" },
  ]);

  if (data.acknowledged) {
    console.log("data inserted");
  }
};

insertData();
