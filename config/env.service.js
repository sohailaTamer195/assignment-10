import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve('./config/.env') });
const port= process.env.PORT 
const mood= process.env.MOOD
export const env={
    port,
    mood
}