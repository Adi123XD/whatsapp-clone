import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
const protectRoute = async (req , res, next)=>{
    try {
        const token = req.cookies.authToken;
        if (!token )
        {
            return res.status(401).json({error : "Unauthorised - No token provided"})
        }
        const decoded = jwt.verify(token , process.env.JWT_SECRET)
        if (!decoded)
        {
            return res.status(401).json({error : "Unauthorised - Invalid token"})
        }
        const user = await User.findOne({_id : decoded.userId}).select("-password")
        if (!user)
        {
            return res.status(404).json({error :"User not found"})
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Erorr in protect Route ",error.message)
        res.status(500).json({error :"Internal Server Error "})
    }
}
export default protectRoute;