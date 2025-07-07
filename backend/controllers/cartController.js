// import userModel from "../models/userModel.js"

// // add to cart 
// const addToCart = async (req,res) =>{

//     try {
//         let userData = await userModel.findById(req.body.userId);
//         let cartData = await userData.cartData;
//         if(!cartData[req.body.itemId]){
//             cartData[req.body.itemId] = 1
//         }
//         else{
//             cartData[req.body.itemId] += 1;
//         }
//         await userModel.findByIdAndUpdate(req.body.userId,{cartData});
//         res.json({success:true,message:"Added to cart "})
//     } catch (error) {

//         console.log(error);
//         res.json({success:false,message:""})
        
//     }

// }


// //remove item from user cart
// const removeFromCart = async (req,res) => {
     
//      try {
//         let userData = await userModel.findById(req.body.userId);
//         let cartData = await userData.cartData;
//         if(cartData[req.body.itemId]>0){
//             cartData[req.body.itemId] -= 1;
//         }
//         await userModel.findByIdAndUpdate(req.body.userId,{cartData});
//         res.json({success:true,message:"Removed From Cart"})
//      } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//      }
// }


// // fetch user cart data
// const getCart = async (req,res) =>{

//     try {

     
  

//         let userData = await userModel.findById(req.body.userId);
        
//         let cartData = await userData.cartData;
//         res.json({success:true,cartData})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }

// }


  


  

// export {addToCart,removeFromCart,getCart}



import userModel from "../models/userModel.js";

// Add to cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.userId, { cartData });
    res.json({ success: true, message: "Added to cart" });
  } catch (error) {
    console.log("addToCart error:", error);
    res.json({ success: false, message: "Error while adding to cart" });
  }
};

// Remove item from user cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(req.userId, { cartData });
    res.json({ success: true, message: "Removed from cart" });
  } catch (error) {
    console.log("removeFromCart error:", error);
    res.json({ success: false, message: "Error while removing from cart" });
  }
};

// Fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.log("getCart error:", error);
    res.json({ success: false, message: "Error while fetching cart" });
  }
};

export { addToCart, removeFromCart, getCart };
