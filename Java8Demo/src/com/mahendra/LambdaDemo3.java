package com.mahendra;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class LambdaDemo3 {

	public static void main(String[] args) {
		Product[] products = new Product[10];
		products[0] = new Product(101, "Product1",5699.1F);
		products[1] = new Product(105, "Abcd",699.1F);
		products[2] = new Product(103, "Xyyz",59.1F);
		products[3] = new Product(111, "Xzssdf",299.1F);
		products[4] = new Product(108, "Qzzzz",59.7F);
		products[5] = new Product(109, "Dxxxxxx",19.0F);
		products[6] = new Product(110, "Okkkkkk",9.0F);
		products[7] = new Product(113, "Tggggg",26.0F);
		products[8] = new Product(178, "Fttttt",122.1F);
		products[9] = new Product(167, "Hhhhhjh",519.1F);
		
		System.out.println("Sorting by ID");
		Arrays.sort(products,(p1,p2)->{return p1.getId()-p2.getId();});
		for(Product p: products) {
			System.out.println(p.getId()+" "+p.getName()+" "+p.getPrice());
		}
		
		System.out.println("Sorting by Name");
		Arrays.sort(products,(p1,p2)->{return p1.getName().compareTo(p2.getName());});
		for(Product p: products) {
			System.out.println(p.getId()+" "+p.getName()+" "+p.getPrice());
		}
		
		List<Product> list = Arrays.asList(products);
		Collections.sort(list,(s1,s2)->{return (int)(s1.getPrice()-s2.getPrice());});
		for(Product p: list) {
			System.out.println(p.getPrice());
		}
		
	}

}
