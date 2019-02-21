package com.mahendra;

import com.datastax.driver.core.*;
import com.datastax.driver.core.Cluster.Builder;

public class Main {

	public static void main(String[] args) {
		/*
		 * Builder builder = new Builder(); 
		 * builder.addContactPoint("localhost");
		 * builder.withClusterName("Test cluster");
		 * Cluster cluster = builder.build();
		 */
		
		Cluster cluster = new Builder()
					.addContactPoint("localhost")
					.withClusterName("Test cluster")
					.build();
		
		Session session = cluster.connect("space1");
		ResultSet rs = session.execute
					("select * from product");
		rs.forEach(System.out::println);
		session.close();
		cluster.close();
	}

}
