import Post from '../models/post.js';

export const getPosts = (req, res) => {
  const data = {
    posts: [
      { title: 'First Post' },
      { title: 'Second Post' },
      { title: 'Third Post' }
    ]
  };
  res.json(data);
};

export const createPost = (req, res) => {
  const post = new Post(req.body);
  post.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.status(200).json({
      post: result
    });
  });
};
