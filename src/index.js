class SmartCalculator {

  constructor(initialValue) {
      this.array = []
      this.array.push(initialValue);
      this.string = '';
    }

    add(number) {
      this.array.push('+');
      this.array.push(number);
      return this;
    }

    subtract(number) {
      this.array.push('-');
      this.array.push(number);
      return this;
    }

    multiply(number) {
      this.array.push('*');
      this.array.push(number);
      return this;
    }

    devide(number) {
      this.array.push('/');
      this.array.push(number);
      return this;
    }

    pow(number) {
        this.array.push('**');
        this.array.push(number);
        //this.array[this.array.length-1] = Math.pow(this.array[this.array.length-1], number);
        return this;
    }

    valueOf() {

      for (var i = 0; i < this.array.length; i++) {
        this.string = this.string + this.array[i];
      }

      return eval(this.string);
    }
}

module.exports = SmartCalculator;
