const {Router} = require("express");
const genreRouter = Router();


const {addGenre, getBooksGenre} = require("./controllers");


genreRouter.post("/genres/addGenre", addGenre);
genreRouter.get("/genres/getbooksbygenre/:genre", getBooksGenre);

module.exports = genreRouter;