package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping(value="/")
	public String sayHello() {
		return "Hello World";
	}
	@GetMapping("/first")
	public String sayFirst() {
		return "First page";
	}
}
