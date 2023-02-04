var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require("dotenv").config();

var indexRouter = require('./routes/index');
var ConcursoRouter = require('./routes/Concurso');
var NuestraHistoriaRouter = require('./routes/NuestraHistoria');
var NovedadesRouter = require('./routes/Novedades');
var NovelaRouter = require('./routes/Novela');
var EnsayoRouter = require('./routes/Ensayo');
var NaturalezaRouter = require('./routes/Naturaleza');
var PsicologiaRouter = require('./routes/Psicologia');
var InfantilesRouter = require('./routes/Infantiles');
var FilosofiaRouter = require('./routes/Filosofia');
var PoesiaRouter = require('./routes/Poesia');
var AutoayudaRouter = require('./routes/Autoayuda');
var SolicitaAsesoriaRouter = require('./routes/SolicitaAsesoria');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/Concurso", ConcursoRouter)
app.use("/NuestraHistoria", NuestraHistoriaRouter)
app.use('/Novedades', NovedadesRouter)
app.use("/Novela", NovelaRouter)
app.use("/Ensayo", EnsayoRouter)
app.use("/Naturaleza", NaturalezaRouter)
app.use("/Psicologia", PsicologiaRouter)
app.use("/Infantiles", InfantilesRouter)
app.use("/Filosofia", FilosofiaRouter)
app.use("/Poesia", PoesiaRouter)
app.use("/Autoayuda", AutoayudaRouter)
app.use("/SolicitaAsesoria", SolicitaAsesoriaRouter)
 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
