const express = require('express');
const router = express.Router();
const posities = require('./../data/opstelling.js')


//routes
router.get('/', (req, res)=>{
	const name =req.cookies.username;
	if(name){
	res.render('index',{name});
	}else{
		rres.redirect('/hello')
		next
	}
});


router.get('/hello',(req, res)=>{
	const name = req.cookies.username;
	if(name){
		return res.redirect('/');
	}else{
	res.render('hello', {name: req.cookies.username});
	}
});



// router.get('/opstelling',(req, res)=>{
// res.render('opstelling',{posities})
//  });

router.post('/hello',(req,res)=>{
	res.cookie('username', req.body.username);
	return res.redirect('/');
});

// router.post('/terug', (req, res)=>{
// 	return res.redirect('/')
// });

router.post('/goodbye',(req, res)=>{
	const name = req.cookies.username;
	res.clearCookie('username');
	return res.redirect('/hello');
});


// router.get('/cards', (req, res)=>{
	
// 	res.render('card', { prompt: 'Hoeveel spelers heeft een hockeyteam ?', hint: "Er zijn drie spitsen, drie middenvelders, twee vleugelverdedigers, een voorstopper, een laatste man en een keeper"});
// });

// router.get('/opstelling', (req,res)=>{
// 	res.render('opstelling', {prompt: 'Namen voor de posities van de spelers in het veld:', posities})
// });

module.exports = router;
