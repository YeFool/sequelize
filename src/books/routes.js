const {Router} = require("express")

const bookRouter = Router()

const{addBook, getAllBooks, deleteOneBook, deleteEverything, updateBook, getBookTitle } = require("./controllers")

bookRouter.post("/books/addBook", addBook)
bookRouter.get("/books/getAllBooks", getAllBooks)
bookRouter.delete("/books/deleteOneBook", deleteOneBook)
bookRouter.delete("/books/deleteEverything", deleteEverything)
bookRouter.put("/books/updateBook", updateBook)
bookRouter.get("/books/getbook/:title", getBookTitle);




module.exports = bookRouter