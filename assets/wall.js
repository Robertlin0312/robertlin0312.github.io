/* 首頁作品牆：讀 works.js，自動錯落排列 */
(function(){
  var ROOT=document.body.dataset.root||'';
  var wall=document.querySelector('.wall'), bar=document.querySelector('.filters');
  /* 錯落位置：一排兩件、一排三件交錯，依序循環。
     c 起始欄（1–24）、s 寬度（幾欄）、t 往下錯開（vw）；mc/ms 是手機版（12 欄） */
  var ROWS=[
    [{c:2, s:8, t:0, mc:1,ms:10},{c:14,s:7,t:4, mc:4,ms:9}],
    [{c:1, s:6, t:3, mc:1,ms:8},{c:9, s:6,t:0, mc:5,ms:8},{c:17,s:7,t:5, mc:1,ms:9}],
    [{c:4, s:7, t:1, mc:3,ms:10},{c:15,s:8,t:0, mc:1,ms:10}],
    [{c:2, s:5, t:0, mc:1,ms:9},{c:10,s:6,t:4, mc:4,ms:9},{c:18,s:6,t:1, mc:2,ms:8}]
  ];
  function slot(i){var n=0,r=0;for(;;){var row=ROWS[r%ROWS.length];if(i<n+row.length)return{p:row[i-n],row:r+1};n+=row.length;r++}}
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(m){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]})}
  function render(type){
    var list=WORKS.filter(function(w){return !type||w.type===type});
    if(!list.length){wall.innerHTML='<p class="empty">作品整理中。<br>Works coming soon.</p>';return}
    wall.innerHTML=list.map(function(w,i){
      var href=w.link?ROOT+w.link:ROOT+'work/?w='+encodeURIComponent(w.slug);
      var q=slot(i), p=q.p, row=q.row;
      return '<a class="w" href="'+esc(href)+'" style="--c:'+p.c+';--s:'+p.s+';--r:'+row+';--t:'+p.t+'vw;--mc:'+p.mc+';--ms:'+p.ms+'">'+
        '<figure><img src="'+esc(ROOT+w.cover)+'" alt="'+esc(w.title+' '+(w.en||''))+'" loading="'+(i<6?'eager':'lazy')+'">'+
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
