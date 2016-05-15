/****/
package com.socool.site.action.index;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * @author liuwp
 * @date 2016年5月11日
 */
@Controller
@RequestMapping("main")
public class IndexAction {
	@RequestMapping("/index.html")
	public ModelAndView index() {
		return new ModelAndView("main");
	}
}
