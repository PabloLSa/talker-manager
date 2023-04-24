const ageValidation = async (req, res, next) => {
  // console.log(req.body);
  const { age } = req.body;
  const number = 18;
  if (!age) {
  return res.status(400).json({
    message: 'O campo "age" é obrigatório',
  });
 }
 if (!Number.isInteger(age) || age < number) {
   return res.status(400).json({
    message: 'O campo "age" deve ser um número inteiro igual ou maior que 18',
  }); 
  }
  next();
 };
  
 module.exports = ageValidation;
