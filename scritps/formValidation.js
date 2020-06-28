const form = document.querySelector('form');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputSubject = document.querySelector('#subject');
const textArea = document.querySelector('textarea');
console.log(form);
function validateNameField() {
  const regex = /\d+|\W+/g;

  if (regex.test(inputName.value)) {
    inputName.setCustomValidity('Ime moze sadrzati samo slova i donju crtu');
    inputName.classList.add('input--invalid');
  } else if (inputName.validity.tooShort) {
    inputName.setCustomValidity('Ime mora sadrzati minimum cetiri slova');
    inputName.classList.add('input--invalid');
  } else if (!inputName.validity.valid) {
    inputName.setCustomValidity('Morate uneti Vase ime');
    inputName.classList.add('input--invalid');
  } else {
    inputName.setCustomValidity('');
    inputName.classList.remove('input--invalid');
  }
}

function validateEmailFiled() {
  if (inputEmail.validity.typeMismatch) {
    inputEmail.setCustomValidity(
      'Morate uneti email adresu u formi xxx@abc.xy'
    );
    inputEmail.classList.add('input--invalid');
  } else if (!inputEmail.validity.valid) {
    inputEmail.setCustomValidity('Polje za email je obavezno');
    inputEmail.classList.add('input--invalid');
  } else {
    inputEmail.setCustomValidity('');
    inputEmail.classList.remove('input--invalid');
  }
}

function validateSubjectField(e) {
  if (e.target.validity.valueMissing) {
    if (e.target.classList.contains('textarea')) {
      e.target.setCustomValidity('Molimo vas unesite poruku');
    } else {
      e.target.setCustomValidity('Naslov poruke je obavezan');
    }
    e.target.classList.add('input--invalid');
  } else {
    e.target.setCustomValidity('');
    e.target.classList.remove('input--invalid');
  }
}

inputName.addEventListener('blur', validateNameField);
inputEmail.addEventListener('blur', validateEmailFiled);
inputSubject.addEventListener('blur', validateSubjectField);
textArea.addEventListener('blur', validateSubjectField);
