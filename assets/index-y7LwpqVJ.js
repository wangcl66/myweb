import{d as n,c as l,m as p,o as t}from"./index-D4hMjHsO.js";const e={class:"markdown-container"},i={},o="",j=n({__name:"index",setup(c,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(r,s)=>(t(),l("div",e,s[0]||(s[0]=[p(`<div class="table-of-contents"><ul><li><a href="#%E6%89%81%E5%B9%B3%E6%95%B0%E7%BB%84%E8%BD%AC%E4%B8%BA%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84">扁平数组转为树形结构 </a></li><li><a href="#%E4%BB%8E%E6%A0%91%E5%BD%A2%E6%95%B0%E6%8D%AE%E4%B8%AD%E6%9F%A5%E8%AF%A2">从树形数据中查询 </a></li></ul></div><h1>JVASCRIPT 工具函数</h1><h2 id="%E6%89%81%E5%B9%B3%E6%95%B0%E7%BB%84%E8%BD%AC%E4%B8%BA%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84" tabindex="-1">扁平数组转为树形结构 <a class="header-anchor" href="#%E6%89%81%E5%B9%B3%E6%95%B0%E7%BB%84%E8%BD%AC%E4%B8%BA%E6%A0%91%E5%BD%A2%E7%BB%93%E6%9E%84" aria-hidden="true">#</a></h2><pre class="hljs"><code class="language-typescript"><span class="hljs-keyword">interface</span> <span class="hljs-title class_">INode</span> {
    <span class="hljs-attr">id</span>: <span class="hljs-built_in">string</span>
    <span class="hljs-attr">pid</span>: <span class="hljs-built_in">string</span>
    <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>
    <span class="hljs-attr">children</span>?: <span class="hljs-title class_">INode</span>[]
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatTree</span> = (<span class="hljs-params"><span class="hljs-attr">data</span>: <span class="hljs-title class_">INode</span>[]</span>) =&gt; {
    <span class="hljs-keyword">const</span> <span class="hljs-attr">result</span>: <span class="hljs-title class_">INode</span>[] = []
    <span class="hljs-keyword">const</span> <span class="hljs-attr">map</span>: {
        [<span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span>]: <span class="hljs-title class_">INode</span>
    } = {}
    data.<span class="hljs-title function_">forEach</span>(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> { map[item.<span class="hljs-property">id</span>] = item })
    data.<span class="hljs-title function_">forEach</span>(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {
        <span class="hljs-keyword">const</span> parent = map[item.<span class="hljs-property">pid</span>] <span class="hljs-comment">// 找到父节点</span>
        <span class="hljs-keyword">if</span> (parent) {
            <span class="hljs-comment">// 父节点json没有children属性，则创建一个children数组</span>
            parent.<span class="hljs-property">children</span> = parent.<span class="hljs-property">children</span> ? parent.<span class="hljs-property">children</span> : [] 
            <span class="hljs-comment">// 把当前遍历的节点放到 父节点中</span>
            parent.<span class="hljs-property">children</span>.<span class="hljs-title function_">unshift</span>(item);

            <span class="hljs-comment">// (parent.children || (parent.children = [])).unshift(item) // 上面两行代码的合并写法</span>
        } <span class="hljs-keyword">else</span> {
            result.<span class="hljs-title function_">unshift</span>(item) <span class="hljs-comment">// 在数组开头插入</span>
        }
    })
    <span class="hljs-keyword">return</span> result
}
</code></pre><h2 id="%E4%BB%8E%E6%A0%91%E5%BD%A2%E6%95%B0%E6%8D%AE%E4%B8%AD%E6%9F%A5%E8%AF%A2" tabindex="-1">从树形数据中查询 <a class="header-anchor" href="#%E4%BB%8E%E6%A0%91%E5%BD%A2%E6%95%B0%E6%8D%AE%E4%B8%AD%E6%9F%A5%E8%AF%A2" aria-hidden="true">#</a></h2><pre class="hljs"><code class="language-typescript"><span class="hljs-keyword">interface</span> <span class="hljs-title class_">INode</span> {
    <span class="hljs-attr">id</span>: <span class="hljs-built_in">string</span>
    <span class="hljs-attr">pid</span>: <span class="hljs-built_in">string</span>
    <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>
    <span class="hljs-attr">children</span>?: <span class="hljs-title class_">INode</span>[]
}
<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-title function_">filterTreeList</span> = (<span class="hljs-params"><span class="hljs-attr">treeList</span>: <span class="hljs-title class_">INode</span>[], <span class="hljs-attr">filterText</span>: <span class="hljs-built_in">string</span></span>) =&gt; {
    <span class="hljs-keyword">return</span> treeList.<span class="hljs-title function_">reduce</span>(<span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">result</span>: <span class="hljs-title class_">INode</span>[], cur</span>) =&gt;</span> {
        <span class="hljs-keyword">if</span>(cur.<span class="hljs-property">children</span> &amp;&amp; cur.<span class="hljs-property">children</span>.<span class="hljs-property">length</span> &gt; <span class="hljs-number">0</span>) {
            <span class="hljs-keyword">const</span> children = <span class="hljs-title function_">filterTreeList</span>(cur.<span class="hljs-property">children</span>, filterText)
            <span class="hljs-comment">// 子节点 有数据时  把符合条配件的子节点过滤出来</span>
            <span class="hljs-keyword">if</span>(children.<span class="hljs-property">length</span> &gt; <span class="hljs-number">0</span>){
                result.<span class="hljs-title function_">push</span>({
                    ...cur,
                    children
                })
                <span class="hljs-keyword">return</span> result
            }
        }
        <span class="hljs-comment">// 子节点没符合条件的数据时，判断父节点，父节点符合的话  把改父节点的所有子节点也保留</span>
        <span class="hljs-keyword">if</span>(cur.<span class="hljs-property">name</span>.<span class="hljs-title function_">includes</span>(filterText)){
            result.<span class="hljs-title function_">push</span>(cur)
        }
        <span class="hljs-keyword">return</span> result
    }, [])
}
</code></pre>`,6)])))}});export{j as default,o as excerpt,i as frontmatter};
