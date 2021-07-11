//initialize arrays of terms to use for messages
let subjects = [];
let verbs = [];
let predicates = [];
let punctuation = [];

//populate arrays with terms we want to use in our messages
subjects.push('You','I','He','She','They','We','Carl','Lenny','Homer','Bart','Lisa','Marge',
              'Ned','Maude','Barney','Moe','Seymore','Edna','Mr. Burns','Ralph');
verbs.push('farted','ate','ran','walked','became','were','loved','wrote','hated','joked','pranked','humiliated');
predicates.push('flowers','scared','happy','Lisa','Ralph','together');
punctuation.push('.','!','?');

let buildSubjects = (subjArray) => {
  let randSubjLength = Math.floor(Math.random()*2)+1;
  let fullSubjectString;
  if(randSubjLength === 1) {
    fullSubjectString = subjArray[Math.floor(Math.random()*subjArray.length)];
  } else if (randSubjLength === 2) {
    let firstSubject = subjArray[Math.floor(Math.random()*subjArray.length)];
    let secondSubject = subjArray[Math.floor(Math.random()*subjArray.length)];
    fullSubjectString = firstSubject + ' and ' + secondSubject;
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

for(i=0; i < 5; i++) {
  console.log(craftRandomMessage());
}