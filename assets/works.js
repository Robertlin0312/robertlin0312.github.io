/* ============================================================
   作品資料：網站上所有作品都從這裡來。
   新增作品：
   1. 在 works/ 裡建一個資料夾（例如 works/nuwa/），放封面和內頁圖片
   2. 在下面 WORKS 清單最前面加一筆（越前面越先顯示）
   3. Commit → Push，網站就會更新

   欄位說明：
   slug    網址代號，只用小寫英文、數字、- （例如 nuwa-2026）
   title   中文標題        en    英文標題
   year    年份            type  分類：Graphic / Print / Motion / Stage / Tools（用來篩選）
   tag     滑鼠移上去時右邊的小字
   cover   封面圖路徑（直式、橫式都可以，原比例顯示）
   link    （選填）點封面直接跳到這個網址，不開作品內頁
   tool    （選填）工具網址：作品內頁會出現「開啟工具」按鈕
   client  （選填）委託單位   role（選填）擔任工作
   text    （選填）介紹文字，一段一個字串
   images  （選填）內頁圖片，每張可以設：
           src 路徑、caption 圖說、c 起始欄（1–24）、s 寬度（幾欄）
           不設 c / s 就是置中大圖；video 欄位可放 YouTube／Vimeo 嵌入網址
           mp4 欄位放影片檔路徑：自動靜音循環播放（poster 是載入前顯示的圖）
   coverVideo（選填）首頁封面改成循環播放的影片（mp4 路徑）
   scale   （選填）首頁封面縮放比例，例如 0.5 是一半大小
   ============================================================ */

