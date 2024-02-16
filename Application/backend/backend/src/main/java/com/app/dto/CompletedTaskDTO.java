package com.app.dto;

import java.time.LocalDate;

import com.app.entities.Customer;
import com.app.entities.Tasks;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CompletedTaskDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Integer completedTasksId;

	@JsonProperty(access = Access.READ_ONLY)
	private Customer customer;

	@JsonProperty(access = Access.READ_ONLY)
	private Tasks task;

	@JsonProperty(access = Access.READ_ONLY)
	private LocalDate date;
}
