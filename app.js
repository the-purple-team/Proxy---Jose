const express = require("express");
const morgan = require("morgan");
const path = require("path");
const server = express();
const proxy = require("http-proxy-middleware");
const cors = require('cors');

const PORT = process.env.PORT || 3001;
server.use(cors())
server.use(morgan("dev"));
server.use(express.static(path.join(__dirname, "public")));


server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
// const questions = proxy({
//   target: "http://localhost:3000",
//   changeOrigin: true,
//   pathRewrite: {
//     "^/products": '/questions'
//   }
// });

// const bruce = proxy({
//   target: "http://localhost:8080",
//   changeOrigin: true,
//   pathRewrite: {
//     "^/products": '/products'
//   },
//   logLevel: 'debug'
// });


// localhost:3000
// server.use('/questions', proxy({target: "http://localhost:3000/", changeOrigin: true }));
// server.use('/questions/product', proxy({target: "http://localhost:3000/", changeOrigin: true }));
// server.use('/ask/vote/question/', proxy({target: "http://localhost:3000/", changeOrigin: true }));


// localhost:8080
// server.use('/products',proxy({target: "http://localhost:8080/", changeOrigin: true}));
// server.use('/products/getallproducts/', proxy({target: "http://localhost:8080/", changeOrigin: true}));

// server.use('/products', proxy({target: "http://localhost:8080/", changeOrigin: true }));
// server.use('/product', proxy({target: "http://localhost:8080/", changeOrigin: true }));
// server.use('/products', proxy({target: "http://localhost:3000/", changeOrigin: true }));

// server.use("/products", questions);
// server.use('/products', bruce);

server.listen(PORT, () => {
  console.log(`server runnit at: http://localhost:${PORT}`);
});
