package com.graffitat;

import java.security.Principal;
import java.util.List;

import org.json.simple.JSONObject;
import org.junit.Test;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.graffitat.user.User;
import com.graffitat.user.UserDAO;

@RestController
public class GraffitatRestController {

	@Autowired
	UserDAO userdao;
	
	@RequestMapping(value = "/signup" , method = RequestMethod.POST)
	public ResponseEntity<String> addUser(@RequestBody JSONObject data, Principal p) {
		System.out.println(data);

		JSONObject json = new JSONObject();
		
		List<User> listuser = userdao.listUser();

		boolean usermatch = false;

		for (User u : listuser) {
			if (u.getEmail().equals(data.get("Email").toString() )) {
				usermatch = true;
				break;
			}
		}
		if (usermatch == false) {
			User u = new User();
			
			u.setLocation(data.get("Location").toString());
			u.setDob(data.get("Date").toString());
			u.setEmail(data.get("Email").toString());
			u.setEnabled(true);
			u.setGender(data.get("Gender").toString());
			u.setPassword(data.get("Password").toString());
			u.setPhone(data.get("Phone").toString());
			u.setRole("ROLE_USER");
			u.setUsername(data.get("Username").toString());
	
			/*MyTests m = new MyTests();
			
			m.u = u;*/
			
			/*Result result = JUnitCore.runClasses(MyTests.class);
			
		    for (Failure failure : result.getFailures()) {
		    	System.out.println(failure.toString());
		    }
				
		    System.out.println(result.wasSuccessful());
			
		    if( result.wasSuccessful() )*/
		    {
		    	userdao.addUser(u);
		    	json.put("msg", "User Added Successfully");
		    }
		    /*else
		    {
		    	json.put("msg", "Error Adding User");
		    }*/
			
			
			
		} else {
			json.put("msg", "User Already Exists");
		}
		
		return new ResponseEntity<String>(json.toString(), HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/login" , method = RequestMethod.POST)
	public ResponseEntity<String> login(@RequestBody JSONObject data, Principal p) {
		System.out.println(data);

		JSONObject json = new JSONObject();
		
		User listuser = userdao.getUserByEmail(data.get("Email").toString());

		if( listuser == null )
			json.put("msg", "User Login Failed");
		else
		{
			if( listuser.getPassword().equals(data.get("Password").toString()) )
				json.put("msg", "User Login Successful");
			else
				json.put("msg", "User Login Failed");
		}	
		
		return new ResponseEntity<String>(json.toString(), HttpStatus.CREATED);
	}
	
}