window.WORKS = [

  /* ---- 平面作品（標題、年份、說明之後再補）---- */
  { slug: "equal", title: "Approximately Equal", en: "", year: "", type: "Motion", tag: "動態",
    cover: "works/equal/cover.jpg", coverVideo: "works/equal/equal.mp4", scale: 0.5,
    images: [ { mp4: "works/equal/equal.mp4", poster: "works/equal/cover.jpg", c: 10, s: 5 } ] },
  { slug: "collage-01", title: "拼貼 01", en: "Collage 01", year: "", type: "Graphic", tag: "拼貼",
    cover: "works/collage-01/cover.jpg",
    images: [
      { src: "works/collage-01/cover.jpg", c: 7, s: 12 },
      { src: "works/collage-01/s01.jpg", c: 2,  s: 10 },
      { src: "works/collage-01/s02.jpg", c: 14, s: 10 },
      { src: "works/collage-01/s03.jpg", c: 2,  s: 10 },
      { src: "works/collage-01/s04.jpg", c: 14, s: 10 },
      { src: "works/collage-01/s05.jpg", c: 2,  s: 10 },
      { src: "works/collage-01/s06.jpg", c: 14, s: 10 }
    ] },
  { slug: "ghost-ahbk", title: "AHBK", en: "Ghost", year: "", type: "Graphic", tag: "插畫",
    cover: "works/ghost-ahbk/cover.jpg",
    images: [ { src: "works/ghost-ahbk/cover.jpg", c: 7, s: 12 } ] },
  { slug: "spon-ct", title: "SPON CT", en: "", year: "", type: "Graphic", tag: "海報",
    cover: "works/spon-ct/cover.jpg",
    images: [ { src: "works/spon-ct/cover.jpg" } ] },
  { slug: "w447", title: "447", en: "", year: "", type: "Graphic", tag: "平面",
    cover: "works/w447/cover.jpg",
    images: [ { src: "works/w447/cover.jpg", c: 3, s: 20 } ] },
  { slug: "w222", title: "222", en: "", year: "", type: "Graphic", tag: "平面",
    cover: "works/w222/cover.jpg",
    images: [ { src: "works/w222/cover.jpg", c: 4, s: 18 } ] },

  /* ---- 範例（刪掉最前面的 // 就會出現）----
  {
    slug: "nuwa-2026", title: "女媧補天", en: "Nüwa Mends the Sky",
    year: 2026, type: "Stage", tag: "主視覺 × 投影",
    cover: "works/nuwa-2026/cover.jpg",
    client: "臺北木偶劇團", role: "主視覺、投影設計",
    text: ["第一段介紹。", "English description."],
    images: [
      { src: "works/nuwa-2026/01.jpg", caption: "主視覺" },
      { src: "works/nuwa-2026/02.jpg", c: 2, s: 10 },
      { src: "works/nuwa-2026/03.jpg", c: 14, s: 9 },
      { video: "https://player.vimeo.com/video/000000000" }
    ]
  },
  ---------------------------------------- */

  /* ---- 視覺實驗工具（連到 Tools 網站）---- */
  { slug: "ci-ge", title: "磁格", en: "Magnet Grid", year: 2026, type: "Tools", tag: "網格 × 磁力",
    cover: "roubert-tools/covers/ci-ge.jpg", tool: "roubert-tools/ci-ge/",
    text: ["把底圖切成網格，用游標當磁鐵推開或吸聚格線，底圖、交點、文字和拼貼縮圖都會跟著變形。可以定格畫面、拖曳排版，再輸出圖片。", "Magnet Grid slices an image into a grid and turns the cursor into a magnet that pushes or pulls the gridlines. The image, intersections, type and collage thumbnails all warp along with it; freeze a moment, rearrange, and export."],
    images: [ { src: "roubert-tools/covers/ci-ge.jpg", c: 7, s: 12 } ] },
  { slug: "slice-collage-lab", title: "切片拼貼", en: "Slice Collage Lab", year: 2026, type: "Tools", tag: "切 / 拼",
    cover: "roubert-tools/covers/slice-collage-lab.jpg", tool: "roubert-tools/slice-collage-lab/",
    text: ["從畫面中取出切片，像蓋章一樣畫回畫布。切片可以換遮罩形狀、轉向拖曳的方向、拉長或拉絲，也能整齊排成格狀，再套上 Riso 螢光油墨的顏色。可輸出 PNG、SVG，以及每片切片一個圖層的 PSD 檔。", "Sample slices from an image and stamp them back onto the canvas — masked, turned to follow the stroke, stretched or smeared, or set into a grid, then coloured with Riso-like fluorescent inks. Exports PNG, SVG and layered PSD."],
    images: [ { src: "roubert-tools/covers/slice-collage-lab.jpg", c: 7, s: 12 } ] },
  { slug: "nie-kan-kan", title: "捏看看", en: "Face Warp", year: 2026, type: "Tools", tag: "變形",
    cover: "roubert-tools/covers/nie-kan-kan.jpg", tool: "roubert-tools/nie-kan-kan/",
    text: ["上傳一張臉，用推移、拉尖、鼓起、旋渦等筆刷捏出新的五官；也可以把臉切成格子錯位、像隔著壓花玻璃看，或沿著頭部長出髮型。把每個階段記錄下來，就能播放成變形動畫並錄影。", "Upload a face and reshape it with push, pinch, bulge and swirl brushes; split it into shifting grids, view it through ribbed glass, or grow hair along the head. Record each stage to play it back as a morphing animation."],
    images: [ { src: "roubert-tools/covers/nie-kan-kan.jpg", c: 7, s: 12 } ] },
  // 暫時下架（還不成熟）：要放回來，把下面兩行開頭的 // 刪掉
  // { slug: "zhuo-zi", title: "灼字", en: "Burnt Glyph", year: 2026, type: "Tools", tag: "熱像 × 字形",
  //   cover: "roubert-tools/covers/zhuo-zi.jpg", link: "roubert-tools/zhuo-zi/" },
  { slug: "isolate", title: "線稿隔離器", en: "Isolate", year: 2026, type: "Tools", tag: "線稿",
    cover: "roubert-tools/covers/isolate.jpg", tool: "roubert-tools/isolate/",
    text: ["從一筆塗鴉開始。ISOLATE 會把每一道筆畫變成乾淨的描邊線條，再讓你往下推：萬花筒對稱、流體扭曲、隔離格線與碎裂的片段。可以分圖層作畫、擦除、單獨調整線條，或交給隨機。", "Start with a scribble. ISOLATE turns every stroke into clean outlined ink, then lets you push it further: kaleidoscope symmetry, fluid warps, isolation grids and shattered fragments. Work in layers, erase, reshape single lines, or let Randomize take over."],
    images: [ { src: "roubert-tools/covers/isolate.jpg", c: 7, s: 12 } ] },
  { slug: "zi-dao", title: "字島", en: "Glyph Island", year: 2026, type: "Tools", tag: "文字繞島",
    cover: "roubert-tools/covers/zi-dao.jpg", tool: "roubert-tools/zi-dao/",
    text: ["畫一座島，讓一串文字首尾相接、剛好繞它一圈，字號會依輪廓的周長即時反推。可以手繪或隨機產生島嶼、開啟多島模式、讓文字沿著海岸流動，輸出 PNG、SVG 與影片。靈感來自 Étienne Pressager《Quelques îles en formation》(2007)。", "Draw an island and let a line of text wrap around it exactly once, end to end — the type size is recalculated live from the outline’s length. Draw or randomise islands, flow the text along the coast, and export PNG, SVG or video. Inspired by Étienne Pressager’s Quelques îles en formation (2007)."],
    images: [ { src: "roubert-tools/covers/zi-dao.jpg", c: 7, s: 12 } ] },
  // 暫時下架（還不成熟）：要放回來，把下面兩行開頭的 // 刪掉
  // { slug: "zi-wang", title: "字網", en: "Glyph Web", year: 2026, type: "Tools", tag: "字母連線",
  //   cover: "roubert-tools/covers/zi-wang.jpg", link: "roubert-tools/zi-wang/" },
];
