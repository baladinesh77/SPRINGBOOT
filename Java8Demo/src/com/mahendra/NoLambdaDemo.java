package com.mahendra;

import java.util.Date;

public class NoLambdaDemo {

	public static void main(String[] args) {
		Thread t = new Thread(new Runnable() {
			public void run() {
				clock();
			}
		});
		
		t.start();
	}

	private static void clock() {
		while(true) {
			System.out.println(new Date());
			try {
			Thread.sleep(1000);
			}catch(InterruptedException ex) {}
		}
	}
}
