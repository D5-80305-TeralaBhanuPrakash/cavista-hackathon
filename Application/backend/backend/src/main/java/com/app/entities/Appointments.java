package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "appointments")
public class Appointments {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "appointementId")
    private Integer appointementId;
	
	@Column(name = "date", nullable = false)
    private LocalDate date;
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customerId",nullable=false)
	private Customer customer;
	
	@ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "hospitalId",nullable=false)
	private Hospital hospital;

}
