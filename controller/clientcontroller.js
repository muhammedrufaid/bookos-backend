const {client} =require("../models/schema")
const bcrypt =require("bcrypt")     
const jwt =require("jsonwebtoken")


//create client

const CreateClient = async(req, res) => {
    const { name, email, password ,phone,username,role,status,} = req.body;

  //encrypt password
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const UserExist = await client.findOne({ email: email });
    if (UserExist) {
        res.json({ 
            Message: "user already exist",
             isError: true 
            });
        console.log("user already exist");
    } else {
        const userLogData = await client.create({
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


//client end

 //Token start

 const generateToken =(id) =>{
    return jwt.sign({id},"rufaid111",{expiresIn:"1d"})
}

// Token End

const clientdata= async (req, res) => {
    const admin = await client.find();
    res.json(admin);
  };


module.exports={CreateClient,clientdata}