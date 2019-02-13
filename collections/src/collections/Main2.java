package collections;

public class Main2 {

	public static void main(String[] args) {
		Account a = new SavingAccount();
		System.out.println(a.toString());// Invoke Child class
		a.show();	// Invoke Parent class!
		SavingAccount.show();
	}

}
