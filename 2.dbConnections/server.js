const app = require("./src/app.js");
const connectDb = require("./src/db/db.js");

connectDb();

app.listen(3000, () => {
  console.log("Server is connected to port 3000");
});
