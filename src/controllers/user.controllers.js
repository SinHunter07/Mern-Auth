import { ErrorHandler } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { User } from "../models/user.model.js";

const register = asyncHandler(async (req ,res , next) => {

    try {
        const { name , email , phone , password ,verificationMethod } = req.body
        if( !name || !email || !phone || !password || !verificationMethod) {return next(new ErrorHandler("All fields are reuired " , 400))

        }

        function validatePhoneNumber(phone) {
            const phoneRegex = /^+913\d(9)$/
            
        }

    } catch (error) {
        
    }
    
})