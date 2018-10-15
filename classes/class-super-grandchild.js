class Parent {
    says () {
        console.log('Go to bed.');
    }
}

class Child extends Parent {
    says() {
        console.log('I\'m not tired!');
    }
}

class GrandChild extends Child {
    says(){
        console.log('zzz...');
        super.says();
        
    }
}

var gc = new GrandChild();

gc.says();