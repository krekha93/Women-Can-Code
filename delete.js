const dbConnect = require("./MongoDBconnection");

const deleteData = async () => {
  let data = await dbConnect();
  //   data = await data.deleteOne({ name: "kumari2" });
  data = await data.deleteMany({ name: "kumari2" });

  if (data.acknowledged) {
    console.log("data delete");
  }
};

deleteData();
