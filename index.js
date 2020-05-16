class User1 {
 constructor (name, email) {
    this.name = name,
    this.email = email

 }
 data (){

  return
     `
    Name : ${this.name}
    Email : ${this.email}
    `
     }

}

class User2 extends User1 {
 constructor(name, email,id){
   super(name, email){

     this.id = id
   }
 }
 data (){

  return
     `
    Name : ${this.name}
    Email : ${this.email}
    ID : ${this.id}
    `
     }

}


const oscar = new User1 ("oscar", "omedranoc@hotmail.com");
document.write(oscar.data());
