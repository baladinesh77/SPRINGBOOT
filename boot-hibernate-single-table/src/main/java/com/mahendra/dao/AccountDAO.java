package com.mahendra.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mahendra.entities.Account;

@Repository
public interface AccountDAO extends JpaRepository<Account, Integer>{
	
}
