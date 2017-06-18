package com.graffitat;

import org.junit.Test;
import junit.framework.Assert;
import com.graffitat.user.User;

public class MyTests {

	User u;
	
    @Test
    public void TestUser() {
        
        // assert statements
        Assert.assertNull("username is null", u.getUsername());
        Assert.assertEquals("DOB is empty", "", u.getDob());
        
    }

	public MyTests() {
		super();
	}
    
    
}