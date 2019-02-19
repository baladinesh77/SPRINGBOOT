package com.mahendra;

import java.rmi.RemoteException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.mahendra.services.GreetingService;
import com.mahendra.services.GreetingServiceProxy;

@SpringBootApplication
public class BootJaxwsClientApplication 
	implements CommandLineRunner{

	@Autowired GreetingService service;
	
	public static void main(String[] args) throws RemoteException {
		SpringApplication.run(BootJaxwsClientApplication.class, args);
	}

	@Bean
	public GreetingService service() {
		return new GreetingServiceProxy();
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Invoking service...");
		String message = service.greet();
		System.out.println("Message from service: "+message);
		
	}
}
