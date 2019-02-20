package com.mahendra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.mahendra.models.Customer;

@SpringBootApplication
public class BootJaxrsClient1Application implements CommandLineRunner{

	@Autowired private RestTemplate template;
	
	@Value("${api.baseurl}")
	private String baseUrl;
	
	public static void main(String[] args) {
		SpringApplication.run(BootJaxrsClient1Application.class, args);
	}

	@Bean
	public RestTemplate template() {
		return  new RestTemplate();
	}
	
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println(baseUrl);
		
	Customer c = template.getForObject
					(baseUrl+"find-by-id/101"
							,Customer.class);
	System.out.println("Found customer: "+c.getFirstName());
	
	Customer c1 = new Customer(104,"Ravi","Kishan","576576576","rkishan@yahoo.com");
	ResponseEntity<String> resp 
		=  template.postForEntity(baseUrl+"create", c1,String.class);
	System.out.println(resp.getStatusCode()+" "+resp.getBody());	
	}

}
