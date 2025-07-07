// import jwt from "jsonwebtoken"

// const authMiddleware = async (req,res,next)=>{
//     const token = req.headers.token;

   
//    if(!token){
//     return res.json({success:false,message:"Not Authorized Login Again"})
//    }

//    try {
//     const token_decode = jwt.verify(token,process.env.JWT_SECRET);
//     req.body.userId = token_decode.id;
//     next();
//    } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"Error"})
    
//    }


// }

// export default authMiddleware;



import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized. Login again." });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = token_decode.id;  // ✅ safe, works in GET/POST
    next();
  } catch (error) {
    console.log("authMiddleware error:", error);
    res.json({ success: false, message: "Invalid token." });
  }
};

export default authMiddleware;
