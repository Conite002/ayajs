import{_ as e,o as t,c as s,a}from"./app.7a428255.js";const f=JSON.parse('{"title":"aya.Line(x, y, destx, desty)","description":"","frontmatter":{},"headers":[{"level":2,"title":"aya.Line(x, y, destx, desty)","slug":"aya-line-x-y-dest-x-dest-y"}],"relativePath":"entities/line.md"}'),n={name:"entities/line.md"},o=a(`<h2 id="aya-line-x-y-dest-x-dest-y" tabindex="-1">aya.Line(x, y, dest_x, dest_y) <a class="header-anchor" href="#aya-line-x-y-dest-x-dest-y" aria-hidden="true">#</a></h2><body><b>Specifications : </b> aya.Line is a method that takes foor (04) parameters as arguments like shown in this table: <table class="table_1"><thead><tr class="thead-row"><th class="empty-space"></th><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td class="type_style">number</td><td>x</td><td>The abscissa of the beginning of the line, x pixels away from the upper left corner of the browser along the horizontal </td></tr><tr><td class="type_style">number</td><td>y</td><td>The ordinate of the beginning of the line, distant by y pixel from the upper left corner of the browser along the vertical.</td></tr><tr><td class="type_style">number</td><td>dest_x</td><td>The abscissa of the end of the line, dest_x pixels away from the upper left corner of the browser along the horizontal </td></tr><tr><td class="type_style">number</td><td>dest_y</td><td>The abscissa of the end of the line, dest_y pixels away from the upper left corner of the browser along the horizontal </td></tr></tbody></table></body><p>Here is an example of how you can create a line form. <p>This kind of creation, doesn&#39;t draw immediately the corresponding form into the svg document unlike for calling the Component method of Init class.</p></p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var line = aya.Line</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">50, 150, 150, 100</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">line.draw</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),l=[o];function r(i,d,p,c,y,h){return t(),s("div",null,l)}var m=e(n,[["render",r]]);export{f as __pageData,m as default};
