const fs = require("fs/promises");

async function createFile(file, content) {
  await fs.writeFile(file, content);
  console.log("File created");
}

async function readFile(file) {
  const data = await fs.readFile(file, "utf8");
  console.log(data);
}

async function deleteFile(file) {
  await fs.unlink(file);
  console.log("File deleted");
}

async function renameFile(oldName, newName) {
  await fs.rename(oldName, newName);
  console.log("File renamed");
}

module.exports = {
  createFile,
  readFile,
  deleteFile,
  renameFile,
};
