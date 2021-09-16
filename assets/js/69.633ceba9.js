(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{803:function(t,a,e){"use strict";e.r(a);var n=e(66),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("  IoC 容器是 Spring 最核心的概念和内容，用于统一创建和管理依赖对象。它替代了传统的 new 方式初始化对象，通过读取在 XML 文件中配置的 Bean 定义，自动创建并管理容器的 Bean 实例及其生命周期；最重要的是可以在 Bean 的定义中进行依赖对象的配置，并根据依赖配置自动注入相关依赖，降低对象之间的耦合程度，以达到解耦的效果。")]),t._v(" "),e("p",[t._v("  在创建 Bean 之前，首先需要创建 IOC 容器。Spring 提供了 IOC 容器的两种实现方式：BeanFactory 和 ApplicationCotext。")]),t._v(" "),e("h3",{attrs:{id:"beanfactory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#beanfactory"}},[t._v("#")]),t._v(" BeanFactory")]),t._v(" "),e("p",[t._v("  BeanFactory 是 IoC 容器的基本实现，是 Spring 内部使用的接口，是面向 Spring 本身的。")]),t._v(" "),e("p",[t._v("  BeanFactory 接口有多个实现类，最常见的是 org.springframework.beans.factory.xml.XmlBeanFactory，它是根据 XML 配置文件中的定义装配 Bean 的。")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BeanFactory")]),t._v(" beanFactory "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XmlBeanFactory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FileSystemResource")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D://code//applicationContext.xml"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h3",{attrs:{id:"applicationcontext"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#applicationcontext"}},[t._v("#")]),t._v(" ApplicationContext")]),t._v(" "),e("p",[t._v("  ApplicationContext 是 Spring IoC 容器的另一个重要接口，被称为应用上下文。继承自 BeanFactory，同时也提供了一些新的高级功能：")]),t._v(" "),e("ul",[e("li",[t._v("MessageSource（国际化资源接口），用于信息的国际化显示。")]),t._v(" "),e("li",[t._v("ResourceLoader（资源加载接口），用于资源加载。")]),t._v(" "),e("li",[t._v("ApplicationEventPublisher（应用事件发布接口）等，用于应用事件的处理。")])]),t._v(" "),e("h2",{attrs:{id:"区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),e("ol",[e("li",[t._v("BeanFactory 和 ApplicationContext 位于框架不同包中，BeanFactory 位于 org.springframework.beans 包中，而 ApplicationContext 位于 org.springframework.context 包中。")]),t._v(" "),e("li",[t._v("ApplicationContext 除了继承自 BeanFactory 接口，还继承了 EnvironmentCapable、MessageSource、ApplicationEventPublisher 和 ResourcePatternResolver 等接口。")]),t._v(" "),e("li",[t._v("两者都支持 BeanPostProcessor、BeanFactoryPostProcessor 的使用，但使用方式是有差别的。BeanFactory 需要手动注册，而 ApplicationContext 还自动注册。")]),t._v(" "),e("li",[t._v("大多时候，使用 ApplicationContext 即可。如果是开发 web 项目，则使用继承自 ApplicationContext 的 WebApplicationContext，其增加了对 web 开发的相关支持，如 ServletContext、Servlet 作用域等支持。")])])])}),[],!1,null,null,null);a.default=s.exports}}]);