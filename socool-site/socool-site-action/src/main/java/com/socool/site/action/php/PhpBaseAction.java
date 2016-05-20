/****/
package com.socool.site.action.php;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author liuwp
 * @date 2016年5月20日
 */
@Controller
@RequestMapping("php-info")
public class PhpBaseAction {
	/**
	 * PHP 基本知识
	 * 
	 * @return
	 */
	@RequestMapping(value = "/base.html")
	public ModelAndView phpBaseInfo() {
		final ModelAndView model = new ModelAndView();
		model.setViewName("php/php_base");
		return model;
	}
}
