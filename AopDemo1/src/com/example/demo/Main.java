package com.example.demo;

public class Main {

	public static void main(String[] args) {
		Service service = new TargetClass();
		service.hello();
		
		//With AOP
		Aspect aspect = new Aspect();
		TargetClass target = new TargetClass();
		Service service2 = new ProxyTarget(target,aspect);
		service2.hello();
		
	}

}
