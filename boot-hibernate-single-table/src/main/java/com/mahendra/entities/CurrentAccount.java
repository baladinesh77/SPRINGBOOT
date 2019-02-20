package com.mahendra.entities;

import javax.persistence.*;

@Entity
@DiscriminatorValue("CA")
public class CurrentAccount extends Account {
	private double creditLimit;

	public CurrentAccount(Integer accountNumber, String accountHolder, Double balance, double creditLimit) {
		super(accountNumber, accountHolder, balance);
		this.creditLimit = creditLimit;
	}

	public double getCreditLimit() {
		return creditLimit;
	}

	public void setCreditLimit(double creditLimit) {
		this.creditLimit = creditLimit;
	}

	public CurrentAccount() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "CurrentAccount [creditLimit=" + creditLimit + ", getAccountNumber()=" + getAccountNumber()
				+ ", getAccountHolder()=" + getAccountHolder() + ", getBalance()=" + getBalance() + "]";
	}

	
}
