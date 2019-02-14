package com.mahendra;

import java.util.function.Consumer;

public class Main3 {

	public static void main(String[] args) {
		Person p = new Person("Prabas","Raj","");
		show(p,(x)-> System.out.println
					("Hello "+p.getFirstName()));
	}
	static void show(Person p,Consumer<Person> consumer) {
		consumer.accept(p);
	}
}
