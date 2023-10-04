const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// Initialize a variable to store the selected color.
let selectedColor = "white";

// Updated form function to include a color selector dropdown.
const form = () => {
  return `
  <body>
  <p>Selected Color: <span style="background-color:${selectedColor}; padding: 20px;">&nbsp;</span></p>
  <form method="POST">
    <label for="color">Select a color:</label>
    <select name="color" id="color">
      <option value="black">Black</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="red">Red</option>
      <option value="pink">Pink</option>
    </select>
    <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // Update the selectedColor based on the submitted form data.
      if (body["color"]) {
        selectedColor = body["color"];
      }
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
