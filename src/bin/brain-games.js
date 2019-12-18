#!/usr/bin/env node
import getName from '..';

console.log('Welcome to The Brain Games!');
const userName = getName();
console.log(`Hello, ${userName}!`);
