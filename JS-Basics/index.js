const obj = {
  fn: function () {
    console.log(this);
    //this refers to obj here
  },
  fn2: () => {
    console.log(this);
    //this refers to the parent of obj, ie window
  },
};

function x() {
  console.log(this);
}

const person = {
  name: "yash",
};

const person2 = {
  name: "ankit",
};

x();
x.call();
obj.fn();
obj.fn2();
x.call(person);
x.call(person2);
