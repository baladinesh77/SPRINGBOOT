package com.mahendra;

import java.util.List;

public class EmpMain {

	public static void main(String[] args) {
		List<Employee> emps = DataManager.load("c:\\users\\mahen\\desktop\\data.csv");
		
		for(Employee e: emps) {
			System.out.println(e.getName()+" "+e.getDesignation());
		}
	}

}
