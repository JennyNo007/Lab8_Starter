// unit.test.js

const { generateMapFileComment } = require('convert-source-map');
const { getMaxListeners } = require('process');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Test1: a valid phone number', () => {
    expect(functions.isPhoneNumber("650-259-1020")).toBe(true);
});
test('Test2: a valid phone number', () => {
    expect(functions.isPhoneNumber("110-001-9897")).toBe(true);
});
test('Test3: an invalid phone number without number', () => {
    expect(functions.isPhoneNumber("wrongnumber")).toBe(false);
});
test('Test4: an invalid phone number without 10 numbers', () => {
    expect(functions.isPhoneNumber("20211110")).toBe(false);
});
test('Test5: a valid email', () => {
    expect(functions.isEmail("ucsd@gmail.com")).toBe(true);
});
test('Test6: a valid email', () => {
    expect(functions.isEmail("cse110@ucsd.edu")).toBe(true);
});
test('Test7: an invalid email without post index address', () => {
    expect(functions.isEmail("cse110")).toBe(false);
});
test('Test8: an invalid email with an inexisting post index address', () => {
    expect(functions.isEmail("nonexist@nowhere")).toBe(false);
});
test('Test9: a strong password', () => {
    expect(functions.isStrongPassword("apple101")).toBe(true);
});
test('Test10: a strong password', () => {
    expect(functions.isStrongPassword("strongestpw")).toBe(true);
});
test('Test11: a weak password with morethan 15 characters', () => {
    expect(functions.isStrongPassword("thereissomanytestshere")).toBe(false);
});
test('Test12: a weak password with symbols', () => {
    expect(functions.isStrongPassword("let'sgo")).toBe(false);
});
test('Test13: a valid date', () => {
    expect(functions.isDate("11/13/2021")).toBe(true);
});
test('Test14: a valid date', () => {
    expect(functions.isDate("1/1/2022")).toBe(true);
});
test('Test15: an invalid date with a 2 digits year', () => {
    expect(functions.isDate("1/1/22")).toBe(false);
});
test('Test16: an invalid date with dots', () => {
    expect(functions.isDate("1.1.2022")).toBe(false);
});
test('Test17: a valid hex color', () => {
    expect(functions.isHexColor("#F00")).toBe(true);
});
test('Test18: a valid hex color', () => {
    expect(functions.isHexColor("#A10")).toBe(true);
});
test('Test19: an invalid hex color without hash', () => {
    expect(functions.isHexColor("B000")).toBe(false);
});
test('Test20: an invalid hex color without correct format', () => {
    expect(functions.isHexColor("#T0110")).toBe(false);
});
