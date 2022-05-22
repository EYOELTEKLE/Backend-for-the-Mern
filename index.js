const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/users')
mongoose.connect("mongodb+srv://USER123:*******@cluster0.nws8e.mongodb.net/MERN?retryWrites=true&w=majority")
const cors = require('cors');
const { request } = require('express');
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.get("/getUsers",(req,res) =>
{
	UserModel.find({}, (err,result) => 
	{
		if (err)
		{
			res.json(err);
		}
		else
		{
			res.json(result);
		}
	})
})
app.post('/createUser',async (req,res) => 
{
	const user =  req.body;
	const newUser = new UserModel(user);
	await newUser.save();
	res.json(user)
})

app.put('/update', async (req,res) =>
{
	const Name = req.body.Name;
	const id = req.body.id;
	console.log({Name,id})
	try
	{
		
		await UserModel.findById(id, (e,update) => {
			
			update.Name = Name;
			update.save();
			res.send("sent ");
			})
	}
	catch(e)
	{
		console.log(e);
	}
})
app.delete('/delete/:id', async (req,res) => 
{
	const id = req.params.id;
	await UserModel.findByIdAndDelete(id).exec();
	res.send("deleted");
	
})

app.listen(process.env.PORT || 3001, () => 
{
console.log("Server is Running");
})

