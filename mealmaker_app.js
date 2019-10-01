const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers () {
      return this._courses.appetizers;
    },
      set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    get mains () {
      return this._courses.mains;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    get desserts () {
      return this._courses.desserts;
    },
    set desserts (desserts) {
      this._courses.desserts = desserts;
    },
    get courses () {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishtoCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    }
  , 
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
       generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `We will start you off with ${appetizer.name}. After that your main course will be ${main.name}. Then you will finish with ${dessert.name}. The total cost of the meal is ${totalPrice}.`;
    }
  }
  menu.addDishtoCourse('appetizers', 'Chips', 2.00);
  menu.addDishtoCourse('appetizers', 'Popcorn Chicken', 2.99);
  menu.addDishtoCourse('appetizers', 'Edamame', 1.00);
  menu.addDishtoCourse('mains', 'Fish Tacos', 5.99);
  menu.addDishtoCourse('mains', 'Sushi', 10.00);
  menu.addDishtoCourse('mains', 'Chicken and Rice', 8.00);
  menu.addDishtoCourse('desserts', 'Molten Lava Cake', 4.00);
  menu.addDishtoCourse('desserts', 'Pie a la mode', 2.99);
  menu.addDishtoCourse('desserts', 'Baked Alaskan', 5.00);
  const meal = menu.generateRandomMeal();
  console.log(meal);