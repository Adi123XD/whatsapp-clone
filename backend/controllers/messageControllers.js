import Conversation from "../models/conversationModel.js"
import Message from '../models/messageModel.js'
export const sendMessage= async (req,res)=>{
    try {
        const { id: recieverId } = req.params;
        const { message } = req.body;
        const senderId = req.user._id;

        // Find or create conversation between sender and receiver
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recieverId],
            });
        }

        // Create new message
        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        });

        // Add message to conversation
        if (newMessage)
        {
            conversation.messages.push(newMessage._id);
        }
        // Socket io funcitonality will go here

        // Save changes to conversation and new message
        // this will run in parallel 
        await Promise.all([conversation.save() , newMessage.save()]);

        return res.status(201).json({ success: true, newMessage });

}
catch(error){
    console.log("Error while sending the message ",error.message);
    res.status(500).json({error : "Internal Server Error "})
}
}

export const getMessages = async (req,res)=>{
   try {
        const {id :UserToChatId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
        participants :{$all : [senderId , UserToChatId]}
    }).populate("messages")
    if (!conversation) {
        return res.status(200).json([]);
    }
    const messages = conversation.messages
    res.status(200).json({success:true , messages})
   } catch (error) {
    console.log("Error in getMessages controller ",error.message);
    return res.status(500).json({error :"Internal Server Error "})
    
   }
}