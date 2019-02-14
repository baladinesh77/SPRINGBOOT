package com.mahendra;

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


	public void print(NameFormatter formatter) {
		System.out.println(formatter.format(this));
	}
}
