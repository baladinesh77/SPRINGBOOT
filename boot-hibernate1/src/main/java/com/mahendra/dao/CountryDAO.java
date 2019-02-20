package com.mahendra.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mahendra.entities.Country;

//Feature of Spring-DATA-JPA
@Repository
public interface CountryDAO 
	extends JpaRepository<Country, Integer>{

}
