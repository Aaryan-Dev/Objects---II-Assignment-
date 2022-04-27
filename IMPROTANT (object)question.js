// ### **Problem-2 Grade Student Marks**

// - Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total
// - Sample Input

// ```
// [
// 	{
// 		grade: "V",
// 		students: [
// 			{name: "Nrupul", marks: [10, 20, 30]},
// 			{name: "Prateek", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VI",
// 		students: [
// 			{name: "Aman", marks: [10, 20, 30]},
// 			{name: "Albert", marks: [20, 30, 40]}
// 		]
// 	},
// 	{
// 		grade: "VII",
// 		students: [
// 			{name: "Yogesh", marks: [10, 20, 30]},
// 			{name: "Sandhya", marks: [20, 30, 40]}
// 		]
// 	}
// ]

// ```

// - Sample Output
// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90


 let marks =  [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]

for(i=0; i<marks.length; i++){
  first = marks[i].students;


   obj ={};
  
      zero = 0;
for(j=0; j<first.length; j++){
  second = first[j].marks;

  sum = 0;
  for(k=0; k<second.length; k++){
   third = second[k];
   // console.log(third); 
   sum = sum + third;
  }
    // console.log(sum);
  if(zero<=sum){
    zero = sum;
  obj.Name = first[j].name;
  }
}
  // console.log(zero);
  obj.grade = marks[i].grade;
  obj.num = zero
  // console.log(obj);
  console.log(obj.grade+"-"+obj.Name +"-"+ obj.num);
}
