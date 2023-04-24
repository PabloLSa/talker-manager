const nameValidation = async (req, res, next) => {
  // console.log(req.body);
  const { name } = req.body;
  if (!name) {
  return res.status(400).json({
    message: 'O campo "name" é obrigatório',
  });
 }
 if (name.length < 3) {
   return res.status(400).json({
    message: 'O "name" deve ter pelo menos 3 caracteres',
  }); 
  }
  next();
 };
  
 module.exports = nameValidation;