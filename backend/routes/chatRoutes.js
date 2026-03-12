const express = require('express');
const { generateEmailDraft } = require('../controllers/emailController');

const router = express.Router();

// POST /api/chat
router.post('/', generateEmailDraft);

module.exports = router;
