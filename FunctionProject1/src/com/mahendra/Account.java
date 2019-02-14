package com.mahendra;

public class Account {
	private String name;
	private double amount;
	private double interest;
	
	private InterestCalculator calculator;

	public Account(String name, double amount, 
			InterestCalculator calculator) {
		super();
		this.name = name;
		this.amount = amount;
		this.calculator = calculator;
		this.interest = calculator.calc(amount,0.04F,12);
	}

	@Override
	public String toString() {
		return "Account [name=" + name + ", amount=" + amount + ", interest=" + interest + "]";
	}
	
	
	
}
