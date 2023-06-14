const { books } = require("../models/schema");

//create data start

const addbook = async(req, res) => {
    const { bookname, author, category, publication, price, description } =
    req.body;

    const findbook = await books.findOne({ bookname });
    if (findbook) {
        res.json({
            message: "Book already exist",
            isError: true,
        });
    } else {
        const newBook = await books.create({
            bookname,
            author,
            category,
            publication,
            price,
            description,
        });
        res.json({
            Message: "Book Created",
            Details: newBook,
        });
    }
};

//create data end

//Update Data Start

const updatebook = async(req, res) => {
    const _id = req.params.id;
    const { bookname, author, publication, price, category, description } =
    req.body;

    await books.findByIdAndUpdate(_id, {
        bookname,
        author,
        publication,
        category,
        price,
        description,
    });
    res.json("Book Updated");
};

//Update Data End


//Delete Data Start
const deletebook = async(req, res) => {
    const _id = req.params.id;
    const deleteUser = await books.findByIdAndDelete(_id);
    res.json("Book Deleted");
};
//Delete Data End

//Display Function Start

const displaybooks = async(req, res) => {
    const displaybook = await books.find();
    res.json(displaybook);
};

// Display Function End

// Display with params Start

const displaybookparams = async(req, res) => {
    const _id = req.params.id;
    // console.log(_id,"params");
    const displayBookparam = await books.findById(_id);
    // console.log(displayBookparam)
    res.json(displayBookparam);
};

// Display with params End

// search start

// search end

module.exports = {
    updatebook,
    deletebook,
    addbook,
    displaybooks,
    displaybookparams,
};