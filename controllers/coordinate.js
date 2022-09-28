const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Coordinate = require("../models/Coordinate");

module.exports = {
  coordinate: async (req, res) => {
    try {
      console.log(req)
    await Coordinate.findOneAndUpdate(
    
      {user: req.user.id},
      {
      lon: req.params.lon,
      lad: req.params.lad,
      user: req.user.id,
      userName: req.user.userName,
      createdAt:new Date(),
      

    },{
    upsert:true});
  
    res.redirect("/profile");
  } catch (err) {
    console.log(err);
  }},
  getData: async (req, res) => {
    try {
      const getdata = await Collection.find().sort({ createdAt: "desc" }).lean();
      res.render("profile.ejs", { lon:lon, lad:lad, user:user, userName:userName,createdAt});
    } catch (err) {
      console.log(err);
    }
  }  



};