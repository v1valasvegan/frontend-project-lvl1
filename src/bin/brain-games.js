#! /usr/local/bin/node
import getName from '../index.mjs';

console.log('Welcome to The Brain Games!');
const userName = getName();
console.log(`Hello, ${userName}!`);
