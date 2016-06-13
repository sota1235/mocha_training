var a = 1;
var b = 2;

var object = {
  a: a,
  b: b
};

var hoge = function(fuga) {
  console.log(fuga.a + fuga.b);
};

hoge(object);

var fuga = (moga) => {
  return moga;
};

fuga();
