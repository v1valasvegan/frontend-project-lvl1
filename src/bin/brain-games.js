#!/usr/bin/env node
import { ask } from '../index';

const greeting = 'Welcome to The Brain Games!';
console.log(greeting);
const userName = ask('May I have your name? ')();
console.log(`Hello, ${userName}!`);
