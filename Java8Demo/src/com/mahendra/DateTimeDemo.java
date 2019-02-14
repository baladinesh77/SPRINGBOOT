package com.mahendra;

import java.text.DateFormat;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

public class DateTimeDemo {

	public static void main(String[] args) {
		LocalDate date = LocalDate.now();
		System.out.println(date);
		
		LocalDate date2 = date.minusDays(1);
		LocalDate date3 = date.plusYears(5);
		System.out.println("Yesterday was: "+date2);
		System.out.println("5 Years from now: "+date3);
		
		LocalTime time = LocalTime.now();
		LocalTime time2 = time.plusMinutes(5);
		System.out.println("Now: "+time);
		System.out.println("After 5 Minutes: "+time2);
		
		LocalDate date4 = LocalDate.of(1947, 8, 15);
		
		DateFormat df = DateFormat.getDateInstance(DateFormat.SHORT);
		String str ="03-15-1984";
		Date dt = df.parse(str);
		
	}

}
