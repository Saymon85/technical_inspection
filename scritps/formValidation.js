function formValidation() {
  // Isolating from global namespace
  const inputName = document.querySelector('#name');
  const inputEmail = document.querySelector('#email');
  const inputSubject = document.querySelector('#subject');
  const textArea = document.querySelector('textarea');
  const sendButton = document.querySelector('.btn-submit');

  function validateNameField() {
    const regex = /\d+|\W+/g;

    if (regex.test(inputName.value)) {
      inputName.setCustomValidity('Ime moze sadrzati samo slova i donju crtu');
      inputName.classList.add('input--invalid');
    } else if (inputName.validity.tooShort) {
      inputName.setCustomValidity('Ime mora sadrzati minimum cetiri slova');
      inputName.classList.add('input--invalid');
    } else if (inputName.validity.valueMissing) {
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
    if (inputSubject.validity.valueMissing) {
      inputSubject.setCustomValidity('Naslov poruke je obavezan');
      inputSubject.classList.add('input--invalid');
    } else {
      inputSubject.setCustomValidity('');
      inputSubject.classList.remove('input--invalid');
    }
  }

  function validateTextareaField(e) {
    if (textArea.validity.valueMissing) {
      textArea.setCustomValidity('Molimo vas unesite poruku');
      textArea.classList.add('input--invalid');
    } else {
      textArea.setCustomValidity('');
      textArea.classList.remove('input--invalid');
    }
  }

  sendButton.addEventListener('click', () => {
    validateNameField();
    validateEmailFiled();
    validateSubjectField();
    validateTextareaField();
  });

  inputName.addEventListener('blur', validateNameField);
  inputEmail.addEventListener('blur', validateEmailFiled);
  inputSubject.addEventListener('blur', validateSubjectField);
  textArea.addEventListener('blur', validateTextareaField);
}

formValidation();
