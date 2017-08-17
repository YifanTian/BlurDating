
// const ProblemModel = require('../models/problemModel');

// var getProblems = function() {
//     return new Promise((resolve, reject) => {
//         ProblemModel.find({},function(err,problems){
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(problems);
//             }
//         })
//     });
// }

// var getProblem = function(idNumber) {
//     return new Promise((resolve, reject) => {
//             // resolve(problems.find(problem => problem.id === id ));
//             ProblemModel.findOne({id: idNumber}, function(err, problem) {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(problem);
//             }
//         });
// });
// }

// const addProblem = function(newProblem) {
//     return new Promise((resolve,reject) => {
//         ProblemModel.findOne({name: newProblem.name}, function(error,data) {
//            if(data) {
//                reject('Problem already exists!');
//            } else {
//                ProblemModel.count({}, function(err,num) {
//                    newProblem.id = num + 1;
//                    var mongoProblem = new ProblemModel(newProblem);
//                    mongoProblem.save();
//                    resolve(mongoProblem);
//                })
//            }
//         })
//     })
// }

// module.exports = {
//     getProblems: getProblems,
//     getProblem: getProblem,
//     addProblem: addProblem
// }


let PEOPLES = [
{
    id: 1,
    name: "aa",
    desc: ["travel"],
    age: 18,
    img: "../../../img/nier.jpg",
    answers: {1:1,2:2}
  },
  {
    id: 2,
    name: "bb",
    desc: ["novel"],
    age: 19,
    img: "../../../img/honoka.jpg",
    answers: {2:1,3:2}
  },
  {
    id: 3,
    name: "cc",
    desc: ["Video_Game"],
    age: 20,
    img: "../../../img/kasumi_2.jpeg",
    answers: {3:1,4:2}
  },
  {
    id: 4,
    name: "dd",
    desc: ["Working"],
    age: 21,
    img: "../../../img/tina.jpg",
    answers: {4:1,5:2}
  },
  {
    id: 5,
    name: "ee",
    desc: ["Outgoing"],
    age: 22,
    img: "../../../img/marie-rose-21.jpg",
    answers: {5:1,1:2}
  }
];

const getPeoples = function() {
    return new Promise((resolve, reject) => {
        resolve(PEOPLES);
    });
}

const getPeople = function(id) {
    return new Promise((resolve, reject) => {
        // people = PEOPLES.find( (problem) => (problem.id === id) )
        resolve(PEOPLES.find( (people) => (people.id === id) ));
    });
}

// const getPeoples = function() {
//     return new Promise((resolve, reject) => {
//         resolve(PEOPLES);
//     });
// }

module.exports = {
    getPeoples: getPeoples,
    getPeople: getPeople
}