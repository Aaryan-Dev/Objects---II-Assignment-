// - Given a list of user data with name and age, create a list of key-value pairs from the input
// - From the generated data, print the users whose age is more than 30
// - Sample Input


  let name = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
   let age = [32, 30, 26, 28, 44];


  let newarr = [];
   let obj ={};
  for(i=0; i<name.length; i++){
     key = name[i];
    obj[key]= age[i];

  }

bag = "";
for(let it in obj){
   if(obj[it]>30){
      bag = bag +  it +" ";
  } 
 }
  console.log(bag);
  