package com.mahendra;

public interface Flyable {
	
	//A Non Abstract method in interface
	//Implementation class may or may not override it!!
	default void fly() {
		System.out.println("Default fly !!!");
	}
	
	void takeOff();
}
