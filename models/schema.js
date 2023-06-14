const mongoose = require("mongoose");

//login schema start

const loginschema = mongoose.Schema({
  name: { type: String },
  username: { type: String },
  role: { type: String },
  status: { type: String },
  password: { type: String },
  phone: { type: String },
  email: { type: String },
});

const project = mongoose.model("project", loginschema);

//login schema End

//books schema start

const bookschema = mongoose.Schema({
  bookname: { type: String },
  author: { type: String },
  category: { type: String },
  publication: { type: String },
  description: { type: String },
  price: { type: String },
});

const books = mongoose.model("books", bookschema);

//books schema End

//customer schema start

const customerschema = mongoose.Schema({
  name: { type: String },
  address: { type: String },
  district: { type: String },
  Product: { type: String },
  Village: { type: String },
  state: { type: String },
});

const customer = mongoose.model("customer", customerschema);

//customer schema End

//Team schema start

const TeamSchema = mongoose.Schema({
  email: { type: String },
  firmname: { type: String },
  firmaddress: { type: String },
  employeename: { type: String },
  employeeaddress: { type: String },
  phone: { type: String },
  alterphone: { type: String },
  description: { type: String },
  position: { type: String },
  password: { type: String },
});
const Team = mongoose.model("Teamlist", TeamSchema);

//Team schema End

//order schema start

const Orderschema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  address: { type: String },
  pincode: { type: String },
  country: { type: String },
  phone: { type: String },
  alterphone: { type: String },
  product: { type: String },
  buymode: { type: String },
  delivery: { type: String },
});
const Order = mongoose.model("OrderList", Orderschema);

//order schema End

//login schema start

//client schema start

const clientschema = mongoose.Schema({
  name: { type: String },
  username: { type: String },
  role: { type: String },
  status: { type: String },
  password: { type: String },
  phone: { type: String },
  email: { type: String },
});

const client = mongoose.model("client", clientschema);

//login schema End

module.exports = { project, books, customer, Team, Order, client };
