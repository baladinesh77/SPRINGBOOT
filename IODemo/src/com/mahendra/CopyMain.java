package com.mahendra;

public class CopyMain {

	public static void main(String[] args) {
		FileCopy copy = new FileCopy("c:\\users\\mahen\\desktop\\IO-1.png", 
				"c:\\users\\mahen\\desktop\\IO-2.png");
		new Thread(copy).start();
		
	}

}
