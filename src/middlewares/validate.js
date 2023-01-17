module.exports = (req, res, next) => {
  const { name } = req.body;
console.log('ola');
  if (!name) {
    return res.status(400).json({ message: 'fields not passed' });
  }

  return next();
};

// const validatePerson = (req, res, next) => {
//   const newProduct = req.body;
//   const error = newProduct.every((item) => item.name.length > 4);
//   if (!error) res.status(422).json({ message: 'o campo name deve possuir 5 ou mais caracteres' });
//   next();
// };

// module.exports = {
//   validatePerson,
// };
