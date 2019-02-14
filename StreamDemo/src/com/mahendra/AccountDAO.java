package com.mahendra;

import java.util.*;
import java.util.stream.Collectors;

public class AccountDAO {
private List<Account> accounts = new LinkedList<>();

public void add(Account a) {
	accounts.add(a);
}

public Optional<Account> find(String accNo) {
	return accounts.stream() /*Open a Stream*/
		.filter((a)->a.getAccNo().equalsIgnoreCase(accNo))
		.findFirst(); /* Close a Stream and return */
}

//Shortest method chain with Stream
public void display() {
	accounts.stream().forEach(System.out::println);
}

public List<Account> findBalanceBelow(double amt){
	return accounts.stream()
			.filter((x)->x.getBalance()<amt)
			.collect(Collectors.toList());
}

public List<String> findCustomerWithBalanceBelow(double amt) {
	return accounts.parallelStream()
			.filter((x)->x.getBalance()<amt)
			.map((x)->x.getCustomer())
			.collect(Collectors.toList());			
}

}
