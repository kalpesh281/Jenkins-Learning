const app = require("./app");
const connectDB = require("./config/Db");
require("dotenv").config();

PORT = process.env.PORT || 5000;

connectDB().then(() => {
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
})
