import mongoose , {Schema} from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    name: String,
    email: String,
    password: {
        type: String,
        minLength: [8, "Password must have at least 8 characters"],
        maxLength: [32, "Password cannot have more than 32 characters"]
    },
    phone: String,
    accountVerified: {
        type: Boolean, default: false 
    },
    verificationCode: Number,
    verificationCodeExpire: Date,
    resetPasswordToken: String,
    resetPasswordExpire: Date,

}, {timestamps:true})


userSchema.pre("save" , async function (next) {
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function (enteredPassword) {
    bcrypt.compare(enteredPassword , this.password)
}

export const User =mongoose.model("User" , userSchema)