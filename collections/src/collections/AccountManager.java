package collections;

import java.util.*;

public class AccountManager {

	Map<Integer,Account> accounts = new HashMap<>();
	
	public void addNew(Account account,Integer id) {
		accounts.put(id,account);
	}
	
	public Account findAccount(Integer id) {
		return accounts.get(id);
	}
	
}
