package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@SpringBootApplication
public class BootDemo1Application {

	public static void main(String[] args) {
		SpringApplication.run(BootDemo1Application.class, args);
	}

	@Bean
	public ViewResolver resolver() {
		ViewResolver view = new InternalResourceViewResolver("WEB-INF/pages/", ".jsp");
		return view;
	}
}

