package com.mahendra;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.remoting.jaxws.SimpleJaxWsServiceExporter;
import org.springframework.ws.config.annotation.EnableWs;

@SpringBootApplication

public class BootDemo21Application {

	public static void main(String[] args) {
		SpringApplication.run(BootDemo21Application.class, args);
	}

	
	
}
