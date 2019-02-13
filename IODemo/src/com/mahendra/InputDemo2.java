package com.mahendra;

import java.io.*;
import java.util.Scanner;

public class InputDemo2 {

	public static void main(String[] args)  {
//		BufferedReader reader 
//			= new BufferedReader(new InputStreamReader(System.in));
//		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter your name: ");
		String name =sc.nextLine();
		System.out.println("Hello "+name);
	}

}
