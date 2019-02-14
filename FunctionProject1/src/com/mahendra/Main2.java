package com.mahendra;

public class Main2 {

	public static void main(String[] args) {
		Person p1 = new Person("Jackie", "Chan", "X");
		
		//INSIDE LAMBDA, RETURN is optional for single line block
		p1.print((x)-> x.getFirstName()+" "+x.getLastName()+" "+x.getMiddleName());
		p1.print((x)-> x.getLastName()+" "+x.getFirstName()+" "+x.getMiddleName());
		
	}

}
