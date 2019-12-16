#! /usr/local/bin/node
import { getName } from '../index';

console.log('Welcome to The Brain Games!');
const userName = getName();
console.log(`Hello, ${userName}!`);