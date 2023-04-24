const talkRate = async (req, res, next) => {
  const { rate } = req.body.talk;

  if (rate > 5 || rate < 1 || !Number.isInteger(rate)) {
      return res.status(400).json({
       message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  }
   
    return next();
   }; 
   module.exports = talkRate;