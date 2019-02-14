package com.mahendra;

public class Main {

	public static void main(String[] args) {
		Account acc = new Account("Rahul", 233000, new InterestCalculator() {
			
			@Override
			public double calc(double principal, float rate, int duration) {
				return principal * rate/100/12 * duration;
			}
		});
			Account acc1 = new Account("Priyanka", 233000, 
						(p,r,d)-> p * (r/100/12) * d) ;
			
			System.out.println(acc);
			System.out.println(acc1);
	}

}
