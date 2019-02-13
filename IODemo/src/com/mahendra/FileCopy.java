package com.mahendra;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

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
		try {
		Files.copy(Paths.get(sourceFile),
					Paths.get(destinationFile),
					StandardCopyOption.REPLACE_EXISTING);
		}catch(IOException ex) {}
		System.out.println("File copy completed!");
	}

}
