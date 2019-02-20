package com.mahendra.entities;

import javax.persistence.*;

@Entity
@Table(name="accounts")
//TRY Other options : TABLE_PER_CONCRETE_CLASS and JOINED_SUBCLASS
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
//Remove this attribute
@DiscriminatorColumn(name="AC_TYPE")
public abstract class Account {
	@Id  
	private Integer accountNumber;
	private String accountHolder;
	private Double balance;
	public Integer getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(Integer accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getAccountHolder() {
		return accountHolder;
	}
	public void setAccountHolder(String accountHolder) {
		this.accountHolder = accountHolder;
	}
	public Double getBalance() {
		return balance;
	}
	public void setBalance(Double balance) {
		this.balance = balance;
	}
	public Account(Integer accountNumber, String accountHolder, Double balance) {
		super();
		this.accountNumber = accountNumber;
		this.accountHolder = accountHolder;
		this.balance = balance;
	}
	public Account() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Account [accountNumber=" + accountNumber + ", accountHolder=" + accountHolder + ", balance=" + balance
				+ "]";
	}
	
	
}
