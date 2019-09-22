import Post from '../models/post.js';

export const getPosts = (req, res) => {
  Post.find()
    .select('_id title body')
    .then(posts => {
      res.json({ posts });
    })
    .catch(err => console.log(err));
};

export const createPost = (req, res) => {
  const post = new Post(req.body);
  post.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({
      post: result
    });
  });
};
