(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{875:function(t,e,l){"use strict";l.r(e);var a=l(66),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h2",{attrs:{id:"primitive"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#primitive"}},[t._v("#")]),t._v(" "),l("a",{attrs:{href:"https://staven630.github.io/cesium-doc-zh/Primitive.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Primitive"),l("OutboundLink")],1)]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("名称")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("是否可选")]),t._v(" "),l("th",[t._v("描述")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("geometryInstances")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Array.<"),l("a",{attrs:{href:"https://staven630.github.io/cesium-doc-zh/GeometryInstance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeometryInstance"),l("OutboundLink")],1),t._v("> | "),l("a",{attrs:{href:"https://staven630.github.io/cesium-doc-zh/GeometryInstance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeometryInstance"),l("OutboundLink")],1)]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),l("td",[t._v("要渲染的几何实例-或单个几何实例。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("appearance")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("a",{attrs:{href:"https://staven630.github.io/cesium-doc-zh/Appearance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Appearance"),l("OutboundLink")],1)]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),l("td",[t._v("用于渲染图元的外观")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("depthFailAppearance")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("a",{attrs:{href:"https://staven630.github.io/cesium-doc-zh/Appearance.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Appearance"),l("OutboundLink")],1)]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),l("td",[t._v("在深度测试失败时，用于遮盖此图元的外观")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("show")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),l("td",[t._v("确定是否将显示此图元")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("modelMatrix")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("a",{attrs:{href:"https://staven630.github.io/cesium-doc-zh/Matrix4.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Matrix4"),l("OutboundLink")],1)]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Matrix4.IDENTITY")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),l("td",[t._v("4x4 转换矩阵，用于将 primitive（所有几何实例）从模型转换为世界坐标。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("vertexCacheOptimize")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),l("td",[t._v("如果为 true ，则为顶点着色器之前和之后的缓存优化几何顶点。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("interleave")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),l("td",[t._v("当 true 时，将交错几何图形顶点属性，这可以稍微改善渲染性能，但会增加加载时间。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("compressVertices")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),l("td",[t._v("如果为 true ，将压缩几何顶点，这将节省内存。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("releaseGeometryInstances")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),l("td",[t._v("如果为 true，则该图元不保留对输入的 geometryInstances 的引用以节省内存。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("allowPicking")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),l("td",[t._v("如果为 true ，则只能使用 Scene#pick 来拾取每个几何实例。如果 false ，则保存 GPU 内存。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("cull")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),l("td",[t._v("如果为 true ，则渲染器视锥体会根据其边界体积来剔除图元和命令。如果您手动剔除图元，请将其设置为 false 可获得较小的性能。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("asynchronous")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),l("td",[t._v("确定基元是异步创建还是阻塞直到准备就绪。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("debugShowBoundingVolume")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),l("td",[t._v("仅用于调试。确定是否显示此图元的命令的边界球体。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("shadows")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("a",{attrs:{href:"https://staven630.github.io/cesium-doc-zh/global.html#ShadowMode",target:"_blank",rel:"noopener noreferrer"}},[t._v("ShadowMode"),l("OutboundLink")],1)]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ShadowMode.DISABLED")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可选")]),t._v(" "),l("td",[t._v("确定此图元是否投射或接收来自光源的阴影。")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);