const watched = async (req, res, next) => {
const { watchedAt } = req.body.talk;
const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
const isValidDate = watchedAt.match(regexDate);
 console.log(!isValidDate);
 if (!isValidDate) {
  return res.status(400).json({
    message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  });
 }
 
  return next();
 };
  
 module.exports = watched;
