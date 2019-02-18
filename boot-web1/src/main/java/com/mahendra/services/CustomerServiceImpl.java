package com.mahendra.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mahendra.dao.CustomerDAO;
import com.mahendra.models.Customer;

@Service
public class CustomerServiceImpl implements CustomerService{

	@Autowired private CustomerDAO dao;
	
	@Override
	public List<Customer> findByName(String name) {
		// TODO Auto-generated method stub
		return dao.findByName(name);
	}

	@Override
	public void save(Customer customer) {
		// TODO Auto-generated method stub
		dao.save(customer);
	}
	
}
