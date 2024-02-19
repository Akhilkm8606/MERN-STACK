const app = require("./app");
const connectDb = require("./db/connection");
connectDb()




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
