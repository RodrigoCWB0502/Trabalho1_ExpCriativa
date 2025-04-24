export default (err, req, res, next) => {
    console.error(err.stack);
    
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      return res.status(400).json({ mensagem: 'JSON malformado' });
    }
  
    res.status(500).json({ 
      mensagem: 'Ocorreu um erro no servidor',
      erro: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  };