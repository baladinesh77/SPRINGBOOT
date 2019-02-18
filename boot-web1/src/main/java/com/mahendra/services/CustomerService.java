package com.mahendra.services;

import java.util.List;

import com.mahendra.models.Customer;

public interface CustomerService {
	List<Customer> findByName(String name);
	void save(Customer customer);
}
