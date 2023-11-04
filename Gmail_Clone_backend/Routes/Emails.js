import express from "express";
import { Compose, Inbox, DeleteMsg, SaveDraft,
    GetDraft, TrashBin, MarkStarredMsg,
    GetImportantMsg, GetStarredMsg,
    MarkImportantMsg, OutboxMsg } from "../Controller/emailCotrollers.js";
import handler from "../Middleware/fileupload.js";


const router = express.Router();

//Compose and send a message
router.post("/compose", Compose);

//Check inbox
router.get("/inbox/:id",Inbox);

//Get Outbox message
router.get("/outbox", OutboxMsg);

//Mark as a Starred msg
router.patch("/starred/:msgId", MarkStarredMsg);

//Read a Starred msg
router.get("/starred", GetStarredMsg);

//Mark as a Important Messages
router.patch("/imp/:msgId",MarkImportantMsg)

//Read a Important Messages
router.get("/imp",GetImportantMsg);

//Delete Message
router.delete("/delete/:msgId",DeleteMsg);

//Save as a Draft message
router.post("/CreateDraft",SaveDraft);

//Get a Draft message
router.get("/GetDraft",GetDraft);

//Get a Trash message
router.get("/trash",TrashBin);

//UPLOAD
router.post("/upload",handler);

export const emailRouter = router;