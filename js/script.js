/*
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!

*/

console.log('JS OK');

//1

const student = {
    name: 'Charlie',
    surname: 'Brown',
    age: 5,
}
 console.table(student);

//2

const studentInfoElement = document.getElementById('student-info');
let message = 'Student information: <br>';

for (let key in student) {
    
   message += `${key}: ${student[key]}.<br>`;
}

studentInfoElement.innerHTML = message;


//3

 const studentsRecord  = 
 [
    {
        name: 'Charlie',
        surname: 'Brown',
        age: '5',
    },

    {
        name: 'Patricia',
        surname: 'Reichardt',
        age: '5',
    },

    {
        name: 'Linus',
        surname: 'Van Pelt',
        age: '4',
    },

    {
        name: 'Lucy',
        surname: 'Van Pelt',
        age: '6',
    },
 ];

 console.table(studentsRecord);

 //4

 const studentsRecordElement = document.getElementById('students-record')

 let studentsRecordMessage = 'Student information: <br>';

 for (let i = 0; i <studentsRecord.length; i++) { //ciclo relativo all' array
    
    for (let key in studentsRecord[i]) { //ciclo relativo all' oggetto
        if (key === 'name' || key === 'surname') {
            studentsRecordMessage += `${key}: ${studentsRecord[i][key]}.<br>`
        }
     }

 }

 studentsRecordElement.innerHTML = studentsRecordMessage;

 //5 Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
//ricevere le informazioni dall' utente
//inserire le informazioni in un nuovo oggetto
//inserire l' oggetto nell' array



const name = prompt('Inserire il nome dello studente','Sally' ).trim();
const surname = prompt('inserire il cognome dello studente','Brown').trim();
const age = prompt("Inserire l' età dello studente",'4').trim();

const newStudent = {
    name: name,
    surname: surname,
    age: age,
};

console.table(newStudent);

studentsRecord.push(newStudent);

console.table(studentsRecord);

//BONUS
 
const registrationButton = document.getElementById('registration-button');
const registrationBox = document.getElementById('registration-box');
const successElement = document.getElementById('success');

registrationButton.addEventListener('click', function() {
    
    registrationBox.style.display = 'none';

    const additionalStudent = {

    };

    for (let key in student) {
    
        additionalStudent[key] = document.getElementById(`student-${key}`).value;
    }

    console.table(additionalStudent);

    studentsRecord.push(additionalStudent);
    console.table(studentsRecord);

    successElement.innerText = 'Registrazione effettuata con successo';
});

