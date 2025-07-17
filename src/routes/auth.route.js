import express from "express"
import { login, signup ,onboard, logout } from "../controllers/auth.controller.js";
import {protectRoute} from "../middleware/auth.middleware.js"


const router = express.Router();

router.post("/signup", signup);
router.post("/login",login);
router.post("/logout",logout); 
// logout==post and not get :--- post not get because ..post is for operation that change server state and logging out does it . It destroys a sesson invalids a token . basically update in serverside i.e why we keep it post 

router.post("/onboarding",protectRoute,onboard) ;

//checks if user is logged in or not
router.get("/me", protectRoute,(req,res)=>{
   res.status(200).json({success: true, user: req.user});
});
 
router.post("/logout",logout);

export default router;

