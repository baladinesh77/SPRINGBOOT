package com.mahendra;

import java.util.function.Function;
import java.util.function.BinaryOperator;

public class Main2 {

	public static void main(String[] args) {
		Person p1 = new Person("Jackie", "Chan", "X");

		// INSIDE LAMBDA, RETURN is optional for single line block
		p1.print((x) -> System.out.println(x.getFirstName() + " " + x.getLastName() + " " + x.getMiddleName()));
		Function<Person,String> fun1 = 	/*EXEC(3)*/
					(x) -> x.getLastName() + " " + x.getFirstName() + " " + x.getMiddleName(); 
		
		// ---EXE(1)			
		p1.print(fun1);

	}

}
