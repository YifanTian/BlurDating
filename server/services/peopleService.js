
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
    desc: "I like travel",
    age: 18,
    img: "../../../img/nier.jpg",
    answers: {1:1,2:2},
    status: true,
    state: {
        video: { url: 'http://www.imdb.com/title/tt5013056/?ref_=vi_tr_mp_t_19', title: 'I just watched a great movie!' },
        article: { url: 'https://www.pinterest.com/categories/popular/', title: 'I like this article!' },
        description: `I'm feeling good`
    }
  },
  {
    id: 2,
    name: "bb",
    desc: "I like reading novel",
    age: 19,
    img: "../../../img/honoka.jpg",
    answers: {2:1,3:2},
    status: false,
    state: {
        video: { url: 'http://www.imdb.com/title/tt5013056/?ref_=vi_tr_mp_t_19', title: 'I just watched a great movie!' },
        article: { url: 'https://www.pinterest.com/categories/popular/', title: 'I like this article!' },
        description: `I'm feeling good`
    }
  },
  {
    id: 3,
    name: "cc",
    desc: "I like video game",
    age: 20,
    img: "../../../img/kasumi_2.jpeg",
    answers: {3:1,4:2},
    status: true,
    state: {
        video: { url: 'http://www.imdb.com/title/tt5013056/?ref_=vi_tr_mp_t_19', title: 'I just watched a great movie!' },
        article: { url: 'https://www.pinterest.com/categories/popular/', title: 'I like this article!' },
        description: `I'm feeling good`
    }
  },
  {
    id: 4,
    name: "dd",
    desc: "I like Working",
    age: 21,
    img: "../../../img/tina.jpg",
    answers: {4:1,5:2},
    status: false,
    state: {
        video: { url: 'http://www.imdb.com/title/tt5013056/?ref_=vi_tr_mp_t_19', title: 'I just watched a great movie!' },
        article: { url: 'https://www.pinterest.com/categories/popular/', title: 'I like this article!' },
        description: `I'm feeling good`
    }
  },
  {
    id: 5,
    name: "ee",
    desc: "I am Outgoing",
    age: 22,
    img: "../../../img/marie-rose-21.jpg",
    answers: {5:1,1:2},
    status: true,
    state: {
        video: { url: 'http://www.imdb.com/title/tt5013056/?ref_=vi_tr_mp_t_19', title: 'I just watched a great movie!' },
        article: { url: 'https://www.pinterest.com/categories/popular/', title: 'I like this article!' },
        description: `I'm feeling good`
    }
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