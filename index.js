const generateKey = function (length, characters) {
  let key = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters[randomIndex];
  }
  return key;
};

const characters = "in2iund9821n0982d1nf982fhn912jd-l9";
const key = generateKey(16, characters);
console.log(key);
