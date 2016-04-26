/**
 * AppointmentController
 *
 * @description :: Server-side logic for managing appointments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var MailerService = require('sails-service-mailer');

module.exports = {
  sendEmail: function(req, res) {
    sails.log('nalov:' , req.body.title)
    var mailer = MailerService('smtp', {
      from: 'no-reply@ghaiklor.com',
      provider: {
        port: 465, // The port to connect to
        host: 'smtp.gmail.com', // The hostname to connect to
        secure: true, // Defines if the connection should use SSL
        auth: { // Defines authentication data
          user: 'pupovacalex@gmail.com', // Username
          pass: 'ilijana24', // Password
        }
      }
    });
    mailer
      .send({
        to: 'igorstajic273@gmail.com',
        text: 'And of course, Hello World!'
      })
      .then(res.ok)
      .catch(res.negotiate);
  }
}
