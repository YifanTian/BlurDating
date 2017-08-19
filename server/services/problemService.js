let PROBLEMS = [
{
    id: 1,
    name: "Are you romantic?",
    type: "relationship",
    typeid: 1,
    answer1: 'yes',
    answer2: 'no'
  },
  {
    id: 2,
    name: "Do you believe in love at first sight??",
    type: "relationship",
    typeid: 1,
    answer1: 'yes',
    answer2: 'no'
  },
  {
    id: 3,
    name: "Could you still trust a friend that's lied to you once??",
    type: "relationship",
    typeid: 1,
    answer1: 'yes',
    answer2: 'no'
  },
  {
    id: 4,
    name: "Would you stay friends with an ex after a breakup?",
    type: "relationship",
    typeid: 1,
    answer1: 'yes',
    answer2: 'no'
  },
  {
    id: 5,
    name: "Is it possible to live with parents after marriage?",
    type: "relationship",
    typeid: 1,
    answer1: 'yes',
    answer2: 'no'
  },
  {
    id: 6,
    name: "Do you mainly make decisions based on feelings??",
    type: "personality",
    typeid: 2,
    answer1: 'yes',
    answer2: 'no'
  },
  {
    id: 7,
    name: "Do you believe in fate?",
    type: "personality",
    typeid: 2,
    answer1: 'yes',
    answer2: 'no'
  },
  {
    id: 8,
    name: "Do you feel like you are in control of your life right now?",
    type: "personality",
    typeid: 2,
    answer1: 'yes',
    answer2: 'no'
  },
  {
    id: 9,
    name: "Are you a preparer or a procrastinator?",
    type: "personality",
    typeid: 2,
    answer1: 'yes',
    answer2: 'no'
  },
  {
    id: 10,
    name: "Are you highly influenced by what your friends do? (Peer pressure)",
    type: "personality",
    typeid: 2,
    answer1: 'yes',
    answer2: 'no'
  },
  {
    id: 11,
    name: "Which type of song is more likely to get you in a romantic mood?",
    type: "music",
    typeid: 3,
    answer1: 'Jazz',
    answer2: 'R&B'
  },
  {
    id: 12,
    name: "Which music genre would you rather listen to?",
    type: "music",
    typeid: 3,
    answer1: 'Jazz',
    answer2: 'Rock'
  },
  {
    id: 13,
    name: "Do you like country music?",
    type: "music",
    typeid: 3,
    answer1: 'Yes',
    answer2: 'No'
  },
  {
    id: 14,
    name: "The Beatles or Rolling Stones?",
    type: "music",
    typeid: 3,
    answer1: 'Yes',
    answer2: 'No'
  },
  {
    id: 15,
    name: "Which Taylor Swift song do you like better?",
    type: "music",
    typeid: 3,
    answer1: 'Yes',
    answer2: 'No'
  },
  {
    id: 16,
    name: "Do you enjoy going to live concerts?",
    type: "lifestyle",
    typeid: 4,
    answer1: 'Yes',
    answer2: 'No'
  },
  {
    id: 17,
    name: "I prefer the outdoors than staying at home during the weekend.",
    type: "lifestyle",
    typeid: 4,
    answer1: 'Yes',
    answer2: 'No'
  },
  {
    id: 18,
    name: "I must have 3 meals everyday.",
    type: "lifestyle",
    typeid: 4,
    answer1: 'Yes',
    answer2: 'No'
  },
  {
    id: 19,
    name: "I prefer the outdoors than staying at home during the weekend.",
    type: "lifestyle",
    typeid: 4,
    answer1: 'Yes',
    answer2: 'No'
  },
  {
    id: 20,
    name: "Are you 420 friendly?",
    type: "lifestyle",
    typeid: 4,
    answer1: 'Yes',
    answer2: 'No'
  },
  {
    id: 21,
    name: "Mac n' cheese or simple salad?",
    type: "food",
    typeid: 5,
    answer1: "Mac n' cheese",
    answer2: 'Salad'
  },
  {
    id: 22,
    name: "Ketchup or Mustard?",
    type: "food",
    typeid: 5,
    answer1: 'Ketchup',
    answer2: 'Mustard'
  },
  {
    id: 23,
    name: "Which yogurt flavor do you like more?",
    type: "food",
    typeid: 5,
    answer1: 'Tart',
    answer2: 'Chocolate'
  },
  {
    id: 24,
    name: "What brand of chocolate do you like better?",
    type: "food",
    typeid: 5,
    answer1: 'Tart',
    answer2: 'Chocolate'
  },
  {
    id: 25,
    name: "Which one is your go-to breakfast food?",
    type: "food",
    typeid: 5,
    answer1: 'Tart',
    answer2: 'Chocolate'
  },
];

const getProblems = function() {
    return new Promise((resolve,reject) => {
        resolve(PROBLEMS);
    });
}

module.exports = {
    getProblems: getProblems
}