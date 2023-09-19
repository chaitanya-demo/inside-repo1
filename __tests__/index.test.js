const chai = require('chai');
const { add } = require('../index');

const expect = chai.expect;

describe('Calculator', () => {
  it('should add two numbers', () => {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });
});
