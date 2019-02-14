package com.mahendra;

import java.util.HashSet;
import java.util.Set;

public class DefaultMethodMain2 {

	public static void main(String[] args) {
		Set<Person> people = new HashSet<>();
		people.add(new Person("Raj", "Kapoor", "Prithviraj"));
		people.add(new Person("Rishi", "Kapoor", "Raj"));
		people.add(new Person("Ranbir", "Kapoor", "Rishi"));
		people.add(new Person("Sanjay", "Dutt", "Sunil"));
		people.add(new Person("Hrithik", "Roshan", "Rakesh"));
		
		//people.removeIf((x)-> x.getLastName().equalsIgnoreCase("roshan"));
		people.removeIf(DefaultMethodMain2::isKapoor);
		people.forEach(System.out::println);
	}

	static boolean isKapoor(Person person) {
		return person.getLastName().equalsIgnoreCase("kapoor");
	}
}
