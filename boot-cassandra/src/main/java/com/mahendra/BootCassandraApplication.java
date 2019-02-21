package com.mahendra;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BootCassandraApplication implements CommandLineRunner {

	@Autowired
	private CustomerRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(BootCassandraApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Address address = new Address("MG Road","Shivaji Chowk","Mumbai");
		Customer c1 = new Customer(101, "Chunky", "Pandey", "chunky@yahoo.com");
		Customer c2 = new Customer(102, "Govind", "Ahuja", "govinda@yahoo.com");
		c1.setAddress(address);
		c2.setAddress(address);
		
		repository.save(c1);
		repository.save(c2);

		List<Customer> c3 = repository.findByLastName("Ahuja");
		c3.forEach(System.out::println);
	}

}
