class A {
    constructor() {
        this.a = 1;
    }
    Afun(){

    }
}

class B extends A {
    constructor() {
        super();
        this.b = 2;
    }
    Bfun(){

    }
}

var b = new B();
console.log(b);  //B { a: 1, b: 2 }
