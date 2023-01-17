let age=parseInt(prompt("enter the age"));
let gender=prompt("your gender");

switch(gender){
	case "male":
		if(age>=20 && age<=40){
			console.log("you may work in enywhere")
			break;
		}
		else if(age>40 && age<=60){
			console.log("you will work in urban areas")
			break;
		}
		else{
			console.log("error")
			break;
		}
	case "female":
		console.log("you will work only in urban areas")
		break;	
}
