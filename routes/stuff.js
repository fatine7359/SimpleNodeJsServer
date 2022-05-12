//Contenir la logique routing
const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');

//Indiquer à l'application la fonction à executer quand elle reçoit une requete http.
router.get('/' ,stuffCtrl.getThing);

module.exports = router;