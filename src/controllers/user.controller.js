import User from "../models/User";

export async function getRecommendedUsers(req,res){
   try {
      const currentUserId = req.user.id;
      const currentUser = req.user;

      const recommendedUsers = await User
   } catch (error) {
      
   }
};

export async function getMyFriends(req,res){};

