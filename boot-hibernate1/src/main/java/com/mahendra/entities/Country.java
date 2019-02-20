package com.mahendra.entities;

import javax.persistence.*;

@Entity
@Table(name="countries")
public class Country {

	@Id 
	@GeneratedValue
	private Integer id;
	@Column(name="name",length=25)
	private String name;
	@Column(name="c_city",length=20)
	private String capital;

	@ManyToOne
	private Continent continent;
	/*
	 * @Column(name="continent",length=15) 
	 * private String continent;
	 */
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
	public String getCapital() {
		return capital;
	}
	public void setCapital(String capital) {
		this.capital = capital;
	}

	public Continent getContinent() {
		return continent;
	}
	public void setContinent(Continent continent) {
		this.continent = continent;
	}
	public Country() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Country(String name, String capital, Continent continent) {
		super();
		this.name = name;
		this.capital = capital;
		this.continent = continent;
	}
	
	
}
