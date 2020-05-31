function abc(props) {
  console.log(props);
}

const def = (props) => {
  console.log(props);
};

abc('Function 1');
def('Function 2');

class Osoba {
  constructor(ime, prezime) {
    this.ime = ime;
    this.prezime = prezime;
  }

  prikaziIme() {
    console.log(this.ime, this.prezime);
  }
}

const nemanja = new Osoba('Nemanja', 'Simeunovic');

nemanja.prikaziIme();

if (nemanja) {
  console.log('Nemanja');
} else {
  console.log('Neko');
}
