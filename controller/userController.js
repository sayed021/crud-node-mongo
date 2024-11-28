import User from "../model/userModel.js"


export const addUser = async (req, res) => {
    try {
        const userData = new User(req.body);
        const {email} = userData;
        const userExist = await User.findOne({email});
        if(userExist) {
            return res.status(400).json({message: "user already exist!"});
        }
        const saveUser = await userData.save();
        return res.status(200).json({saveUser});
    } catch (error) {
        res.status(500)
        .json({error: "internal server error!"});
    }
}

export const fetch = async (req, res) => {
    try {
        return res.json("first response")
    } catch (error) {
        res.status(500)
        .json({error: "internal server error!"});
    }
}

export const getUsers = async (req, res) => {
    // console.log("Get users function called")
    try {
        const users = await User.find();
        console.log(users);
        if(users.length == 0) {
            return res.status(404).json({message:"not found any user"});
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500)
        .json({error: "internal server error!"});
    }
}

export const updateUser = async (req, res) => {
    console.log("user updating");
    try {
        const id = req.params.id;
        const userisExist = await User.findOne({_id: id});
        if(!userisExist) {
            return res.status(404).json({message:"User not found"});
        }
        const update = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(201).json(update);
    } catch (error) {
        res.status(500)
        .json({error: "internal server error!"});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userisExist = await User.findOne({_id: id});
        if(!userisExist) {
            return res.status(404).json({message:"User not found"});
        }
        await User.findByIdAndDelete(id);
        res.status(201).json({message: "user delete sucessfull"});
    } catch (error) {
        res.status(500)
        .json({error: "internal server error!"});
    }
}