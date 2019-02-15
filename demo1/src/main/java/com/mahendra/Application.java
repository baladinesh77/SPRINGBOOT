package com.mahendra;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Application {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");
		Greeter greet=context.getBean(Greeter.class);
		greet.greet("Mahendra");
		Greeter greet2=context.getBean(Greeter.class);
		System.out.println(greet==greet2);
	}

}
