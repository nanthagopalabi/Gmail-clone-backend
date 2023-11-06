import express from "express";
import { User } from "../models/Users.js";
import {Email} from "../models/Email.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import {sendMail} from "../service/service.js";
import { Register } from "../Controller/userControllers.js";
import { Login } from "../Controller/userControllers.js";
import { Forget } from "../Controller/userControllers.js";
import { ResetToken } from "../Controller/userControllers.js";

const router = express.Router();

//User Registration
router.post ("/register",Register);

//User Login
router.post("/login",Login);

//Forget Password
router.post("/forget",Forget);

//Password Reset
router.post("/reset",ResetToken);

export const userRouter = router