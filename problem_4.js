function Person( age , name , city )
{
	this.age=age;
	this.name=name;
	this.city=city;
}

var temp = new Person();

temp.name = "piyush";
temp.age = 20;
temp.city = "wasepur";

(function print_details( temp )
{
	console.log(temp.name + " " + temp.age + " " + temp.city);
})(temp)