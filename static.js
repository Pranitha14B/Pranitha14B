class student{
    
    static disp(){
        console.log("parent");
    }
}
class student1 extends student{
    
    disp1(){
        console.log("child");
    }
}
let s= new student1();
s.disp1();
student1.disp();