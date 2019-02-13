package com.mahendra;

import java.util.Date;

public class LambdaDemo {

	public static void main(String[] args) {
		Thread t = new Thread(()-> clock() );
		// 1. Find the argument type:  Runnable
		//	1.a If argument type is not a functional interface raise an error
		//	1.b if argument type is functional interface
		//       Java RT creates an Anonymous class with the ONLY one method
		//		Evaluate the expression
		//      (ARGs) -> {Method body}
		t.start();
	}
	
	private static void show(String str) {}

	private static void clock() {
		while(true) {
			System.out.println(new Date());
			try {
			Thread.sleep(1000);
			}catch(InterruptedException ex) {}
		}
	}
}
