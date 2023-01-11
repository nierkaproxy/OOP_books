class User {
constructor (name, surname, cardnumber, adress, phone, book) {
    this.name = name;
    this.surname = surname;
    this.cardnumber = cardnumber;
    this.adress = adress;
    this.phone = phone;
    this.books = [];
    }
    paimtos_knygos(book) {
    let target = document.getElementById(this.name);
    let element = document.createElement("p");
    element.innerText = book;
    // target.appendChild(element).className = "bordered listitem";
    this.books.push(book);
    }
    check() {
    console.log(this.name + " turi pasiemes sias knygas: ");
    for (let i = 0; i < this.books.length; i++) {
    console.log(this.books[i]);
    }
}}

const vardas = document.getElementById("nameInput");
const pavarde = document.getElementById("lastNameInput");
const cardNr = document.getElementById("cardNr");
const adress = document.getElementById("adress");
const telNr = document.getElementById("telNr");
const book = document.getElementById("book");

const button = document.querySelector('button');





const submit = (e) => {
    e.preventDefault();
    const newPerson = new User(vardas.value, pavarde.value, cardNr.value,
        adress.value, telNr.value, book.value);
    newPerson.paimtos_knygos(book.value);
    newPerson.check();
    console.log(newPerson);
}

button.addEventListener('click', submit);