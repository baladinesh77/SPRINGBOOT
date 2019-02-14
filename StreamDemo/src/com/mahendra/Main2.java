package com.mahendra;

import java.util.Arrays;
import java.util.stream.IntStream;

public class Main2 {

	public static void main(String[] args) {
		int[] data = new int[] {10,33,23,54,76,188,34,90};
		Arrays.stream(data)
			.filter((x)-> x%2==0).forEach(System.out::println);
		long count = Arrays.stream(data)
						.filter((x)-> x%2==0).count();
		System.out.println("Number of EVEN numbers "+count);
		
		Arrays.stream(data)
			.map((x)->(x*x)).forEach(System.out::println);
	
		//Filter by EVEN numbers and THEN print their SQUARES
	

	}

}
