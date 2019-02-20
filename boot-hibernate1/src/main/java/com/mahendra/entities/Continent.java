package com.mahendra.entities;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="continents")
public class Continent {
	
	@Id 
	private Integer id;
	
	@Column(name="name",length=20)
	private String name;
	
	//@OneToMany(mappedBy="continent")
	//private List<Country> countries;

	public Continent(Integer id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Continent() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Continent [id=" + id + ", name=" + name + "]";
	}
	
	

}
