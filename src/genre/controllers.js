const Genre = require("./model");
const Book = require("../books/model");


const addGenre = async (req, res) => {
    try {
        const newGenre = await Genre.create(req.body);
        res.status(201).json({message: "Success", genre: newGenre})
    } catch (error) {
        console.log(error)
        res.status(501).json({message: error.message, error: error});
    }
};


const getBooksGenre = async (req, res) => {
    try {
        const findGenre = await Genre.findAll({
            where: {
                genre: req.params["genre"]
            },
            include: Book,
        });
        res.status(200).json({message: "Success", booksByGenre: findGenre})
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};


module.exports = {
    addGenre,
    getBooksGenre
};