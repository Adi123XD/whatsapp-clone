import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs'
import generateTokenandsetCookie from "../utils/generateToken.js";
export const signup =async (req,res)=>{
    try {
        const {fullName , userName , password , confirmpassword , gender } = req.body;
        if (password !==confirmpassword){
            return res.status(400).json({error:"the passwords do not match"})
        }
        const user = await User.findOne({userName});
        if (user){
            return res.status(400).json({error:"Username already exists"})
        }
        // hash the passwords
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password , salt)
        // https://avatar-placeholder.iran.liara.run/
        const boyprofilepic =`https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlprofilepic =`https://avatar.iran.liara.run/public/girl?username=${userName}`;
        const newuser = new User({
            fullName,
            userName,
            password:hashedPassword,
            gender,
            profilePic: gender==='Male'?boyprofilepic:girlprofilepic
        })
        if (newuser)
        {
            generateTokenandsetCookie(newuser._id ,res)
            await newuser.save();
            return res.status(201).json({
                message:"User created ",
                _id:newuser._id,
                fullName:newuser.fullName,
                userName:newuser.userName,
                profilePic:newuser.profilePic
            })
        }
        else{
            return res.status(400).json({error:"Invalid user data"})
        }
    } catch (error) {
        console.log("Error in signup controller ", error.message)
        return res.status(500).json({error:"Internal Server Error "})
    }
}
export const login =async (req,res)=>{
    try {
        const {userName , password} = req.body;
        const user = await User.findOne({userName})
        if (!user)
        {
            return res.status(400).json({error :"User doesnot exist"})
        }
        const isPasswordCorrect = await bcryptjs.compare(password , user.password)
        if (!isPasswordCorrect)
        {
            return res.status(400).json({error :"Invalid Credentials"})
        }
        generateTokenandsetCookie(user._id,res)
        return res.status(201).json({
            message:"User logged in ",
            _id:user._id,
            fullName:user.fullName,
            userName:user.userName,
            profilePic:user.profilePic
        })
        
    } catch (error) {
        console.log("Error in login controller ", error.message)
        return res.status(500).json({error:"Internal Server Error "})
    }

}
export const logout =(req,res)=>{
    try {
        res.cookie("jwt","",{
            maxAge:0
        })
        res.status(200).json({message:"User logged out successfully"})
        
    } catch (error) {
        console.log("Error in logout controller ", error.message)
        return res.status(500).json({error:"Internal Server Error "})
    }
    
}

export const getAllUsers = async(req, res)=>{
    try {
        const users = await User.find({}).select("-password")
        return res.status(200).json({
            success:true,
            users,
        });
    } catch (error) {
        console.log("Error in getting all users ",error.message);
        return res.status(500).json({error:"Internal Server Error "})
    }
}