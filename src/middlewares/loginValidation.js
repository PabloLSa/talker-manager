const loginValidation = async (req, res, next) => {
// console.log(req.body);
const { email } = req.body;
const { password } = req.body;
  if ([email].includes(undefined)) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if ([password].includes(undefined)) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
     if (password.length < 6) {
      return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
     } 
     const emailRegex = /^[\w+.]+@\w+\.com$/;
     if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
     }
     
     return next();
};

module.exports = loginValidation;