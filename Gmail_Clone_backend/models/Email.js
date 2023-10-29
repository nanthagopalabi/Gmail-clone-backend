import mongoose from "mongoose";

const updatedDate = new Date().toLocaleDateString();
const updatedTime = new Date().toLocaleTimeString();
const date = updatedDate +" "+ updatedTime;

const EmailSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "User",
    },
    inbox:[{
        from: String,
        subject: String,
        date: String,
        content: String,
        starred: {type: Boolean, default: false},
        important: {type: Boolean, default: false},
        attachments: String,
    }],

    sentMsg: [{
        to: String,
        subject: String,
        date: String,
        content: String,
        starred: {type: Boolean, default: false},
        important: {type: Boolean, default: false},
        attachments: String,
    }],

    draftMsg: [{
        to: String,
        subject: String,
        date: String,
        content: String,
        starred: {type: Boolean, default: false},
        important: {type: Boolean, default: false},
        attachments: String,
    }],

    trashMsg: [{
        to: String,
        subject: String,
        date: String,
        content: String,
        starred: {type: Boolean, default: false},
        important: {type: Boolean, default: false},
        attachments: String,
}]
})

const Email = new mongoose.model("Email", EmailSchema);
export {Email}
export {date}

