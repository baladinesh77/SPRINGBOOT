package collections;

public class Account implements Comparable<Account>{
	private String accNo;
	private String customer;
	private double balance;
	@Override
	public int compareTo(Account target) {		
		return this.accNo.compareTo(target.accNo);
	}
	public String getAccNo() {
		return accNo;
	}
	public void setAccNo(String accNo) {
		this.accNo = accNo;
	}
	public String getCustomer() {
		return customer;
	}
	public void setCustomer(String customer) {
		this.customer = customer;
	}
	public Double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public Account(String accNo, String customer, double balance) {
		super();
		this.accNo = accNo;
		this.customer = customer;
		this.balance = balance;
	}
	public Account() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
