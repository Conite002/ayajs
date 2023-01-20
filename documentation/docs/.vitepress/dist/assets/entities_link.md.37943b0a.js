import{_ as s,o as n,c as a,a as t}from"./app.7a428255.js";const A=JSON.parse('{"title":"aya.Link(srcpoint, destpoint, line)","description":"","frontmatter":{},"headers":[{"level":2,"title":"aya.Link(srcpoint, destpoint, line)","slug":"aya-link-src-point-dest-point-line"}],"relativePath":"entities/link.md"}'),e={name:"entities/link.md"},l=t(`<h2 id="aya-link-src-point-dest-point-line" tabindex="-1">aya.Link(src_point, dest_point, line) <a class="header-anchor" href="#aya-link-src-point-dest-point-line" aria-hidden="true">#</a></h2><body><b>Specifications : </b> aya.Link is a method that takes three (03) parameters as arguments like shown in this table: <table class="table_1"><thead><tr class="thead-row"><th class="empty-space"></th><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td class="type_style">Point</td><td>src_point</td><td>The starting point of the link.</td></tr><tr><td class="type_style">Point</td><td>dest_point</td><td>The end point of the link.</td></tr><tr><td class="type_style">Line</td><td>line</td><td>The line that represents the link.</td></tr></tbody></table></body><br> By default, aya registers every link created. The link class exists to represent the link between two components. <p>Here is an example of how you can create a link between two rectangles.</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var rec1 = aya.Component</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rectangle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, {x: 100, y: 100, width: 200, height: 100}</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    var rec2 = aya.Component</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rectangle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">, {x: 500, y: 200, width: 200, height: 100}</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    var line = aya.Line</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rec1.form.c_points</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">.x, rec1.form.c_points</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">.y, rec2.form.c_points</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">.x, rec2.form.c_points</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">.y</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">line.draw</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    var lk = aya.Link</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">rec1.form.c_points</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">, rec2.form.c_points</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">, line</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">/script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,6),o=[l];function p(r,c,i,y,D,d){return n(),a("div",null,o)}var C=s(e,[["render",p]]);export{A as __pageData,C as default};
