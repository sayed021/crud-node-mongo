import express from "express";
import { fetch, addUser, getUsers, updateUser, deleteUser } from "../controller/userController.js";

const route = express.Router();

route.post("/addUser", addUser);
route.get('/getUsers', getUsers);
route.put('/update/:id', updateUser);
route.delete('/deleteUser/:id', deleteUser); 
route.get('/fetch', fetch);

export default route;