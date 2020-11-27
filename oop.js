 function createBeing(name){
    return {
        name: name,
        sayName: function(){
            return "My name is " + name
        }
    }
 }

 const being1 = createBeing("Tom")
//  console.log(being1.sayName())

//  class Being { 
//     constructor(name) {
//       this.name = name;
//     }
    
//     speak() {
//       console.log(`${this.name} is my name.`);
//     }
//   }

  // let being2 = new Being("John")

    // being2.speak()
    // console.log(being2.name)