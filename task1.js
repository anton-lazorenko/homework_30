const vehicle = {
  start() {
    console.log('Старт!')
  },
  stop() {
    console.log('Стоп!')
  },
}

const car = {
  turnOnLight() {
    console.log('Свет включен!')
  },
  turnOffLight() {
    console.log('Свет выключен!')
  },
}

const airplane = {
  lowerTheLandingGear() {
    console.log('Выпустить шасси')
  },
  releaseTheFenders() {
    console.log('Выпустить подкрылки')
  },
}

const sedan = {}
const pickUp = {}
const scooter = {}
const chopper = {}

car.proto = vehicle;
airplane.proto = vehicle;
sedan.proto = car;
pickUp.proto = car;
scooter.proto = airplane;
chopper.proto = airplane;

Object.setPrototypeOf(car, vehicle);
Object.setPrototypeOf(airplane, vehicle);
Object.setPrototypeOf(sedan, car);
Object.setPrototypeOf(scooter, airplane);
Object.setPrototypeOf(chopper, airplane);


const vehicle = {
    start() {
      console.log('Вперед')
    },
    stop() {
      console.log('Стоп')
    },
  }
  function Car(brand, type, year) {
    this.brand = brand;
    this.type = type;
    this.year = year;
    this.turnOnLight = function() {
      console.log('Свет включен!')
    },
    this.turnOffLight = function() {
      console.log('Свет выключен!')Выпустить подкрылки
    }
  }
  function Airplane(brand, type, year) {
    this.brand = brand;
    this.type = type;
    this.year = year;
    this.lowerTheLandingGear = function() {
      console.log('Выпустить шасси')
    },
    this.releaseTheFenders = function() {
      console.log('Выпустить подкрылки')
    }
  }
  
  
  Car.prototype = vehicle;
  const bmw = new Car('bmw', 'hatchback', 2024);
  const airplane = new Airplane('Airbus', 'passenger', 2010);
  
  bmw.start = Car.prototype.stop;
  console.log(bmw)
  bmw.start()
  
  
  // admin 

  function User(username, email) {
  
    this.username = username;
    this.email = email;
  
    this.login = function() {
      if (system.users.includes(this)) {
  
        this.id = Math.round(Math.random()*10)
        console.log('Вы вошли в систему!')
      } else {
        console.log('Вы не зарегистрированы в системе!')
      }
    },
    this.logout = function() {
      system.removeUser(this)
      console.log('Вы вышли из системы!')
    }
  }
  
  function System() {
    this.users = [];
  
    this.addUser = function(user) {
      this.users.push(user)
    }
    this.removeUser = function(user) {
      let rem = system.users.indexOf(user)
      if (rem !== -1) { this.users.splice(rem, 1) }
    }
    this.getOnLineUsers = function() {
      let id = this.users.map(user => user.id) 
      console.log(id)
    }
  
    this.getUser = function(id) {
      console.log(id)
    }
  
  }
  
  const system = new System()
  const anton = new User('anton', 'antonlazorenko@gmail.com')
  const mike = new User('mike', 'mike@gmail.com')
  
  system.addUser(anton)
  system.addUser(mike)
  
  anton.login()
  mike.login()
  
  system.removeUser(anton)
  
  console.log(system)
  
  system.getOnLineUsers()