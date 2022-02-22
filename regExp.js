const REGEXP = /(red|blue) flag/g;

console.log('red flag blue flag'.match(REGEXP));

console.log('yellow flag red flag blue flag green flag'.match(REGEXP));

console.log(
  'pink flag red flag black flag blue flag green flag red flag '.match(REGEXP)
);

/////
const REGEXP2 = /\d{2}\:\d{2}/;

console.log('Breakfast at 09:00 in the room 123:456'.match(REGEXP2));

///////
const URLJoin = (...args) =>
  args
    .join('/')
    .replace(/[\/]+/g, '/')
    .replace(/^(.+):\//, '$1://')
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?');

URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo');

//////

const isAbsoluteURL = (str) => /^[a-z][a-z0-9+.-]*:/.test(str);
isAbsoluteURL('https://google.com'); // true
isAbsoluteURL('ftp://www.myserver.net'); // true
isAbsoluteURL('/foo/bar'); // false
