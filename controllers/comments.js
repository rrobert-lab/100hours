
const Comment = require("../models/Comment");
module.exports = {
  
  createComment: async (req, res) => {
    try {
      
      // Upload image to cloudinary
        await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
      });
    
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
      res.render("post.ejs", { comment: comment, likes: like, post:post,createdAt:createdAt });
    } catch (err) {
      console.log(err);
    }
  },
  likeComment: async (req, res) => {
    try {
     console.log(req.params.cid)
      await Comment.findOneAndUpdate(
        { _id: req.params.cid },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
   
    try {
      await Comment.deleteOne({_id: req.params.cid });
     
      
      console.log("Deleted Post");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      res.redirect(`/post/${req.params.id}`);
    }
  },
};
