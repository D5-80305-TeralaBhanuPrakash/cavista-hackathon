package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
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
@Table(name = "health_info")
public class HealthInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "healthInfoId")
	private Integer healthInfoId;
	@Column(name = "bloodGroup")
	private String bloodGroup;

	@Column(name = "bloodPressure")
	private Integer bloodPressure;
	@Column(name = "height")
	private float height;
	@Column(name = "weight")
	private float weight;
	@Column(name = "inheritedDisease")
	private String inheritedDisease;
	@Column(name = "hb")
	private Integer hb;

	@OneToOne
	@JoinColumn(name = "customerId")
	@MapsId
	private Customer customer;
}
