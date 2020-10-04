module.exports = (fn) => {
  return (req, res, next) => {
    console.log('CatchAsync!!!');
    fn(req, res, next).catch(next);
  };
};
