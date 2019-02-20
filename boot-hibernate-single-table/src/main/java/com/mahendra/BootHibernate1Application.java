package com.mahendra;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.mahendra.entities.Account;
import com.mahendra.entities.CurrentAccount;
import com.mahendra.entities.SavingAccount;
import com.mahendra.services.AccountService;

@SpringBootApplication
@EnableTransactionManagement
public class BootHibernate1Application implements CommandLineRunner{

	@Autowired private AccountService service;
	
	public static void main(String[] args) {
		SpringApplication.run(BootHibernate1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		SavingAccount acc1 = new SavingAccount(1012,"Ashish",2999.9,1000,0.04);
		CurrentAccount acc2 = new CurrentAccount(1024,"Naresh",34000.0,100000);
		
		service.save(acc1);
		service.save(acc2);
		
		List<Account> accs = service.accounts();
		
		accs.forEach(System.out::println);
	
	}
	
	

}
