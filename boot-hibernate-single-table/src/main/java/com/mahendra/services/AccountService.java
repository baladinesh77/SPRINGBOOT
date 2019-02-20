package com.mahendra.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mahendra.dao.AccountDAO;
import com.mahendra.entities.Account;

@Service
public class AccountService {

	@Autowired
	private AccountDAO dao;
	
	public void save(Account acc) {
		dao.save(acc);
	}
	
	public List<Account> accounts(){
		return dao.findAll();
	}
}
