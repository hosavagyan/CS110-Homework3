const math= function(num1,num2,num3){
	const mathOperations = (num1+num2)/num3;
	return mathOperations;
}

alert(math(1,32,3));

const nothing= function(){
	
	return "Something";
}

alert(nothing());

const noReturn= function(a,b,c){
	
	 const sum= a+b+c+5;
}
const fullName= function(firstName, lastName){
	
	 const add= firstName+ " "+lastName;
		return add;
}
alert(fullName("Baksel","Akunc"));

const longestString= function(a,b,c){

if (a.length>=b.length && a.length>=c.length) {
		return a;
}
else if (b.length>=a.length && b.length>=c.length) {
	return b;
}
else{
	return c;
}
};
alert(longestString("aaa","a","aaaa"));

const compare= function(a,b){
if (a===b) {
	return 0;
}
else if (a>b) {
	return 1;
}
else{
	return -1;
}
};

alert(compare(5,6));

const isTruethy=function(val1,val2,val3){
	return input1 || input2 || input3 || false;
}
};
alert(isTruethy(0,2,0));