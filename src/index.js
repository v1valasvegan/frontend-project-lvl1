import readlineSync from 'readline-sync';

export default (text) => (param = '') => readlineSync.question(`${text}${param}`);
