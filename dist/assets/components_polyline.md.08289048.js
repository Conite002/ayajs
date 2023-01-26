import{_ as s,o as n,c as a,a as o}from"./app.9c19fde2.js";const D=JSON.parse('{"title":"aya.Component(\\"polyline\\", {points: []})","description":"","frontmatter":{},"headers":[{"level":2,"title":"aya.Component(\\"polyline\\", {points: []})","slug":"aya-component-polyline-points"}],"relativePath":"components/polyline.md"}'),t={name:"components/polyline.md"},e=o(`<h2 id="aya-component-polyline-points" tabindex="-1">aya.Component(&quot;polyline&quot;, {points: []}) <a class="header-anchor" href="#aya-component-polyline-points" aria-hidden="true">#</a></h2><body><b>Specifications : </b> aya.Component is a method that takes two parameters as arguments: the type of component and the corresponding properties as object. <table class="table_1"><thead><tr class="thead-row"><th class="empty-space"></th><th>Argument</th><th>Description</th></tr></thead><tbody><tr><td class="type_style">String</td><td>polyline</td><td>Component&#39;s type</td></tr><tr><td rowspan="1" class="type_style">Object</td><td>points</td><td> An array of successive abscissa, ordinate pairs. </td></tr></tbody></table></body><p>Here is an example of how you can create a polyline component. <p>This kind of creation, draw immediately the corresponding form into the svg document unlike for calling the Polyline method of Init class.</p></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    var polyline = aya.Component(&quot;polyline&quot;, </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">points: [</span><span style="color:#F78C6C;">130</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">234</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">349</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">211</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">293</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),p=[e];function l(r,c,i,y,d,C){return n(),a("div",null,p)}var m=s(t,[["render",l]]);export{D as __pageData,m as default};
