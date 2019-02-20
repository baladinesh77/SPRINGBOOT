package com.mahendra.entities;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("SB")
public class SavingAccount extends Account {

	private double minBalance;
	private double rateOfInterest;
	public SavingAccount(Integer accountNumber, String accountHolder, Double balance, double minBalance,
			double rateOfInterest) {
		super(accountNumber, accountHolder, balance);
		this.minBalance = minBalance;
		this.rateOfInterest = rateOfInterest;
	}
	public double getMinBalance() {
		return minBalance;
	}
	public void setMinBalance(double minBalance) {
		this.minBalance = minBalance;
	}
	public double getRateOfInterest() {
		return rateOfInterest;
	}
	public void setRateOfInterest(double rateOfInterest) {
		this.rateOfInterest = rateOfInterest;
	}
	public SavingAccount() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "SavingAccount [minBalance=" + minBalance + ", rateOfInterest=" + rateOfInterest
				+ ", getAccountNumber()=" + getAccountNumber() + ", getAccountHolder()=" + getAccountHolder()
				+ ", getBalance()=" + getBalance() + "]";
	}
	
	
}
