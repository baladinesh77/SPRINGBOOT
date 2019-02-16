package com.example.demo.dao;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Repository;

import com.example.demo.Product;

@Repository(value="dao1")
public class ProductDAO {
	private List<Product> products;
	
	//Invoke this method AFTER instance creation
	//BUT BEFORE it gets injected anywhere!!
	@PostConstruct 
	public void init() {
		products = new LinkedList<>();
		products.add(new Product(101, "Colgate", 49.5));
		products.add(new Product(102, "Colgate Total", 59.5));
		products.add(new Product(103, "Colgate Sensitive", 112.5));
	}
	
	public Product findById(int id) {
		Optional<Product> p = products.stream().filter((x)->(x.getId()==id)).findFirst();
		if(!p.isPresent()) {
			throw new RuntimeException("Product not found!");
		}
		return p.get();
	}
}
