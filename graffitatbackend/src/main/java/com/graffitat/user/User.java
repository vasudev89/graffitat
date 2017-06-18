package com.graffitat.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;

@Entity
@Table(name="UserDetails")
public class User {
	
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	private long userId;
	@NotEmpty(message="This field cannnot be empty")
	private String username;	
	@Length(max= 20, min=8, message="Password should be between 8 to 20 characters")
	private String password;
	@Transient
	private String cpassword;
	@NotEmpty(message="This field cannnot be empty")
	private String email;
	private String location;
	@Length(max= 10, min=10, message="Phone number is not valid. Should be lenght 10")
	private String phone;
	private String dob;
	private String gender;
	private boolean enabled=true;
	private String role="ROLE_USER";
	
	
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
	
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public boolean isEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", password=" + password + ", cpassword="
				+ cpassword + ", email=" + email + ", location=" + location + ", phone=" + phone + ", dob=" + dob + ", gender="
				+ gender + ", enabled=" + enabled + ", role=" + role + "]";
	}
}