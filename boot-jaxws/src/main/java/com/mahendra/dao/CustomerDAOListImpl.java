package com.mahendra.dao;

import java.util.LinkedList;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import java.util.*;

import org.springframework.stereotype.Repository;

import com.mahendra.models.Customer;

@Repository
public class CustomerDAOListImpl implements CustomerDAO {

	private List<Customer> customers = new LinkedList<Customer>();
	
	@PostConstruct
	private void init() {
		customers.add(new Customer("Vijay", "Mallya", "765765765", "vmallya@yahoo.com"));
		customers.add(new Customer("Siddharth","Mallya","6879878911","smallya@yahoo.com"));
		customers.add(new Customer("Deepika","Padukon","6465465","deep@yahoo.com"));
		
	}
	
	@Override
	public List<Customer> findAllCustomers() {
		return customers;
	}

	@Override
	public List<Customer> findByName(String name) {
		return customers.stream()
					.filter((x)->{ return x.getLastName().contains(name) || x.getFirstName().contains(name);})
					.collect(Collectors.toList());
	}

	@Override
	public void save(Customer customer) {
		customers.add(customer);
	}

	@Override
	public Optional<Customer> findByEmail(String email) {
		// TODO Auto-generated method stub
		return customers
					.stream()
					.filter((x)
						->x.getEmail().equalsIgnoreCase(email))
					.findFirst();
	}

	@Override
	public void update(Customer customer) {
		String email = customer.getEmail();
		Optional<Customer> cust = findByEmail(email);
		if(!cust.isPresent()) {
			throw new RuntimeException("No record found!");
		}
		Customer oldCustomer = cust.get();
		oldCustomer.setFirstName(customer.getFirstName());
		oldCustomer.setLastName(customer.getLastName());
		oldCustomer.setPhoneNo(customer.getPhoneNo());
	}

	
}
