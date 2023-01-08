const person = {
  name: "Yash",
  print: function () {
    console.log(this);
  },
};

const person2 = {
  name: "Ankit",
};
person.print();
person.print.call();
person.print.call(this);
person.print.call(person2);
