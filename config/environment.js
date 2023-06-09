const path = require("path");

module.exports = {
  paths: {
    /* Path to source files directory */
    source: path.resolve(__dirname, "../src/"),

    /* Path to built files directory */
    output: path.resolve(__dirname, "../build/"),
  },
  server: {
    proxy: "http://localhost:8888",
    //port: 8080,
    //host: "192.168.1.1"
  },
  limits: {
    /* Image files size in bytes. Below this value the image file will be served as DataURL (inline base64). */
    img: 8192,

    /* Font files size in bytes. Below this value the font file will be served as DataURL (inline base64). */
    fonts: 8192,
  },
};
