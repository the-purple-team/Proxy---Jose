const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const proxy = require("http-proxy-middleware");

const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.use(proxy("/", { target: "http://localhost:3000/", changeOrigin: true }));
app.use(proxy("/:id", {target: "http://locahost:3000/:id", changeOrigin: true}));


app.listen(PORT, () => {
  console.log(`server runnit at: http://localhost:${PORT}`);
});
