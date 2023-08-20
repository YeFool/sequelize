const Book = require("./model")
const Author = require("../authors/model")

const addBook = async (req, res) => {
    try {
        const author = await Author.findOne({
            where: { authorName: req.body.author}
   });

    if (!author) {
    return res.status(404).json({ message: "Author not found" });
}
        const newBook = await Book.create(
            req.body
        )

        res.status(200).json({message: "Success", book: newBook })
    } catch (error)  {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}

const getAllBooks = async (req, res) => {
    try  {
        const books = await Book.findAll()
        res.status(200).json({message: "Success", books: books})
    } catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}

const deleteOneBook = async (req, res) => {
    try  {
        const deleteOne = await Book.destroy({
            where: {
                title: req.body.title
            }
        })
        res.status(200).json({message: "Success", book: deleteOne})
    } catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}

const deleteEverything = async (req, res) => {
    try  {
        const deleteAll = await Book.destroy({
            truncate: true
        })
        res.status(200).json({message: "Success", book: deleteAll})
    } catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}

const updateBook = async (req, res) => {
    try  {
        const updateOne = await Book.update({author: req.body.newAuthor, title: req.body.title}, { 
            // where: {
            //     author: null
            // }
        });
        res.status(200).json({message: "Success", book: updateOne})
    } catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}


const getBookTitle = async (req, res) => {
        try {
            const bookTitle = await Book.findOne({
                where: {
                    title: req.params.title
                }
            });
            res.status(200).json({message: "Success: book found", book: bookTitle});
    } catch (error) {
        res.status(501).json({message: error.message, error: error})
        console.log(error)
    }
}


module.exports = {
    addBook,
    getAllBooks,
    deleteOneBook,
    deleteEverything,
    updateBook,
    getBookTitle
}