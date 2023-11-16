function Human(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Apartments() {
  this.residents = [];
}

Apartments.prototype.addResidants = function (human) {
  if (human instanceof Human) {
    this.residents.push(human);
  } else {
    console.log("Ви не можете додати цю людину до наших апартаментів");
  }
};

function House(maxApartments) {
  this.apartments = [];
  this.maxApartments = maxApartments;
}

House.prototype.addApartments = function (apartment) {
  if (apartment instanceof Apartments) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log("Будинок вже повний, я не можу додати квартиру.");
    }
  } else {
    console.log("Я не можу додати цю квартиру до мого будинку.");
  }
};

const person1 = new Human("Serhii", "male");

const apartment1 = new Apartments();
apartment1.addResidants(person1);

const house = new House(1);
house.addApartments(apartment1);
house.addApartments(apartment1);

console.log(house);
