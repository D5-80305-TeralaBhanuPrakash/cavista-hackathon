package com.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class HospitalDTO {
	@JsonProperty(access = Access.READ_ONLY)
private Integer hospitalId;
	
	
	private String name;
	
	
	private String address;
	
	
	private Double fees;
	
	
    private String email;
    
    @JsonProperty(access = Access.READ_ONLY)
    private String password;

    
    private String phoneNumber;
}
