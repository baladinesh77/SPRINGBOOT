package com.mahendra;

import java.util.function.BinaryOperator;

public class Main4 {

	public static void main(String[] args) {
		int n1= 100;
		int n2= 109;
		
		BinaryOperator<Integer> operator= (x,y)-> {return (x>y)?x:y ;} ;
		int x = operator.apply(n1, n2);
		
		System.out.println("Bigger is "+x);
	}

}
