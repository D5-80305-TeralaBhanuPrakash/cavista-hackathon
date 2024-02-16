package com.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class DiseaseDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Integer diseaseId;
	private String name;
}
