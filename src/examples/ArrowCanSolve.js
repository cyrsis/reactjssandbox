let age=2 ;

let kittyArrow = {
    age :100,
    grow: function () {
       setTimeout(
           () => {
               console.log(this.age);
           },100);
    }
}

kittyArrow.grow()


let kitty ={
    age:10,
    grow: function () {

        setTimeout(function () {
            console.log(++age); //cannt access this
        },100);

  }
};

kitty.grow();

//hack 1
let kitty2 ={
    age:10,
    grow: function () {
        const  self = this;
        setTimeout(function () {
            console.log(++self.age);
        },100);

    }
};
kitty2.grow();
//Output 11

//hack 2
let kitty3 ={
     age:20,
    grow: function () {
        setTimeout(function () {
            console.log(++this.age);
        }.bind(this), 100);
    }
}

kitty3.grow();
//Output 21

