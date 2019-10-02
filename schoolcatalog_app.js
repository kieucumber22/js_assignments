class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') 
      {
        this._numberOfStudents = newNumberOfStudents;
      }
    else {
      console.log('Invalid input: must be set to a number.');
    }
  }
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} at the ${this.level} school level.`);
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const randomIndex = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[randomIndex];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}
const davisElementary = new PrimarySchool('Davis Elementary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
davisElementary.quickFacts();
const substitute= School.pickSubstituteTeacher(['John Doe', 'Jane Williams', 'Cindy Crawford', 'Jason Gillespe']);
const northHigh = new HighSchool('North Garland High School', 415, ['Baseball', 'Basketball', 'Track and Field', 'Volleyball']);
console.log(northHigh.sportsTeams);