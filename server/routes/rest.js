
var express = require('express');
var router = express.Router();
var peopleService = require('../services/peopleService');
var problemService = require('../services/problemService');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

// var PROBLEMS = require('../models/mock-problems');
// var PROBLEMS = require('../models/mock-peoples');

// get /api/v1/problems/
router.get('/problems', function (req,res) {
    problemService.getProblems()
        .then(problems => res.json(problems)); 
});

// get /api/v1/peoples/
router.get('/peoples', function (req,res) {
    peopleService.getPeoples()
        .then(peoples => res.json(peoples)); 
});

// get /api/v1/problems/2
router.get('/peoples/:id', function(req, res) {
    var id = req.params.id;
    peopleService.getPeople(+id)                          // + convert string to number
        .then(people => res.json(people));
});

// post /api/v1/problems
// router.post('/peoples', jsonParser, function(req,res) {
//     peopleService.addpeople(req.body)
//     .then(problem => {
//         res.json(problem);
//     },
//     error => {
//         res.status(400).send('already exists!');
//     });
// });

module.exports = router;