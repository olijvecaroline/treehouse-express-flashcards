const express = require('express');
const router = express.Router();

// //const data = require('../data/flashcardData.json').data;
// const{data}= require('../data/flashcardData.json')
// //const cards = data.cards;
// const {cards} = data

router.get('/', (req, res)=>{
	res.render('card', { prompt: 'Hoeveel spelers heeft een hockeyteam ?', hint: "Er zijn drie spitsen, drie middenvelders, twee vleugelverdedigers, een voorstopper, een laatste man en een keeper"});
});

// router.get('/', (req, res)=>{
// 	// const { side } = req.query;
// 	// // const side = req.query.side
// 	// const { id } = req.params;
// 	// const text = cards[id][side];
// 	// const { hint } = cards[id]
// 	// // const hint = cards[id].hint

// 	// const templateData = { text, hint };
// 	res.render('card', { 
// 		prompt: cards[req.params.id],
// 	 	hint: cards[req.params.id].hint
// 	 });
// });

// router.get('opstelling', (req,res)=>{
// 	res.render('opstelling', {prompt: 'Namen voor de posities van de spelers in het veld:', posities})
// });

module.exports = router;
