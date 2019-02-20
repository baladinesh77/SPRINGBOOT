package com.mahendra;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;

import com.mahendra.entities.Continent;
import com.mahendra.entities.Country;
import com.mahendra.services.CountryService;

@SpringBootApplication
public class BootHibernate1Application implements CommandLineRunner{

	@Autowired private CountryService service;
	
	public static void main(String[] args) {
		SpringApplication.run(BootHibernate1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Creating new countries");
		
		Continent cn = new Continent(1, "Asia");

		service.save(cn);
		
		Country c1 = new Country("India", "New Delhi", cn);
		Country c2 = new Country("Nepal","Kathmandu",cn);
		
		service.save(c1);
		service.save(c2);
		
		System.out.println("Saved!");
		Collection<Country> countries = service.listAll();
		countries.forEach((x)->{
			System.out.println("Country : "+x.getName()+" "+x.getContinent());
		});
	}
	
	

}
