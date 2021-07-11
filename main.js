//initialize arrays of terms to use for messages
let subjects = [];
let verbs = [];
let adjectives = [];
let predicates = [];
let punctuation = [];

//populate arrays with terms we want to use in our messages
subjects.push('Carl','Lenny','Homer','Bart','Lisa','Marge','Maggie',
              'Ned','Maude','Barney','Moe','Seymore','Edna','Mr. Burns','Ralph');
verbs.push('farted','ate','ran','walked','became','loved','wrote','hated','joked','pranked','humiliated');
adjectives.push('scary','happy','ludicrous','hilarious','bombastic','delusional'); //These are not yet implemented, feel free to implement them
predicates.push('flowers','scared','happy','Lisa','Ralph','pizza','letters','Kool-Aid','Mr. T','World of Warcraft');
punctuation.push('.','!','?');

//This crafts a set of subjects randomly, it will choose a different number of subjects each time it is called
let buildSubjects = (subjArray) => {
  if(!Array.isArray(subjArray) || subjArray.length < 4) {
    return 'Please pass an array of strings with at least 4 elements to this function';
  }
  let randSubjLength = Math.floor(Math.random()*4)+1;
  let fullSubjectString;

  if(randSubjLength === 1) {
    fullSubjectString = subjArray[Math.floor(Math.random()*subjArray.length)];
  } else if (randSubjLength === 2) {
    let firstSubject = subjArray[Math.floor(Math.random()*subjArray.length)];
    let secondSubject = subjArray[Math.floor(Math.random()*subjArray.length)];
    fullSubjectString = firstSubject + ' and ' + secondSubject;
  } else if (randSubjLength >= 3) {
    let subjCommaArray = [];
    for(let i = 0; i < randSubjLength; i++) {
      let j = Math.floor(Math.random()*subjArray.length);
      subjCommaArray.push(subjArray[j]);
      subjArray.splice(j, 1);

    }
    let finalSubject = subjArray[Math.floor(Math.random()*subjArray.length)];
    fullSubjectString = subjCommaArray.join(', ') + ', and ' + finalSubject;
  }
  return fullSubjectString;
}

let craftRandomMessage = () => {
  let message = buildSubjects(subjects)
    + ' ' + verbs[Math.floor(Math.random()*verbs.length)]
    + ' ' + predicates[Math.floor(Math.random()*predicates.length)]
    + punctuation[Math.floor(Math.random()*punctuation.length)];
  
  return message;
}

for(let i = 0; i < 5; i++) {
  console.log(craftRandomMessage());
}