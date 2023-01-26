import{_ as t,o as e,c as a,a as s}from"./app.9c19fde2.js";const x=JSON.parse('{"title":"aya.Component(\\"triangle\\", {x1: , y1: , x2: , y2: , x3: , y3: })","description":"","frontmatter":{},"headers":[{"level":2,"title":"aya.Component(\\"triangle\\", {x1: , y1: , x2: , y2: , x3: , y3: })","slug":"aya-component-triangle-x1-y1-x2-y2-x3-y3"}],"relativePath":"components/triangle.md"}'),o={name:"components/triangle.md"},n=s(`<h2 id="aya-component-triangle-x1-y1-x2-y2-x3-y3" tabindex="-1">aya.Component(&quot;triangle&quot;, {x1: , y1: , x2: , y2: , x3: , y3: }) <a class="header-anchor" href="#aya-component-triangle-x1-y1-x2-y2-x3-y3" aria-hidden="true">#</a></h2><body><b>Specifications : </b> aya.Component is a method that takes two parameters as arguments: the type of component and the corresponding properties as object. <table class="table_1"><thead><tr class="thead-row"><th class="empty-space"></th><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td class="type_style">String</td><td>triangle</td><td>component&#39;s name</td></tr><tr><td rowspan="6" class="type_style">Object</td><td>x1</td><td>The abscissa of the first vertex of the triangle, x1 pixels away from the upper left corner of the browser along the horizontal.</td></tr><tr><td>y1</td><td>The ordinate of the first vertex of the triangle, distant by y1 pixel from the upper left corner of the browser along the vertical.</td></tr><tr><td>x2</td><td>The abscissa of the first vertex of the triangle, x2 pixels away from the upper left corner of the browser along the horizontal.</td></tr><tr><td>y2</td><td>The ordinate of the first vertex of the triangle, distant by y2 pixel from the upper left corner of the browser along the vertical.</td></tr><tr><td>x3</td><td>The abscissa of the first vertex of the triangle, x3 pixels away from the upper left corner of the browser along the horizontal.</td></tr><tr><td>y3</td><td>The ordinate of the first vertex of the triangle, distant by y3 pixel from the upper left corner of the browser along the vertical.</td></tr></tbody></table></body><p>Here is an example of how you can create a triangle component. <p>This kind of creation, draw immediately the corresponding form into the svg document unlike for calling the Triangle method of Init class.</p></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var triangle = aya.Component(&quot;triangle&quot;, </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">x1: </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y1: </span><span style="color:#F78C6C;">150</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x2: </span><span style="color:#F78C6C;">150</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y2: </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> x3: </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> y3: </span><span style="color:#F78C6C;">190</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),r=[n];function l(p,c,i,y,d,h){return e(),a("div",null,r)}var g=t(o,[["render",l]]);export{x as __pageData,g as default};
