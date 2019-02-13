package com.mahendra;

import java.util.Arrays;
import java.util.Comparator;

public class LambdaDemo2 {

	public static void main(String[] args) {
		String [] countries = new String[] {
					"India","United Kingdom","Russia","Nepal","Australia"
		};

//		Arrays.sort(countries, new Comparator<String>() {
//						public int compare(String s1, String s2) {
//							return s1.compareTo(s2);
//						}
//		});
		Arrays.sort(countries, ( s1,  s2) -> {
				return s1.compareTo(s2);
			});		
	
		System.out.println("Sorted list : ");
		for(String s: countries) {
			System.out.println(s);
		}
		
	}

}
