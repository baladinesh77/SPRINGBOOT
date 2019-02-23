package com.mahendra.services;

import java.util.List;
import java.util.Optional;

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

	@Override
	public Customer findByEmail(String email) {
		// TODO Auto-generated method stub
		Optional<Customer> cust =dao.findByEmail(email);
		return cust.get();
	}

	@Override
	public void update(Customer customer) {
		// TODO Auto-generated method stub
		dao.update(customer);
	}

	@Override
	public Customer find(Integer id) {
		// TODO Auto-generated method stub
		return dao.findById(id);
	}
	
}
