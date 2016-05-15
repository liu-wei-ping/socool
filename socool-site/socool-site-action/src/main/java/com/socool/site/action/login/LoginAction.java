/****/
package com.socool.site.action.login;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.socool.site.biz.utils.Constants;
import com.socool.site.biz.utils.IdentifyingCodeUtil;
import com.socool.site.biz.utils.RSAUtils;
import com.socool.site.bo.userinfo.UserInfo;
import com.socool.site.bo.utils.PublicKeyPo;

/**
 * @author lwp
 * @date 2016年5月11日
 */
@Controller
@RequestMapping("login")
public class LoginAction {

	@RequestMapping(value = "/code.shtml")
	public void identifyingCode(final HttpServletRequest req, final HttpServletResponse resp) {
		try {
			IdentifyingCodeUtil.getCode(req, resp);
		} catch (final IOException var4) {
			var4.printStackTrace();
		}

	}

	/**
	 * 登录页面
	 *
	 * @return
	 */
	@RequestMapping(value = "/login.shtml")
	public ModelAndView login(final HttpSession session) {
		final ModelAndView model = new ModelAndView();
		final PublicKeyPo publicKeyMap = RSAUtils.getPublicKeyMap(true);
		final Object code = session.getAttribute(Constants.LOGIN_CODE);
		model.addObject("key", publicKeyMap);
		model.addObject("code", code);
		model.setViewName("login");
		return model;
	}

	@ResponseBody
	@RequestMapping(value = "/sign.shtml", method = RequestMethod.POST)
	public Map<String, Object> sign(@RequestBody final UserInfo userInfo, final HttpSession session,
			final HttpServletRequest request) {
		final String sessionId = session.getId();
		final Object code = session.getAttribute(Constants.LOGIN_CODE);
		boolean f = false;
		final Map<String, Object> map = new HashMap<String, Object>();
		// if (code != null &&
		// code.toString().equalsIgnoreCase(userInfo.getCode())) {
		final String pwd = RSAUtils.decryptStringByJs(userInfo.getPassword());
		System.out.println(pwd);
		f = true;
		// }
		map.put(Constants.SUCCESS, f);
		return map;
	}
}
