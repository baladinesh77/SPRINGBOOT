package com.mahendra;

import java.io.*;
import java.nio.file.Files;

public class FileCopy implements Runnable {

	private String sourceFile;
	private String destinationFile;
	
	public FileCopy(String sourceFile, String destinationFile) {
		super();
		this.sourceFile = sourceFile;
		this.destinationFile = destinationFile;
	}

	private boolean isExist(String filename) {
		File file = new File(filename);
		return file.exists();
	}

	@Override
	public void run() {

		byte[] buffer = new byte[100];
		if(!isExist(sourceFile)) {
			System.out.println("Source file doesnot exists!");
			return;
		}
		//TRY-WITH_RESOURCE since JDK7
		try(FileInputStream  in  = new FileInputStream(sourceFile)){
			try(FileOutputStream out = new FileOutputStream(destinationFile)){
				//Read first 100 bytes
				int len = in.read(buffer);
				while(len>0) {
				//Write all bytes from buffer
				//Buffer size is 100, but it may container lesser
				out.write(buffer,0,len);
				len = in.read(buffer);
				}
				out.flush();
			}catch(IOException ex1) {
				System.out.println("Error : "+ex1.getMessage());
			}
		}catch(IOException ex) {
			System.out.println("Error: "+ex.getMessage());
		}
		System.out.println("File copy completed!");
	}

}
