import { Email } from "../models/Email.js";
import { User } from "../models/Users.js";
import { date } from "../models/Email.js";

//Compose function
export const Compose = async (req, res)=>{
    try {
        const {from, to, subject, content} = req.body;
        const CheckUser = await User.findOne({email: to});
        const sender= await User.findOne({email:req.user.email});
        if(CheckUser&&sender){
            const userEmail = await new Email({user: CheckUser._id});
            const senderEmail = await new Email({user: sender._id});
            userEmail.inbox.push({...req.body,date: date });
            senderEmail.sentMsg.push({...req.body,date: date });
            userEmail.save();
            senderEmail.save();

            res.status(201).json({
                message: "Successfully Created"
            })
        } 
    } catch (error) {
        res.status(400).json({
            error: "Error Occured in Sending"
        })
    }
};

//Inbox function
export const Inbox = async (req, res)=>{
    try {
        const {id} = req.params;
        const checkUser = await Email.findOne({user: id}).populate('inbox');
        if(checkUser){
            res.status(200).json({
                message: checkUser.inbox
            })
        }
    } catch (error) {
        res.status(400).json({
            error: "Error Occured"
        })
    }
};

//Starred Message function
export const StarredMsg = async(req,res)=>{
    try {
     const {userId,msgId} = req.params;
     const userEmail = await Email.findOne({user: userId}).populate('inbox') ;
     
     if(userEmail){
     userEmail.inbox.find(msg=> msg._id == msgId).starred = !userEmail.inbox.find(msg=> msg._id == msgId).starred;
     userEmail.save();
       res.status(200).send("The message  is marked starred")
     } 
    } catch (error) { 
        console.log(error);
        res.status(404).send("Error occured while marking");
    }
};

//Important message function
export const ImportantMsg = async(req,res)=>{
    try {
     const {userId,msgId} = req.params;
     const userEmail = await Email.findOne({user: userId}).populate('inbox') ;

     if(userEmail){
     userEmail.inbox.find(msg=> msg._id == msgId).important = !userEmail.inbox.find(msg=> msg._id == msgId).important;
     userEmail.save();
       res.status(200).send("The message  is marked Important")
     } 
    } catch (error) {
        
        console.log(error);
        res.status(404).send("Error occured while marking");
    }
};

//Delete message function
export const DeleteMsg = async (req, res) => {
    try {
        const {msgId} = req.params;
        const checkMsg = await Email.findOne({$or: [
            { inbox: { $elemMatch: { _id: msgId } } },
            { sentMsg: { $elemMatch: { _id: msgId } } },
            { draftMsg: { $elemMatch: { _id: msgId } } }
        ]});
        
     //check message is in which array
    if(checkMsg.inbox.id(msgId) || checkMsg.sentMsg.id(msgId) || checkMsg.draftMsg.id(msgId)){
    const deletedMessages = checkMsg.inbox.id(msgId) || checkMsg.sentMsg.id(msgId) || checkMsg.draftMsg.id(msgId);
    checkMsg.trashMsg.push(deletedMessages);

    checkMsg.inbox.pull(msgId) || checkMsg.sentMsg.pull(msgId) || checkMsg.draftMsg.pull(msgId);
    // Remove the object from the array
    await checkMsg.save();
    
    res.status(200).json({
    message: "Message deleted Successfully"
    });        
     } else {
            res.status(404).json({ message: "Message not found" });
            }
     } catch (error) {
      res.status(400).json({
      error: "Internal Error Occured"
      })
    }
};

// Saving Draft message function
export const SaveDraft = async (req, res) => {
    try {
        const {to,subject, content} = req.body;
        if(to || subject || content){
        const checkReciver=await Email.findOneAndUpdate({user:req.user._id}
            ,{$push:{draftMsg:{...req.body, date:date}}},
            { upsert: true, new: true });
        res.status(200).json({
            message: "Draft Saved successfully"
        })
    }else{
        res.status(400).json({
            message: "No Input"
        })
    }
    } catch (error) {
        res.status(400).json({
            error: "Internal Error Occured"
        })
    }
}

//Getting Draft message function
export const GetDraft = async (req, res)=>{
    try {
        const checkUser = await Email.findOne({user: req.user._id}).populate('draftMsg');
        if(checkUser){
            res.status(200).json({
                message: checkUser.draftMsg
            })
        }
    } catch (error) {
        res.status(400).json({
            error: "Error Occured"
        })
    }
}

//Getting Trash message function
export const TrashBin = async (req, res) => {
    try {
        const checkUser = await Email.findOne({user: req.user._id});
        if(checkUser){
            res.status(200).json({
                message: checkUser.trashMsg
            })
        }
    } catch (error) {
        res.status(400).json({
            error: "Error Occured"
        })
    }
}