package com.mahendra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mahendra.models.Customer;
import com.mahendra.services.CustomerService;

@RestController
@RequestMapping("/customers")
public class CustomerController {

	@Autowired private CustomerService service;
	
	@RequestMapping(value="/find-by-id/{id}",
			produces= {MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE})
	public Customer find(@PathVariable("id") Integer id) {
		return service.find(id);
	}
}
