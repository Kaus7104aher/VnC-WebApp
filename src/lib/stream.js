//here we can observe user to our database i.e stream dashboard


import {StreamChat} from "stream-chat"
import "dotenv/config.js"

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET

if(!apiKey || !apiSecret){
   console.error("Stream API key or Secret is missing");  
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async(userData) =>{
   try {
      //upsert means either create and if it doesnt exist just go ahead
      await streamClient.upsertUsers([userData]);
      return userData;
   } catch (error) {
      console.error("Error upserting stream user:",error);
   }
};

// tot: do it later
export const generateStreamToken = (userId) => {
  try {
    // ensure userId is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};