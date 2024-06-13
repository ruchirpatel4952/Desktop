var express = require('express');
var connection = require('../db');
var router = express.Router();
const bcrypt = require('bcrypt');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/createuser', async function (req, res, next) {
  const { fname, lname, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO users (first_name, last_name, role, password, email, is_logged) VALUES (?, ?, ?, ?, ?, False)';
  connection.query(query, [fname, lname, role, hashedPassword, email], (err, results) => {
    if (err) {
      console.error('Error creating user:', err);
      return res.status(500).send(err);
    }
    console.log('User created successfully');
    console.log('GET /index');
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    res.status(200).send();
  });
});

router.post('/updatepassword', async function (req, res, next) {
  const {email, password} = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const query = "UPDATE users SET password = ? WHERE email = ?";
  connection.query(query, [hashedPassword, email], (err, results) => {
    if (err) {
      console.error('Error changing user password', err);
      return res.status(500).send(err);
    }
    console.log('password changed successfully');
    res.redirect('/');
    res.status(200).send();
  });
});

router.post('/verifyuser', async function (req, res, next) {
  const { email, password } = req.body;
  const query = 'SELECT * from users where email=?';
  connection.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Error creating user:', err);
      return res.status(500).send(err);
    }
    if (results.length > 0) {
      var ans = await bcrypt.compare(password, results[0].password);
      if (ans) {
        console.log(results);
        res.cookie('id', results[0].id);
        connection.query('UPDATE users SET is_logged=True WHERE id=' + results[0].id + ';');
        res.send(results);
      }
      else {
        res.status(401).send(false);
      }
    }
    else {
      res.status(401).send(false);
    }
  });
});

router.get('/islogin', function (req, res, next) {
  const query = 'SELECT is_logged from users where id=?';
  connection.query(query, [req.cookies.id], async (err, results) => {
    if (err) res.status(500).send();
    else {
      if (results.length > 0) {
        console.log(results[0].is_logged);
        if (results[0].is_logged === 0) {
          res.status(401).send();
        }
        else {
          res.status(200).send();
        }
      }
    }
  });
});

router.get('/logout', async function (req, res, next) {
  connection.query('UPDATE users SET is_logged=False WHERE id=' + req.cookies.id + ';');
  res.clearCookie('id');
  res.status(200).send();
});

router.get('/signup', function (req, res, next) {
  onsole.log('GET /signup');
  res.render('signup', { title: 'Express' });
});

router.post('/userdata', async function (req, res, next) {
  const { id } = req.body;
  const query = 'SELECT * from users where id=?';
  connection.query(query, [id], async (err, results) => {
    if (err) {
      console.error('Error getting data:', err);
      return res.status(500).send(err);
    }
    else {
      return res.status(200).send(results);
    }
  });
});

router.post('/createevent', async function (req, res, next) {
  const { event_title, event_description } = req.body;
  const query = 'INSERT INTO events (event_title, event_description) VALUES(?, ?)';
  connection.query(query, [event_title, event_description], async (err, results) => {
    if (err) {
      console.error('Error getting data:', err);
      res.status(500).send(err);
    }
    else {
      console.log('Event created successfully');
      res.status(200).send();
    }
  });
});

router.post('/createopportunity', async function (req, res, next) {
  const { opportunity_title, opportunity_description } = req.body;
  const query = 'INSERT INTO opportunities (opportunity_title, opportunity_description) VALUES(?, ?)';
  connection.query(query, [opportunity_title, opportunity_description], async (err, results) => {
    if (err) {
      console.error('Error getting data:', err);
      res.status(500).send(err);
    }
    else {
      console.log('Opportunity created successfully');
      res.status(200).send();
    }
  });
});

router.get('/eventdata', async function (req, res, next) {
  const query = 'SELECT * from events';
  connection.query(query, async (err, results) => {
    if (err) {
      console.error('Error getting data:', err);
      return res.status(500).send(err);
    }
    else {
      return res.send(results);
    }
  });
});

router.get('/opportunitydata', async function (req, res, next) {
  const query = 'SELECT * from opportunities';
  connection.query(query, async (err, results) => {
    if (err) {
      console.error('Error getting data:', err);
      return res.status(500).send(err);
    }
    else {
      return res.send(results);
    }
  });
});

module.exports = router;
