package com.graffitat;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class GraffitatController {

	/*@RequestMapping(value="/" , method = RequestMethod.GET)
	public ModelAndView index()
	{
		System.out.println("index");
		ModelAndView mv =new ModelAndView("redirect:/app/index.html");
		return mv;
	}
	
	@RequestMapping(value="/home")
    public String home() {
        return "redirect:app/index.html";   
    }*/
	
}
