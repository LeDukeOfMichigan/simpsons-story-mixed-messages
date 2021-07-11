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

  //This if-block manages the cases for when we select 1, 2, or more subjects
  if(randSubjLength === 1) {
    //return just the one subject
    fullSubjectString = subjArray[Math.floor(Math.random()*subjArray.length)];
  } else if (randSubjLength === 2) {
    //combine the subjects with an "and"
    let firstSubject = subjArray[Math.floor(Math.random()*subjArray.length)];
    let secondSubject = subjArray[Math.floor(Math.random()*subjArray.length)];
    fullSubjectString = firstSubject + ' and ' + secondSubject;
  } else if (randSubjLength >= 3) {
    //populate an array of subjects to combine
    let subjCommaArray = [];
    for(let i = 0; i < randSubjLength - 1; i++) {
      let j = Math.floor(Math.random()*subjArray.length);
      subjCommaArray.push(subjArray[j]);
      subjArray.splice(j, 1);

    }
    //randomly select a final element
    let finalSubject = subjArray[Math.floor(Math.random()*subjArray.length)];
    //set the final concatenated list with an Oxford comma
    fullSubjectString = subjCommaArray.join(', ') + ', and ' + finalSubject;
  }
  return fullSubjectString;
}

//This concatenates the subjects with a single verb, predicate, and closing punctuation.
let craftRandomMessage = () => {
  let message = buildSubjects(subjects)
    + ' ' + verbs[Math.floor(Math.random()*verbs.length)]
    + ' ' + predicates[Math.floor(Math.random()*predicates.length)]
    + punctuation[Math.floor(Math.random()*punctuation.length)];
  
  return message;
}

//Generate 5 random messages to the console each time the app runs
for(let i = 0; i < 5; i++) {
  console.log(craftRandomMessage());
}