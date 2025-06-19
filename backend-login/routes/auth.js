const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Registro de usuário
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'Usuário já existe' });
    
    user = new User({ name, email, password });
    await user.save();
    
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erro no servidor');
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Senha ou Email inválido' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Senha ou Email inválido' });

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, userId: user.id, name: user.name });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erro no servidor');
  }
});


// Obtém os dados do usuário autenticado
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erro no servidor');
  }
});

// Obtém o nome do usuário pelo ID (para RPG Maker MV)
router.get('/get-name/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.json({ name: user.name });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Erro ao buscar nome do jogador.' });
  }
});

module.exports = router;
