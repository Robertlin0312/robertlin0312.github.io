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
   client  （選填）委託單位   role（選填）擔任工作
   text    （選填）介紹文字，一段一個字串
   images  （選填）內頁圖片，每張可以設：
           src 路徑、caption 圖說、c 起始欄（1–24）、s 寬度（幾欄）
           不設 c / s 就是置中大圖；video 欄位可放 YouTube／Vimeo 嵌入網址
   ============================================================ */

window.WORKS = [

  /* ---- 平面作品（標題、年份、說明之後再補）---- */
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
    cover: "roubert-tools/covers/ci-ge.jpg", link: "roubert-tools/ci-ge/" },
  { slug: "slice-collage-lab", title: "切片拼貼", en: "Slice Collage Lab", year: 2026, type: "Tools", tag: "切 / 拼",
    cover: "roubert-tools/covers/slice-collage-lab.jpg", link: "roubert-tools/slice-collage-lab/" },
  { slug: "nie-kan-kan", title: "捏看看", en: "Face Warp", year: 2026, type: "Tools", tag: "變形",
    cover: "roubert-tools/covers/nie-kan-kan.jpg", link: "roubert-tools/nie-kan-kan/" },
  { slug: "zhuo-zi", title: "灼字", en: "Burnt Glyph", year: 2026, type: "Tools", tag: "熱像 × 字形",
    cover: "roubert-tools/covers/zhuo-zi.jpg", link: "roubert-tools/zhuo-zi/" },
  { slug: "isolate", title: "線稿隔離器", en: "Isolate", year: 2026, type: "Tools", tag: "線稿",
    cover: "roubert-tools/covers/isolate.jpg", link: "roubert-tools/isolate/" },
  { slug: "zi-dao", title: "字島", en: "Glyph Island", year: 2026, type: "Tools", tag: "文字繞島",
    cover: "roubert-tools/covers/zi-dao.jpg", link: "roubert-tools/zi-dao/" },
  { slug: "zi-wang", title: "字網", en: "Glyph Web", year: 2026, type: "Tools", tag: "字母連線",
    cover: "roubert-tools/covers/zi-wang.jpg", link: "roubert-tools/zi-wang/" }
];
