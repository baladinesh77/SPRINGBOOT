package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

	//Setter Injection in Spring may or may not
	//use Setter method!!
	//@Autowired private ProductDAO dao;
	@Autowired @Qualifier("dao1") 
	private ProductDAO dao;
	
	
	@GetMapping("/product")
	public Product find(@RequestParam("id")int id) {
		return dao.findById(id);
	}
}
