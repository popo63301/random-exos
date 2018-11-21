const countLetters = word => {
  let obj = {};
  const tab = word.split('');

  for (let i = 0; i < tab.length; i++) {
    if (obj[tab[i]] >= 1) {
      obj[tab[i]] = obj[tab[i]] + 1;
    } else {
      obj[tab[i]] = 1;
    }
  }
  return obj;
};

const myResult = countLetters('SALAMANDRE'); // => { F: 1, R: 2, E: 2 }

console.log(myResult);

//https://github.com/airbnb/javascript
