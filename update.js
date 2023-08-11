const dbConnect = require("./MongoDBconnection");

const updateData = async () => {
  let data = await dbConnect();
  data = await data.updateOne({ name: "kumari" }, { $set: { name: "Shalu" } });
  console.log(data);
};

updateData();
