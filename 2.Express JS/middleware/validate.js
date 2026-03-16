// this is he validation for the put and post req thta the both AUTHOR & BOOK name is required
function validateBook(req, res, next) {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      message: "Title and Author are required",
    });
  }

  next();
}

module.exports = validateBook;
