// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const User = require("../model/user");
// const router = express.Router();
// const { upload } = require("../multer.js");
// const ErrorHandler = require("../utils/ErrorHandler");
// const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const bcrypt = require("bcryptjs");
// require("dotenv").config();


// router.post("/", upload.single("file"), catchAsyncErrors(async (req, res, next) => {
//     console.log("Creating user...");
//     const { name, email, password } = req.body;


//     const userEmail = await User.findOne({ email });
//     if (userEmail) {
//         if (req.file) {
//             const filepath = path.join(__dirname, "uploads", req.file.filename);
//             try {
//                 fs.unlinkSync(filepath);
//             } catch (err) {
//                 console.log("Error removing file:", err);
//                 return res.status(500).json({ message: "Error removing file" });
//             }
//         }
//         return next(new ErrorHandler("User already exists", 400));  // This now works correctly
//     }


//     let fileUrl = "";
//     if (req.file) {
//         fileUrl = path.join("./uploads", req.file.filename);
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     console.log("At Create ", "Password: ", password, "Hash: ", hashedPassword);
//     const user = await User.create({
//         name,
//         email,
//         password: hashedPassword,
//         avatar: {
//             public_id: req.file?.filename || "",
//             url: fileUrl,
//         },
//     });
//     console.log(user);
//     res.status(201).json({ success: true, user });
// }));
// module.exports = router;









const express = require("express");
const path = require("path");
const fs = require("fs");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const jwt=require('jsonwebtoken');
JWT_SECRET="your_strong_secret_key"


router.post("/create-user", upload.single("file"), catchAsyncErrors(async (req, res, next) => {
    console.log("Creating user...");
    const { name, email, password } = req.body;

    const userEmail = await User.findOne({ email });
    if (userEmail) {
        if (req.file) {
            const filepath = path.join(__dirname, "../uploads", req.file.filename);
            try {
                fs.unlinkSync(filepath);
            } catch (err) {
                console.log("Error removing file:", err);
                return res.status(500).json({ message: "Error removing file" });
            }
        }
        return next(new ErrorHandler("User already exists", 400));
    }

    let fileUrl = "";
    if (req.file) {
        fileUrl = path.join("uploads", req.file.filename);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("At Create ", "Password: ", password, "Hash: ", hashedPassword);
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        avatar: {
            public_id: req.file?.filename || "",
            url: fileUrl,
        },
    });
    console.log(user)
    res.status(201).json({ success: true, user });
}));


router.post("/login", catchAsyncErrors(async (req, res, next) => {




    console.log("Logging in user...");
     const { email, password } = req.body;
     if (!email || !password) {
         return next(new ErrorHandler("Please provide email and password", 400));
     }
     const user = await User.findOne({ email }).select("+password");
     if (!user) {
         return next(new ErrorHandler("Invalid Email or Password", 401));
     }
     const isPasswordMatched = await bcrypt.compare(password, user.password, function(err, result) {
         // result == true
         if(err){
             console.log("error in password",err)
             return next(new ErrorHandler("Invalid Email or Password", 401));
         }
         const token = jwt.sign(
             { id: user._id, email: user.email },
             process.env.JWT_SECRET || "your_jwt_secret",
             { expiresIn: "1h" }
         );
   
         // Set token in an HttpOnly cookie
         res.cookie("token", token, {
             httpOnly: true,
             secure: process.env.NODE_ENV === "production", // use true in production
             sameSite: "Strict",
             maxAge: 3600000, // 1 hour
         });
         user.password = undefined; // Remove password from response
         res.status(200).json({
             success: true,
             user,
         });
 
     });  
   
 }));

router.get("/profile", catchAsyncErrors(async (req, res, next) => {
    const { email } = req.query;
    if (!email) {
        return next(new ErrorHandler("Please provide an email", 400));
    }
    const user = await User.findOne({ email });
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }
    res.status(200).json({
        success: true,
        user: {
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            avatarUrl: user.avatar.url
        },
        addresses: user.addresses,
    });
  }));
  
  

router.post("/add-address", catchAsyncErrors(async (req, res, next) => {
    const { country, city, address1, address2, zipCode, addressType, email } = req.body;
  
  
    const user = await User.findOne({ email });
  
  
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }
  
  
    const newAddress = {
        country,
        city,
        address1,
        address2,
        zipCode,
        addressType,
    };
  
  
    user.addresses.push(newAddress);
    await user.save();
  
  
    res.status(201).json({
        success: true,
        addresses: user.addresses,
    });
  }));
  
  router.get("/addresses", catchAsyncErrors(async (req, res, next) => {
    const { email } = req.query;
    if (!email) {
        return next(new ErrorHandler("Please provide an email", 400));
    }
    const user = await User.findOne({ email });
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }
    res.status(200).json({
        success: true,
        addresses: user. addresses,
    });
  }
  ));
  
  
  
  

module.exports = router;
