
const Coordinate = require("../models/Coordinate");
module.exports = {

  getData: async (req, res) => {
    try {
      const larea = await Coordinate.find({}).sort({ createdAt: "desc" }).lean();
      res.render("profile.ejs", { larea: larea });
    } catch (err) {
      console.log(err);
    }
  }, 

  coordinate: async (req, res) => {
      try {
          
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


};