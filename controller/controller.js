const {project} = require("../models/schema")
const bcrypt =require("bcrypt")     
const jwt =require("jsonwebtoken")


const signup = async(req, res) => {
    const { name, email, password ,phone,username,role,status,} = req.body;

  //encrypt password
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const UserExist = await project.findOne({ email: email });
    if (UserExist) {
        res.json({ 
            Message: "user already exist",
             isError: true 
            });
        console.log("user already exist");
    } else {
        const userLogData = await project.create({
            name,
            username,
            role,
            status,
            email,
            phone,
            password: hashedPassword,
        });

        res.json({
            id: userLogData.id,
            name: userLogData.name,
            email: userLogData.email,
            isError: false,
           token:generateToken(userLogData.id)
        });
        console.log("User Created");
    }
};

  //Token start

  const generateToken =(id) =>{
    return jwt.sign({id},"rufaid111",{expiresIn:"1d"})
}

// Token End


const login = async(req, res) => {
    const { email, password } = req.body;
    const userLogData = await project.findOne({
        email,
        password,
    });
    console.log(userLogData);
    if (userLogData) {
        res.json(userLogData);
        console.log("Successfully login");
    } else {
        res.json({
            Message: "login failed ",
            isError: true,
        });
        console.log("login failed");
    }
};


// const account = async(req, res) => {
//     const alldetails = await project.find();
//     res.json(alldetails);
// };

const admins = async (req, res) => {
    const admin = await project.find();
    res.json(admin);
  };








module.exports={signup,login,admins}