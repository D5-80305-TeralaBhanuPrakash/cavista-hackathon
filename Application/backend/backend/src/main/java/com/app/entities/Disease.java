package com.app.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "disease")
public class Disease {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "diseaseId")
    private Integer diseaseId;

    @Column(name = "name", nullable = false)
    private String name;
    
    @ManyToMany
    @JoinTable(name="users_diseases", joinColumns = @JoinColumn(name="customer_id",nullable=false),inverseJoinColumns = @JoinColumn(name="disease_id",nullable= false))
    private Set<Customer> customers = new HashSet<>();
}
