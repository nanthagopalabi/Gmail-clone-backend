import express from "express";
// import handler from "../Middleware/upload.js";
import { Compose } from "../Controller/emailCotrollers.js";
import { Inbox } from "../Controller/emailCotrollers.js";
import { StarredMsg } from "../Controller/emailCotrollers.js";
import { ImportantMsg } from "../Controller/emailCotrollers.js";
import { DeleteMsg } from "../Controller/emailCotrollers.js";
import { SaveDraft } from "../Controller/emailCotrollers.js";
import { GetDraft } from "../Controller/emailCotrollers.js";
import { TrashBin } from "../Controller/emailCotrollers.js";

const router = express.Router();

//Compose message
router.post("/compose", Compose);

//Check inbox
router.get("/inbox/:id",Inbox);

//Mark as a Starred msg
router.patch("/starred/:userId/:msgId", StarredMsg);

// Mark as a Important Messages
router.patch("/imp/:userId/:msgId",ImportantMsg)

//Delete Message
router.delete("/delete/:msgId",DeleteMsg )

//Save as a Draft message
router.post("/CreateDraft",SaveDraft )

//Get a Draft message
router.get("/GetDraft",GetDraft );

//Get a Trash message
router.get("/trash",TrashBin );

//UPLOAD
// router.post("/upload", handler);

export const emailRouter = router;