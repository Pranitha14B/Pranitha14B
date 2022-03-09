class student{
    constructor(name){
        this.name=name;
    }
    disp(){
        console.log("student "+this.name);
    }
}
let s= new student("abc");
s.disp();