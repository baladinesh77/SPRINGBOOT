package com.mahendra;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
public class BootHibernate1Application {

	public static void main(String[] args) {
		SpringApplication.run(BootHibernate1Application.class, args);
	}

}
