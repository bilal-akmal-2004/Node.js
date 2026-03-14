const fs = require("fs");

const command = process.argv[2];
const file = process.argv[3];

if (command === "create") {
  fs.writeFileSync(file, "Hello World");
  console.log("File created");
} else if (command === "delete") {
  fs.unlinkSync(file);
  console.log("File deleted");
} else {
  console.log("Unknown command");
}
