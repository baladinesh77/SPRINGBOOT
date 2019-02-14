package com.mahendra;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class DefaultMethodMain1 {

	public static void main(String[] args) {
		List<Integer> listNumbers = new LinkedList<Integer>();
		listNumbers.addAll(Arrays.asList
					(new Integer[]{10,22,23,90,234,134,722}));
		for(int x: listNumbers) {
			System.out.println(x);
		}
		//Using Lambda's
		listNumbers.forEach((x)->System.out.println(x));
		
		//Using Method (Function) References
		// Any method who's arguments and return type matches
		// with functional interface
		// and should be visible/accessible
		listNumbers.forEach( DefaultMethodMain1::sqr );
		listNumbers.removeIf((x)-> (x%2==0) );
	}
	
	static void sqr(Integer x) {
		System.out.println("Number : "+x+", Square: "+(x*x));
	}

}
