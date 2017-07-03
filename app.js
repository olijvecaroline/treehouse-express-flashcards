const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

//express view setting(default in views)

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');


//Import routes from routes/index.js
const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');
app.use(mainRoutes);
app.use('/cards', cardRoutes)




//handling 404's
app.use((req, res, next)=>{
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
})

//error handler
app.use((err, req, res, next)=>{
	res.locals.error = err;
	res.status(err.status);
	res.render('error', err);
	next(err);
})

app.listen(3000,()=>{
	console.log('this app is running at port 3000')
});

