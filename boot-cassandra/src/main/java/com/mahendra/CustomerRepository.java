package com.mahendra;

import java.util.List;

import org.springframework.data.cassandra.repository.AllowFiltering;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository 
	extends CrudRepository<Customer, Integer> {
	

@AllowFiltering	
List<Customer> findByEmail(String email);

@AllowFiltering
List<Customer> findByFirstName(String firstName);

@AllowFiltering
List<Customer> findByLastName(String lastName);
	
}
