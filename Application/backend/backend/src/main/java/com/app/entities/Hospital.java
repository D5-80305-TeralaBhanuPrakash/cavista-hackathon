package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "hospital")
public class Hospital {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "hospitalId")
    private Integer hospitalId;
	
	@Column(name = "name",nullable=false)
	private String name;
	
	@Column(name="address",nullable=false)
	private String address;
	
	@Column(name="fees",nullable=false)
	private Double fees;
	
	@Column(name = "email",unique=true ,nullable = false)
    private String email;
    
    @Column(name="password",nullable=false)
    private String password;

    @Column(name = "phoneNumber", nullable = false)
    private String phoneNumber;

}
