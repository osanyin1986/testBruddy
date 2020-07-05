
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const _ = require("lodash");
const md5=require("md5");

const homeStartingContent ="";
const aboutContent="";
const cartContent="";
const registerContent="";
const loginContent="";
const forgotContent="";



const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb://localhost:27017/BRubbyDB",{ useNewUrlParser: true , useUnifiedTopology: true,useCreateIndex: true })
//
// const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";



const cartSchema={
  title:String,
  content:String
}



const Cart = mongoose.model("Cart", cartSchema);



//
// app.get ("/" ,function (req, res) {
//   Cart.find({}, function(err, carts){
//     res.render("home", {
//       startingContent: homeStartingContent,
//       carts: carts
//       });
//
//   });
// });

app.get("/" ,function (req, res) {
  res.render("home" , {startingContent: homeStartingContent});
});

app.get("/about" ,function (req, res) {
  res.render("about" , {welcome: aboutContent});
});


app.get("/login" ,function (req, res) {
  res.render("login" , {loginContent: loginContent});
});

app.get("/register" ,function (req, res) {
  res.render("register" , {registerContent: registerContent});
});

app.get("/cart" ,function (req, res) {
  res.render("cart" , {cartContent: cartContent});
});


app.get("/forgot" , function (req, res) {
  res.render("forgot", {forgotContent: forgotContent});
});

//
// app.get("/carts/:cartId", function(req, res){
//
// const requestedCartId = req.params.cartId;
//
//   Cart.findOne({_id: requestedPostId}, function(err, cart){
//     res.render("cart", {
//       title: cart.title,
//       content: cart.content
//     });
//   });
//
// });


//
// app.get("/login",function(req,res) {
//   loginContent.find({}, function (err, foundItems) {
//     console.log(foundItems);
//   });
// });
//
//
// app.get("/register" ,function (req, res) {
//   registerContent.find({}, function (err, foundItems) {
//     console.log(foundItems);
//   });
// });
//
// app.get("/cart" ,function (req, res) {
//   cartContent.find({}, function (err, foundItems) {
//     console.log(foundItems);
//   });
// });
//
//
// app.post ("/register" , function (req ,res) {
//   const firstName= req.body.fName;
//   const lastName= req.body.lName;
//   const email = req.body.email;
//   const  password= req.body.gName;
//   const confirmpassword   = req.body.hName;
//   const data=  {
//     members: [
//       {
//         email_address:email,
//         merge_fields:{
//           FNAME: firstName,
//           LNAME: lastName,
//           PASSWORD: password,
//         CONFIRMPASSWORD: confirmpassword,
//         }
//       }
//     ]
//   }
// });
//
//
//
//
















app.listen(3000, function() {
  console.log("Server started on port 3000");
});
