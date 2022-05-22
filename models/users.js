const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
{
	Name:
	{
		type:String,
		required:true,
	},

	"Date of birth":
	{
		type: Date,
		required:true,
	},
	Gender:
	{
		type:String,
		required:true,
	},
	Salary:
	{
		type: Number,
		requied:true,
	}
})

const UserModel = mongoose.model("users",userSchema);

module.exports = UserModel;
