module.exports = (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;

    if (!title || !content || !categoryIds) { 
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    return next();
  } catch (erro) {
    return res.status(500).json({
      message: 'Nem passou no middelware',
      erro: erro.message,
    });
  }
};