/****/
package com.socool.site.action.java;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.socool.site.action.BaseAction;
import com.socool.site.biz.testinfo.IInterviewTestBiz;
import com.socool.site.biz.utils.Constants;
import com.socool.site.bo.testinfo.TestInfoBo;

/**
 * @author liuwp
 * @date 2016年5月20日
 */
@Controller
@RequestMapping("java-info")
public class JavaBaseAction extends BaseAction {
	@Autowired
	private IInterviewTestBiz iInterviewTestBiz;

	/**
	 * PHP 基本知识
	 *
	 * @return
	 */
	@RequestMapping(value = "/base.html")
	public ModelAndView javaBaseInfo() {
		final ModelAndView model = new ModelAndView();
		final List<TestInfoBo> list = iInterviewTestBiz.queryInterview();
		model.addObject("testInfo", list);
		model.setViewName(getViewUrl("base"));
		return model;
	}

	@Override
	protected String getType() {
		return Constants.TYPE_JAVA;
	}

}
