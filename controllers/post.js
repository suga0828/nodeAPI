const getPosts = (req, res) => {
  const data = {
    posts: [
      { title: 'First Post' },
      { title: 'Second Post' },
      { title: 'Third Post' }
    ]
  };
  res.json(data);
};

export default getPosts;
