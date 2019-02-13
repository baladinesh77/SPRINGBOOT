package com.mahendra;

import java.io.*;
import java.util.LinkedList;
import java.util.List;

public class DataManager {

	public static List<Employee> load(String filename){
		List<Employee> emps = new LinkedList<Employee>();
		try(BufferedReader br = new BufferedReader(new FileReader(filename))){
			String line = br.readLine();
			while(line!=null) {
				Employee e = DataManager.toObject(line);
				line = br.readLine();
			}
		}catch(IOException ex) {
			System.out.println(ex.getMessage());
		}
		return emps;
	}
	public static void save(String filename, List<Employee> emps) {
		//Open BufferedWriter for given file
		//For EACH e IN emps
		//Convert e into String using "toString"
		//And Write it to BufferedWriter
		
	}
	
	private static Employee toObject(String line) {
		String[] fields = line.split(",");
		int empId = Integer.parseInt(fields[0].trim());
		String name = fields[1].trim();
		String design = fields[2].trim();
		double salary = Double.parseDouble(fields[3].trim());
		return new Employee(empId, name, design, salary);
	}
	private static String toString(Employee emp) {
		StringBuilder sb = new StringBuilder();
		sb.append(emp.getEmpId())
			.append(", ")
			.append(emp.getName())
			.append(", ")
			.append(emp.getDesignation())
			.append(", ")
			.append(emp.getSalary())
			.append("\n");
		return sb.toString();
	}
}
