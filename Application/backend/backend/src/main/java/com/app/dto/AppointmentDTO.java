package com.app.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AppointmentDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Integer appointementId;

	@JsonProperty(access = Access.READ_ONLY)
	private LocalDate date;

	@JsonProperty(access = Access.READ_ONLY)
	private Integer customer;

	@JsonProperty(access = Access.READ_ONLY)
	private Integer hospital;
}
