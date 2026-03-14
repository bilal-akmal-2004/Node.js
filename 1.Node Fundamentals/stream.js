const fs = require("fs");

const readStream = fs.createReadStream("large.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.length);
  //   console.log("Chunk:", chunk);
});

readStream.on("end", () => {
  console.log("Finished reading file");
});
