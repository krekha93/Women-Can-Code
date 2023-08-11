const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/youtube");
const schema = new mongoose.Schema({ name: String, email: String });

const saveInDb = async () => {
  const model = mongoose.model("playlist", schema);
  let data = new model({ name: "Damini", email: "Damini@gmail.com" });
  let result = await data.save();
  console.log(result);
};

const updateInDb = async () => {
  const model = mongoose.model("playlist", schema);
  let data = await model.updateOne(
    { name: "Kumari" },
    { $set: { name: "Damini" } }
  );

  console.log(data);
};

// updateInDb();

const deleteInDb = async () => {
  const model = mongoose.model("playlist", schema);
  let data = await model.deleteOne({ name: "Rekha" });

  console.log(data);
};

deleteInDb();
