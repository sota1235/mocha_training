/**
 * @description Sample class
 */

/**
 * @class Dog
 */
class Dog {
  /**
   * @param {string} name
   * @param {number} age
   */
  constructor(name, age) {
    this.name = name;
    this.age  = age;
  }

  callMyName() {
    console.log(`My name is ${this.name}`);
  }

  static bark() {
    console.log('Wow!');
  }

  get age() {
    return this.age;
  }
}
