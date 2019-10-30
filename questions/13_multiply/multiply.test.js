const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('a', 'b')).toThrow();

    expect(() => multiply('a' , 3 )).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(typeof multiply()).toBe('number');

    // test that the returned value is correct
    expect(multiply(1,2)).toBe(2);

    // test some other values
    expect(multiply(3,5)).toBe(15);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    const randomProducts = Math.ceil(Math.random() * 1000) + 1000;

    const randomReturned = multiply(randomProducts);
  });
});
