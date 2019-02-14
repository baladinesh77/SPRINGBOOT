package com.mahendra;

import java.util.function.Consumer;
import java.util.function.Function;

public class Person {
	private String firstName, lastName, middleName;
	
	public Person(String firstName, String lastName, String middleName) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.middleName = middleName;
	}


	public String getFirstName() {
		return firstName;
	}


	public String getLastName() {
		return lastName;
	}


	public String getMiddleName() {
		return middleName;
	}

	public void print(Consumer<Person> consumer) {
		consumer.accept(this);
	}
	//--EXEC(2)
	public void print(Function<Person, String> function) {
		System.out.println(function.apply(this));
	}


	@Override
	public String toString() {
		return "Person [firstName=" + firstName + ", lastName=" + lastName + ", middleName=" + middleName + "]";
	}
	
	
}
