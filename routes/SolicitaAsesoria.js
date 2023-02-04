var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

router.get('/', function (req, res, next) {
  res.render("SolicitaAsesoria");
});

router.post("/", async(req, res, next) => {
  var Nombre = req.body.Nombre;
  var Apellido = req.body.Apellido;
  var Email = req.body.Email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
  to: "iiara.bujan@gmail.com",
  subject: "Solicito Asesoria",
  html: Nombre + " " + Apellido + " " + "se contacto a traves de la web y quiere mas informacion, contactar mediante este correo:" + Email + "Asimismo, hizo este comentario:" + mensaje + ". Su contacto es: " + tel
};

var transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});


var info = await transport.sendMail(obj);

res.render("SolicitaAsesoria", {
  message: "Mensaje enviado correctamente"
});

});





module.exports = router;