/**
 * 
 */
package com.socool.site.biz.filter;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.Random;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author liu_weiping
 * @since 下午7:46:46
 */
public class InitUrlPathFilter implements Filter {
	 public static final String ALLCHAR = "??》?>>";
//	 public static final String ALLCHAR = "?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	private static final String LOGIN_PATH="cool.html";

	/* （非 Javadoc）
	 * @see javax.servlet.Filter#destroy()
	 */
	public void destroy() {
		// TODO 自动生成的方法存根

	}

	/* （非 Javadoc）
	 * @see javax.servlet.Filter#doFilter(javax.servlet.ServletRequest, javax.servlet.ServletResponse, javax.servlet.FilterChain)
	 */
	public void doFilter(final ServletRequest arg0, final ServletResponse arg1,
			final FilterChain arg2) throws IOException, ServletException {
		final HttpServletRequest request=(HttpServletRequest)arg0;
		final HttpServletResponse response=(HttpServletResponse)arg1;
	final String random=URLEncoder.encode(URLEncoder.encode(generateString(), "UTF-8"),"UTF-8");
	final String loginUrl=request.getRequestURL().append(LOGIN_PATH).append("?r="+random).toString();
	response.sendRedirect(loginUrl);
	return;

	}
	private String generateString(){
		final StringBuffer buffer=new StringBuffer();
		final Random random=new Random();
		for (int i = 0; i < random.nextInt(5)+2; i++) {
			buffer.append(ALLCHAR.charAt(random.nextInt(ALLCHAR.length())));  
		}
		buffer.append(String.valueOf(Math.random()));
		return buffer.toString().toLowerCase();
	}
	/* （非 Javadoc）
	 * @see javax.servlet.Filter#init(javax.servlet.FilterConfig)
	 */
	public void init(final FilterConfig arg0) throws ServletException {
		// TODO 自动生成的方法存根

	}

}
