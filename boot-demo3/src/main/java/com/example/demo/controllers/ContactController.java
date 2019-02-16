package com.example.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ContactController {

	@GetMapping("/contactus")
	public String viewPage() {
		System.out.println("Contact US");
		return "contact";
	}
}
