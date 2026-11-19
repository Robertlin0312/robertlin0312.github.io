/* 首頁作品牆：讀 works.js，依序排成整齊格線 */
(function(){
  var ROOT=document.body.dataset.root||'';
  var wall=document.querySelector('.wall'), bar=document.querySelector('.filters');
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(m){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]})}
  function render(type){
    var list=WORKS.filter(function(w){return !type||w.type===type});
    if(!list.length){wall.innerHTML='<p class="empty">作品整理中。<br>Works coming soon.</p>';return}
    wall.innerHTML=list.map(function(w,i){
      var href=w.link?ROOT+w.link:ROOT+'work/?w='+encodeURIComponent(w.slug);
      return '<a class="w" href="'+esc(href)+'">'+
        '<figure><div class="frame"><img src="'+esc(ROOT+w.cover)+'" alt="'+esc(w.title+' '+(w.en||''))+'" loading="'+(i<8?'eager':'lazy')+'"></div>'+
        '<figcaption><span>'+esc(w.title)+(w.en?'　'+esc(w.en):'')+'</span><i>'+esc(w.tag||w.year||'')+'</i></figcaption></figure></a>';
    }).join('');
    bindHover();
  }
  /* 篩選：依作品裡出現過的分類自動產生 */
  var types=[];WORKS.forEach(function(w){if(w.type&&types.indexOf(w.type)<0)types.push(w.type)});
  if(bar&&types.length>1){
    bar.innerHTML=['All'].concat(types).map(function(t){return '<button type="button" data-t="'+esc(t==='All'?'':t)+'">'+esc(t)+'</button>'}).join('');
    bar.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
      [].forEach.call(bar.children,function(x){x.setAttribute('aria-pressed',x===b)});render(b.dataset.t);window.scrollTo({top:0})});
    bar.firstChild.setAttribute('aria-pressed','true');
  }
  /* 滑鼠移到作品上，其他作品變淡；返回頁面時恢復全亮 */
  var fine=window.matchMedia('(hover:hover) and (pointer:fine)');
  function clear(){wall.classList.remove('dim');[].forEach.call(wall.querySelectorAll('.w.on'),function(w){w.classList.remove('on')})}
  function bindHover(){[].forEach.call(wall.querySelectorAll('.w'),function(w){
    w.addEventListener('pointerenter',function(e){if(e.pointerType!=='mouse'||!fine.matches)return;clear();wall.classList.add('dim');w.classList.add('on')});
    w.addEventListener('pointerleave',clear);})}
  window.addEventListener('pageshow',clear);window.addEventListener('pagehide',clear);
  document.addEventListener('visibilitychange',clear);
  render('');
})();
