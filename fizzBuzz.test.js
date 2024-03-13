

// > fizzBuzz(3); 'Fizz'

// > fizzBuzz(5); 'Buzz'

// > fizzBuzz(8); 8

// > fizzBuzz(15); 'FizzBuzz'

// > fizzBuzz(18);'Fizz'

// > fizzBuzz(20); 'Buzz'



const fizzBuzz = require("./../fizz_buzz")


describe('fizzBuzz', () => {
    it("3 = Fizz", () =>{
        expect(fizzBuzz(3)).toBe("Fizz");
    }); 

});


describe('fizzBuzz', () => {
    it("5 = Buzz", () =>{
        expect(fizzBuzz(5)).toBe("Buzz");
    }); 

});

describe('fizzBuzz', () => {
    it("8 = 8", () =>{
        expect(fizzBuzz(8)).toBe(8);
    }); 

});


describe('fizzBuzz', () => {
    it("15 = FizzBuzz", () =>{
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    }); 

});

describe('fizzBuzz', () => {
    it("18 = Fizz", () =>{
        expect(fizzBuzz(18)).toBe("Fizz");
    }); 

});

describe('fizzBuzz', () => {
    it("20 = FizzBuzz", () =>{
        expect(fizzBuzz(20)).toBe("Buzz");
    }); 

});

