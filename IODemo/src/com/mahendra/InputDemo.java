package com.mahendra;

import java.io.IOException;

public class InputDemo {

	public static void main(String[] args) throws IOException {
		byte[] data = new byte[10];
		//Read few bytes from INPUT STREAM
		int length = System.in.read(data);
		//Includes 2 Bytes for LINE-BREAK
		System.out.println("You have entered "+length+" bytes");
		//Convert all bytes read into String
		String str = new String(data,0,length);
		System.out.println("You entered: "+str);
		
	}

}
