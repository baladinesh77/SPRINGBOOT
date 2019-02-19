package com.mahendra.services;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService(serviceName="greetings")
public class GreetingService {

	@WebMethod
	public String greet() {
		return "Hello World";
	}
	
}
