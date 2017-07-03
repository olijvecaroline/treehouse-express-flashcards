const express = require('express');
const router = express.Router();
const{ data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/', (req, res) => {
	
	const randomCard = Math.floor(Math.random() * cards.length);		
	return res.redirect (`cards/${randomCard}`)
	
});

router.get(`/:id`, (req, res) => {
	const { side = 'vraag' } = req.query;
	const { id } = req.params;
	const text = cards[id][side];
	const { hint } = cards[id];
		
	const name = req.cookies.username;
	const templateData = { id,text, name };
	if(side == 'vraag'){
		templateData.hint = hint;
		templateData.sideToShow = 'antwoord';
	}else if ( side == 'antwoord' ){
		templateData.sideToShow = 'vraag';
	}
	return res.render('card',  
	templateData);
		
});


module.exports = router;
