package com.mahendra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	public ResponseEntity<Customer> find(@PathVariable("id") Integer id) {
		Customer customer = null;
		try {
		service.find(id);
		return new ResponseEntity<Customer>(customer,HttpStatus.OK);
		}
		catch(Exception ex) {
			ex.printStackTrace();
			return new ResponseEntity<Customer>(HttpStatus.NO_CONTENT);
		}
		
	}
	
	@RequestMapping(value="/create",
			method=RequestMethod.POST,
			consumes= {"application/json","application/xml"})
	public ResponseEntity<String> save(@RequestBody Customer customer){
		service.save(customer);
		return new ResponseEntity<String>("Created!",HttpStatus.CREATED);
	}
}
