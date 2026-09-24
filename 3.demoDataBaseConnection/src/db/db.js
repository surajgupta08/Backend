const mongoose = require("mongoose");

async function connectDb() {
  (await mongoose.connect(
    "mongodb+srv://suraj:FwWGWDLGlk2lJwZi@complete-backend.e5oc59v.mongodb.net/suraj",
  ),
    console.log("Connected to db"));
}

module.exports = connectDb;
