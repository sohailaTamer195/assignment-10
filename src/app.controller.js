import express from "express";
import { globalHandlingError,ErrorResponse,BadRequestException,NotFoundException } from "./common/response/error.response.js";
import { env } from "../config/env.service.js";
import { SuccessResponse } from "./common/response/success.response.js";
export const bootstrap = () => {
const app = express();
app.use(express.json());
app.get('/check-health', (req, res) => {
res.json({message: "Server is healthy"});
})

app.get('/test', (req, res) => {
    SuccessResponse({
        res,
        message :"done from sucess response",
        status: 201,
        data: {name: "sohaila", age: 22}

    });
   
    res.json({message: "Test api", data});
})

app.use('{*dummy}', (req, res) => {
res.json({message: "Route not found"});
})
app.use(globalHandlingError);

app.listen(env.port, () => {
    console.log("Server is running ");
});

}