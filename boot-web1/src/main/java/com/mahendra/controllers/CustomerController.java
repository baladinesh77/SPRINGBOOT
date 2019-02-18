package com.mahendra.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.mahendra.models.Customer;
import com.mahendra.services.CustomerService;

@Controller
@RequestMapping("/customers")
public class CustomerController {
	@Autowired private CustomerService service;
	
	@GetMapping("/find-by-name")
	public String find
		(@RequestParam String name,Model model) {
		List<Customer> customers =
				service.findByName(name);
		if(customers.isEmpty()) {
			model.addAttribute
				("error","No customer found!");
		}
		model.addAttribute("results",customers);
		return "results";
	}
	
	@GetMapping("/add-new")
	public String showForm(Model model) {
		Customer c = new Customer();
		model.addAttribute("customer",c);
		c.setPhoneNo("7572657245");
		return "form";
	}
	
	@PostMapping("/add-new")
	public String addNew(@ModelAttribute Customer customer) {
		service.save(customer);
		return "redirect:/"; //Redirecting to HomeController
	}
	
	//TWO MORE methods for EDIT functionality
	@GetMapping("/edit")
	public String editCustomer(@RequestParam String email, Model model) {
		Customer customer = service.findByEmail(email);
		System.out.println("Searching for email: "+email);
		if(customer==null) {
			return "redirect:/";
		}
		model.addAttribute("customer",customer);
		return "form-edit";
	}
	
	@PostMapping("/edit")
	public String saveChanges(@ModelAttribute Customer customer) {
		System.out.println("Searching for email: "+customer.getEmail());
		service.update(customer);
		return "redirect:/";
	}
}
