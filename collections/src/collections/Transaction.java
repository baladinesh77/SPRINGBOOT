package collections;

public class Transaction {

	private AccountManager manager;

	public Transaction(AccountManager manager) {
		super();
		this.manager = manager;
	}
	
	public void withdraw(Integer id, Double amount) {
		Account account = manager.findAccount(id);
		if(account==null) {
			throw new RuntimeException("Cannot withdraw from non-existing account!");
		}
		double temp = account.getBalance();
		temp = temp - amount;
		if(temp<=0) {
			throw new RuntimeException("No Sufficient funds!");
		}
		account.setBalance(temp);
	}
	
	public void deposit(Integer id, double amount) {
		Account account = manager.findAccount(id);
		if(account==null) {
			throw new RuntimeException("Cannot deposit into non-existing account!");
		}
		double temp = account.getBalance();
		temp = temp + amount;
		account.setBalance(temp);
	}
	
	public void transfer(Integer fromAccount, Integer toAccount, Double amount) {
		try {
			withdraw(fromAccount, amount);
			deposit(toAccount,amount);
		}catch(RuntimeException ex) {
			ex.printStackTrace();
		}
	}
}
