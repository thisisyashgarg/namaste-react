const person = {
  name: "Yash",
  print: () => {
    console.log(this.name);
  },
  print2: function () {
    console.log(this.name);
  },
};
person.print();
person.print2();
