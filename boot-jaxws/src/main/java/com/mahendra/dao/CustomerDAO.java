package com.mahendra.dao;

import java.util.List;
import java.util.Optional;

import com.mahendra.models.Customer;

public interface CustomerDAO {
  List<Customer> findAllCustomers();
  List<Customer> findByName(String name);
  void save(Customer customer);
  Optional<Customer> findByEmail(String email);
  void update(Customer customer);
  
}
