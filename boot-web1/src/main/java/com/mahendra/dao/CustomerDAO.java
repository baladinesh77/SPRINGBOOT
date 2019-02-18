package com.mahendra.dao;

import java.util.List;

import com.mahendra.models.Customer;

public interface CustomerDAO {
  List<Customer> findAllCustomers();
  List<Customer> findByName(String name);
  void save(Customer customer);
}
