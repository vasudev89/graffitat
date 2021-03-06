package com.graffitat.user;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
@EnableTransactionManagement
public class UserDAOImpl implements UserDAO {

	@Autowired
	SessionFactory sessionFactory;
	
	public void addUser(User user) {
		Session session = sessionFactory.getCurrentSession();
		session.save(user);
	}

	public void deleteUser(int id) {
		Session session = sessionFactory.getCurrentSession();
		session.delete(id);
	}

	public void updateUser(User user) {
		Session session = sessionFactory.getCurrentSession();
		session.update(user);		
	}

	public User getUserById(int id) {
		Session session = sessionFactory.getCurrentSession();
		User user = (User)session.createQuery("from User where userId="+id).list().get(0);	
		return user;
	}

	public List<User> listUser() {
		Session session = sessionFactory.getCurrentSession();
		List<User> list = session.createQuery("from User").list();	
		return list;
	}

	
	public User getUserByEmail(String email) {
		Session session = sessionFactory.getCurrentSession();
		
		User user = null; 
		
		try
		{
			user = (User)session.createQuery("from User where email= '"+ email + "'").list().get(0);
		}
		catch(Exception e)
		{
			user = null;
		}
			
		return user;
	}

	public List<User> getAllUserExceptMe(String email) {
		Session session = sessionFactory.getCurrentSession();
		List<User> list = session.createQuery("from User where email<>'"+ email +"'").list();	
		return list;
	}

	
	
}