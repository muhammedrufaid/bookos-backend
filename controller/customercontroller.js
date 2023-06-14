const {customer} =require ("../models/schema")


//create data start

const addcustomer=async(req,res)=>{
    const {name,address,district,state,product,village}=req.body
  
    const findcustomer =await customer.findOne({bookname})
      if (findcustomer){
      res.json({
          message:"customer already exist",
          isError:true
      });
      }
      else{
       const newcustomer =await customer.create({

        name,
        address,
        district,
        state,
        product,
        village,
       })
              res.json({
                  Message: "customer Created",
                  Details: newcustomer,
               })
     
      }
  }
  
  //create data end


  module.exports ={addcustomer};