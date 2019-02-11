package collections;

import java.text.NumberFormat;

public class Main {

	public static void main(String[] args) {
		AccountManager manager = new AccountManager();
		manager.addNew(new Account("15279991001", "Vijay Mallya", 12300000), 1001);
		manager.addNew(new Account("15675761003","Nirav Modi",15600000),1003);
		
		Transaction tn = new Transaction(manager);
		tn.transfer(1003, 1001, 10000000D);
		
		System.out.println("Now balance: ");
		NumberFormat nf = NumberFormat.getCurrencyInstance();
		System.out.println("Nirav "+ nf.format(manager.findAccount(1003).getBalance()));
		
		System.out.println("Vijay "+ nf.format(manager.findAccount(1001).getBalance()));
		

	}

}
