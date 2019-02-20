package com.mahendra;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.mahendra.entities.*;

@Repository
public interface ContinentDAO extends CrudRepository<Continent, Integer>{

	
	
}
