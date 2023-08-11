const dbConnect = require("./MongoDBconnection");

const findData = async () => {
  let data = await dbConnect();
  data = await data.find({}).toArray();
  console.log(data);
};

findData();

