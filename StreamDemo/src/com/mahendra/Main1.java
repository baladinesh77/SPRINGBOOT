package com.mahendra;

import java.util.List;
import java.util.Optional;

public class Main1 {

	public static void main(String[] args) {
		AccountDAO dao = new AccountDAO();
		dao.add(new Account("A1234", "Mogambo", 12000));
		dao.add(new Account("A1322","Mr Bean",78222));
		dao.add(new Account("A6755","Dr Octopus",1672220));
		dao.add(new Account("B6766","Joker",16600));
		
		Optional<Account> result = dao.find("B6767");
		if(result.isPresent()) {
			System.out.println(result.get().getCustomer()+" $ "+result.get().getBalance());
		}
		
		List<Account> acc2 = dao.findBalanceBelow(50000);
		acc2.forEach(System.out::println);
	}

}
