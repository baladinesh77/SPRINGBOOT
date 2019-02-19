package com.mahendra.endpoints;

import java.util.List;

import javax.jws.WebMethod;
import javax.jws.WebService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mahendra.models.Customer;
import com.mahendra.services.CustomerService;

@Component
@WebService(serviceName="customers")
public class CustomerServiceEndpoint {
	
	@Autowired
	private CustomerService service;
	
	@WebMethod
	public Customer findByEmail(String email) {
		return service.findByEmail(email);
	}
	
	@WebMethod
	public List<Customer> findByName(String name){
		return service.findByName(name);
	}
}
