package thread5;

import java.util.concurrent.Callable;

public class Factorial implements Callable<Long> {

	private int number;
	
	
	public Factorial(int number) {
		super();
		this.number = number;
	}

	@Override
	public Long call() throws Exception {
		long fact = 1;
		int n = number;
		while(n>0) {
			fact = fact * n;
			n--;
		}
		return fact;
	}

}
