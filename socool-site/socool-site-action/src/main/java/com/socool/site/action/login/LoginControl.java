/**
 * 
 */
package com.socool.site.action.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author lwp<liuweiping@wcp.sina.com> @2016年1月16日
 *
 */
@Controller
public class LoginControl {
	/**
	 * @return
	 */
	@RequestMapping("/cool.html")
	public ModelAndView login(){
		final ModelAndView model=new ModelAndView();
		model.setViewName("cool_index");
		return model;
	}
}
