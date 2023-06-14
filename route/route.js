const express = require("express");
const { addbook, deletebook, updatebook, displaybooks, displaybookparams } = require("../controller/bookscontroller");
const { CreateClient, clientdata } = require("../controller/clientcontroller");
const { signup, login, admins } = require("../controller/controller");
const { addcustomer } = require("../controller/customercontroller");
const { PlaceOrder, CancelOrder, DisplayOrder, DisplayOrderParams } = require("../controller/ordercontroller");
const { signupteam, loginteam, teamslist } = require("../controller/teamcontroller");
// const protect =require("../middle/middle");

const routerindex = express.Router()


routerindex.route("/signup").post(signup);
routerindex.route("/login").post(login);
routerindex.route("/admins").get(admins);

routerindex.route("/addbook").post(addbook);
routerindex.route("/deletebook/:id").delete(deletebook);
routerindex.route("/updatebook/:id").put(updatebook);
routerindex.route("/displaybooks").get(displaybooks);
routerindex.route("/displaybooksparams/:id").get(displaybookparams);


routerindex.route("/teamsignup").post(signupteam);
routerindex.route("/teamlogin").post(loginteam);
routerindex.route("/teamlist").get(teamslist);
routerindex.route("/placeorder").post(PlaceOrder);
routerindex.route("/cancelorder/:id").delete(CancelOrder);
routerindex.route("/displayorder").get(DisplayOrder);
routerindex.route("/displayorderparams/:id").get(DisplayOrderParams);
routerindex.route("/addcustomer").post(addcustomer);
routerindex.route("/addclient").post(CreateClient);
routerindex.route("/clientdata").get(clientdata);



module.exports = routerindex;