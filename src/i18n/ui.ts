export const languages = {
  en: "English",
  th: "ไทย",
  zh: "中文",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.attractions": "Things to Do",
    "nav.food": "Food & Drink",
    "nav.neighborhoods": "Neighborhoods",
    "nav.festivals": "Festival Calendar",
    "nav.getting-around": "Getting Around",
    "nav.plan": "Plan Your Visit",
    "nav.blog": "Blog",

    // Homepage
    "home.hero.title": "Discover Korat",
    "home.hero.subtitle":
      "Thailand's Gateway to Isan — Ancient Khmer ruins, stunning national parks, incredible food, and authentic Thai culture",
    "home.hero.cta": "Explore Places",
    "home.hero.plan": "Plan Your Visit",
    "home.explore.title": "Explore Korat",
    "home.explore.subtitle":
      "Discover everything Nakhon Ratchasima has to offer",
    "home.attractions.title": "Top Attractions",
    "home.attractions.subtitle": "Must-visit places in and around Korat",
    "home.food.title": "Taste of Korat",
    "home.food.subtitle":
      "From the famous Pad Mee Korat to authentic Isan street food",
    "home.why.title": "Why Visit Korat?",
    "home.why.subtitle":
      "Nakhon Ratchasima is unlike anywhere else in Thailand",
    "home.why.heritage.title": "Ancient Heritage",
    "home.why.heritage.desc":
      "Khmer ruins at Phimai older than Angkor Wat, ancient temples, and a rich cultural history over a thousand years.",
    "home.why.nature.title": "Stunning Nature",
    "home.why.nature.desc":
      "Home to Khao Yai, Thailand's most beloved national park and UNESCO World Heritage Site.",
    "home.why.food.title": "Incredible Food",
    "home.why.food.desc":
      "The gateway to Isan cuisine — Pad Mee Korat, fiery Som Tam, smoky Gai Yang, and the best night markets.",
    "home.blog.title": "Travel Tips & Guides",
    "home.blog.subtitle": "Plan your perfect Korat adventure",
    "home.cta.title": "Ready to Explore Korat?",
    "home.cta.desc":
      "Start planning your trip to Thailand's hidden gem. From ancient ruins to wild nature and unbeatable food.",
    "home.cta.btn": "Start Planning",

    // Festival Calendar
    "festivals.hero.title": "Festival Calendar",
    "festivals.hero.subtitle":
      "Korat comes alive year-round with vibrant festivals, cultural celebrations, and traditional events",

    // General
    "general.viewAll": "View all",
    "general.readMore": "Read more",
    "general.exploreArea": "Explore area",
    "general.backTo": "Back to",
    "general.all": "All",
    "general.search": "Search places...",
    "general.filter": "Filter",

    // Categories
    "cat.temples": "Temples & Ruins",
    "cat.food": "Local Flavors",
    "cat.neighborhoods": "Areas to Explore",
    "cat.transport": "Transport Tips",
    "cat.plan": "Essential Info",
    "cat.blog": "Tips & Guides",

    // Plan your trip
    "plan.hero.title": "Plan Your",
    "plan.hero.title2": "Visit",
    "plan.hero.subtitle":
      "Everything you need to know before visiting Korat",
    "plan.tab.info": "Travel Information",
    "plan.tab.routes": "Suggested Routes",
    "plan.weather.title": "Best Time to Visit",
    "plan.budget.title": "Budget Guide",
    "plan.tips.title": "Essential Tips",
    "plan.phrases.title": "Useful Thai Phrases",

    // Seasons
    "season.cool": "Cool Season",
    "season.cool.months": "November — February",
    "season.cool.desc":
      "The best time to visit. Pleasant temperatures (20-30°C), low humidity, clear skies.",
    "season.hot": "Hot Season",
    "season.hot.months": "March — May",
    "season.hot.desc":
      "Very hot (35-40°C). Fewer visitors means better deals. Songkran in April is amazing.",
    "season.rainy": "Rainy Season",
    "season.rainy.months": "June — October",
    "season.rainy.desc":
      "Afternoon showers, lush scenery. Waterfalls at their best. Lowest prices.",

    // Footer
    "footer.desc":
      "Your complete travel guide to Nakhon Ratchasima — Thailand's Gateway to Isan.",
    "footer.explore": "Explore",
    "footer.plan": "Plan",
    "footer.about": "About Korat",
    "footer.aboutText":
      "Nakhon Ratchasima (โคราช) is Thailand's largest province and the gateway to the Isan region.",
    "footer.copyright": "Visit Korat. Made with love for travelers.",

    // SEO Meta
    "seo.home.title": "Visit Korat — Gateway to Isaan Thailand | Travel Guide 2026",
    "seo.home.desc": "Discover Korat (Nakhon Ratchasima), Thailand's gateway to Isaan. Explore Phimai Historical Park, Khao Yai National Park, authentic Pad Mee Korat, vibrant festivals. Plan your trip now.",
    "seo.attractions.title": "Things to Do in Korat | Phimai, Khao Yai & Hidden Gems",
    "seo.attractions.desc": "Explore top attractions in Korat: Phimai Historical Park, Khao Yai National Park, Thao Suranari Monument, Dan Kwian Pottery Village. Complete guide to Nakhon Ratchasima sightseeing.",
    "seo.food.title": "Korat Food Guide | Pad Mee Korat, Som Tam & Best Isaan Eats",
    "seo.food.desc": "Taste the best Korat food: legendary Pad Mee Korat noodles, fiery Som Tam, grilled chicken, night market street food. Ultimate guide to eating in Nakhon Ratchasima.",
    "seo.neighborhoods.title": "Explore Korat Neighborhoods | City Center, Khao Yai & Phimai",
    "seo.neighborhoods.desc": "Discover Korat's best areas: historic old town, Khao Yai mountain retreats, ancient Phimai district. Where to go in Nakhon Ratchasima province.",
    "seo.festivals.title": "Korat Festivals & Events | Phimai Festival, Ya Mo Celebration",
    "seo.festivals.desc": "Experience Korat's vibrant festivals: Thao Suranari (Ya Mo) Festival, Phimai Festival with boat races, Songkran water fights, Loy Krathong. Annual events calendar.",
    "seo.plan.title": "Plan Your Trip to Korat | Bangkok to Korat, Budget & Tips",
    "seo.plan.desc": "Plan your Korat trip: how to get from Bangkok by bus, train, or car. Best time to visit, budget guide, accommodation tips, and essential travel information.",
    "seo.getting-around.title": "Getting Around Korat | Transport Guide & Bangkok to Korat",
    "seo.getting-around.desc": "How to get to Korat from Bangkok and get around the city. Bus, train, car, Grab, songthaew guide. Transport tips for Nakhon Ratchasima travelers.",
    "seo.blog.title": "Korat Travel Blog | Tips, Itineraries & Insider Guides",
    "seo.blog.desc": "Travel tips, itineraries, and insider guides for visiting Korat. First-time visitor guides, weekend trip plans, and hidden gems in Nakhon Ratchasima.",
  },

  th: {
    // Nav
    "nav.home": "หน้าแรก",
    "nav.attractions": "สถานที่เที่ยว",
    "nav.food": "อาหารและเครื่องดื่ม",
    "nav.neighborhoods": "ย่านต่างๆ",
    "nav.festivals": "ปฏิทินเทศกาล",
    "nav.getting-around": "การเดินทาง",
    "nav.plan": "วางแผนทริป",
    "nav.blog": "บล็อก",

    // Homepage
    "home.hero.title": "เที่ยวโคราช",
    "home.hero.subtitle":
      "ประตูสู่อีสาน — ปราสาทหินพิมาย อุทยานแห่งชาติเขาใหญ่ อาหารอร่อย และวัฒนธรรมไทยแท้",
    "home.hero.cta": "สำรวจสถานที่",
    "home.hero.plan": "วางแผนทริป",
    "home.explore.title": "สำรวจโคราช",
    "home.explore.subtitle": "ค้นพบทุกสิ่งที่นครราชสีมามีให้",
    "home.attractions.title": "สถานที่ยอดนิยม",
    "home.attractions.subtitle":
      "สถานที่ที่ต้องไปเยือนในโคราชและรอบๆ",
    "home.food.title": "รสชาติโคราช",
    "home.food.subtitle":
      "จากผัดหมี่โคราชชื่อดังสู่อาหารอีสานแท้",
    "home.why.title": "ทำไมต้องมาโคราช?",
    "home.why.subtitle": "นครราชสีมาไม่เหมือนที่ไหนในประเทศไทย",
    "home.why.heritage.title": "มรดกทางประวัติศาสตร์",
    "home.why.heritage.desc":
      "ปราสาทหินพิมายที่เก่าแก่กว่านครวัด วัดวาอาราม และประวัติศาสตร์อันยาวนานกว่าพันปี",
    "home.why.nature.title": "ธรรมชาติงดงาม",
    "home.why.nature.desc":
      "เขาใหญ่ อุทยานแห่งชาติที่ได้รับความนิยมมากที่สุดและเป็นมรดกโลก UNESCO",
    "home.why.food.title": "อาหารเลิศรส",
    "home.why.food.desc":
      "ประตูสู่อาหารอีสาน — ผัดหมี่โคราช ส้มตำ ไก่ย่าง และตลาดกลางคืนที่ดีที่สุด",
    "home.blog.title": "เคล็ดลับท่องเที่ยว",
    "home.blog.subtitle": "วางแผนการท่องเที่ยวโคราชที่สมบูรณ์แบบ",
    "home.cta.title": "พร้อมสำรวจโคราชแล้วหรือยัง?",
    "home.cta.desc":
      "เริ่มวางแผนทริปสู่อัญมณีซ่อนเร้นของไทย ตั้งแต่ปราสาทโบราณ ธรรมชาติ จนถึงอาหารที่ไม่มีใดเทียบ",
    "home.cta.btn": "เริ่มวางแผน",

    // Festival Calendar
    "festivals.hero.title": "ปฏิทินเทศกาล",
    "festivals.hero.subtitle":
      "โคราชมีชีวิตชีวาตลอดทั้งปีด้วยเทศกาล งานวัฒนธรรม และงานประเพณีที่คึกคัก",

    // General
    "general.viewAll": "ดูทั้งหมด",
    "general.readMore": "อ่านเพิ่มเติม",
    "general.exploreArea": "สำรวจพื้นที่",
    "general.backTo": "กลับไปยัง",
    "general.all": "ทั้งหมด",
    "general.search": "ค้นหาสถานที่...",
    "general.filter": "ตัวกรอง",

    // Categories
    "cat.temples": "วัดและโบราณสถาน",
    "cat.food": "อาหารท้องถิ่น",
    "cat.neighborhoods": "ย่านที่น่าสำรวจ",
    "cat.transport": "เคล็ดลับการเดินทาง",
    "cat.plan": "ข้อมูลสำคัญ",
    "cat.blog": "เคล็ดลับและไกด์",

    // Plan your trip
    "plan.hero.title": "วางแผน",
    "plan.hero.title2": "ทริปของคุณ",
    "plan.hero.subtitle":
      "ทุกสิ่งที่ต้องรู้ก่อนมาเที่ยวโคราช",
    "plan.tab.info": "ข้อมูลการเดินทาง",
    "plan.tab.routes": "เส้นทางแนะนำ",
    "plan.weather.title": "ช่วงเวลาที่ดีที่สุด",
    "plan.budget.title": "คู่มืองบประมาณ",
    "plan.tips.title": "เคล็ดลับสำคัญ",
    "plan.phrases.title": "วลีไทยที่มีประโยชน์",

    // Seasons
    "season.cool": "ฤดูหนาว",
    "season.cool.months": "พฤศจิกายน — กุมภาพันธ์",
    "season.cool.desc":
      "ช่วงเวลาที่ดีที่สุด อุณหภูมิ 20-30°C ความชื้นต่ำ ท้องฟ้าแจ่มใส",
    "season.hot": "ฤดูร้อน",
    "season.hot.months": "มีนาคม — พฤษภาคม",
    "season.hot.desc":
      "ร้อนมาก (35-40°C) นักท่องเที่ยวน้อย ราคาดี สงกรานต์เมษายนสุดมัน",
    "season.rainy": "ฤดูฝน",
    "season.rainy.months": "มิถุนายน — ตุลาคม",
    "season.rainy.desc":
      "ฝนตกช่วงบ่าย ทัศนียภาพเขียวขจี น้ำตกสวยที่สุด ราคาถูกที่สุด",

    // Footer
    "footer.desc":
      "คู่มือท่องเที่ยวฉบับสมบูรณ์สำหรับนครราชสีมา — ประตูสู่อีสาน",
    "footer.explore": "สำรวจ",
    "footer.plan": "วางแผน",
    "footer.about": "เกี่ยวกับโคราช",
    "footer.aboutText":
      "นครราชสีมา (โคราช) เป็นจังหวัดที่ใหญ่ที่สุดของไทยและเป็นประตูสู่ภาคอีสาน",
    "footer.copyright":
      "Visit Korat สร้างด้วยความรักเพื่อนักท่องเที่ยว",

    // SEO Meta
    "seo.home.title": "เที่ยวโคราช — ประตูสู่อีสาน | คู่มือท่องเที่ยวนครราชสีมา 2569",
    "seo.home.desc": "รวมที่เที่ยวโคราช ที่กิน ที่พัก คาเฟ่ เทศกาล อุทยานประวัติศาสตร์พิมาย เขาใหญ่ ผัดหมี่โคราช ส้มตำโคราช วางแผนเที่ยวนครราชสีมาครบจบในที่เดียว",
    "seo.attractions.title": "ที่เที่ยวโคราช 2569 | พิมาย เขาใหญ่ ย่าโม และจุดเช็กอินที่ห้ามพลาด",
    "seo.attractions.desc": "รวมที่เที่ยวโคราชครบ ทั้งในเมืองและนอกเมือง อุทยานประวัติศาสตร์พิมาย อุทยานแห่งชาติเขาใหญ่ อนุสาวรีย์ย่าโม ด่านเกวียน ที่เที่ยวนครราชสีมาอัปเดตล่าสุด",
    "seo.food.title": "ร้านอาหารโคราช | ผัดหมี่โคราช ส้มตำโคราช สายกินต้องไม่พลาด",
    "seo.food.desc": "รวมร้านอาหารโคราชสุดอร่อย ร้านผัดหมี่โคราชเจ้าเด็ด ร้านส้มตำแซ่บ ตลาดกลางคืน ร้านคาเฟ่โคราช อาหารอีสานแท้ ครบทุกรสที่นครราชสีมา",
    "seo.neighborhoods.title": "ย่านน่าเที่ยวโคราช | ใจกลางเมือง เขาใหญ่ และพิมาย",
    "seo.neighborhoods.desc": "สำรวจย่านน่าเที่ยวของโคราช เมืองเก่า ย่านเขาใหญ่ เที่ยวพิมาย แหล่งท่องเที่ยวในนครราชสีมา",
    "seo.festivals.title": "เทศกาลโคราช | งานฉลองย่าโม เทศกาลพิมาย สงกรานต์โคราช",
    "seo.festivals.desc": "ปฏิทินเทศกาลและงานประจำปีของโคราช เทศกาลเที่ยวพิมาย งานฉลองท้าวสุรนารี สงกรานต์ ลอยกระทง กิจกรรมที่นครราชสีมาตลอดทั้งปี",
    "seo.plan.title": "วางแผนเที่ยวโคราช | การเดินทาง ที่พัก งบประมาณ เคล็ดลับ",
    "seo.plan.desc": "คู่มือวางแผนเที่ยวโคราชฉบับสมบูรณ์ การเดินทางจากกรุงเทพฯ ที่พักราคาดี แผนเที่ยวโคราช 1 วัน 2 วัน 3 วัน เที่ยวโคราชง่ายๆ ใกล้กรุงเทพ",
    "seo.getting-around.title": "การเดินทางในโคราช | รถบัส รถไฟ กรุงเทพ-โคราช",
    "seo.getting-around.desc": "วิธีเดินทางไปโคราชจากกรุงเทพ และเดินทางในเมือง รถบัส รถไฟ รถเช่า Grab สงเทอว์ คู่มือการเดินทางนครราชสีมาฉบับสมบูรณ์",
    "seo.blog.title": "บล็อกเที่ยวโคราช | เคล็ดลับ แพลนเที่ยว ไกด์ท่องเที่ยว",
    "seo.blog.desc": "เคล็ดลับท่องเที่ยว แพลนเที่ยว และไกด์สำหรับเที่ยวโคราช คู่มือสำหรับผู้มาเยือนครั้งแรก แผนเที่ยววันหยุด และที่เที่ยวลับนครราชสีมา",
  },

  zh: {
    // Nav
    "nav.home": "首页",
    "nav.attractions": "景点",
    "nav.food": "美食",
    "nav.neighborhoods": "街区",
    "nav.festivals": "节日日历",
    "nav.getting-around": "交通",
    "nav.plan": "行程规划",
    "nav.blog": "博客",

    // Homepage
    "home.hero.title": "探索呵叻",
    "home.hero.subtitle":
      "泰国通往伊森的门户 — 古代高棉遗迹、壮丽国家公园、美食和正宗泰国文化",
    "home.hero.cta": "探索景点",
    "home.hero.plan": "规划行程",
    "home.explore.title": "探索呵叻",
    "home.explore.subtitle": "发现呵叻府的一切精彩",
    "home.attractions.title": "热门景点",
    "home.attractions.subtitle": "呵叻及周边必游之地",
    "home.food.title": "呵叻味道",
    "home.food.subtitle": "从著名的呵叻炒面到正宗伊森街头美食",
    "home.why.title": "为什么来呵叻？",
    "home.why.subtitle": "呵叻府与泰国其他地方截然不同",
    "home.why.heritage.title": "古老遗产",
    "home.why.heritage.desc":
      "披迈的高棉遗迹比吴哥窟更古老，古老寺庙和千年文化历史。",
    "home.why.nature.title": "壮美自然",
    "home.why.nature.desc":
      "考艾国家公园 — 泰国最受欢迎的国家公园，联合国教科文组织世界遗产。",
    "home.why.food.title": "难以置信的美食",
    "home.why.food.desc":
      "伊森美食的门户 — 呵叻炒面、酸辣木瓜沙拉、烤鸡和最好的夜市。",
    "home.blog.title": "旅行攻略",
    "home.blog.subtitle": "规划完美的呵叻之旅",
    "home.cta.title": "准备好探索呵叻了吗？",
    "home.cta.desc":
      "开始规划您的泰国隐藏宝石之旅。从古代遗迹到原始自然和无与伦比的美食。",
    "home.cta.btn": "开始规划",

    // Festival Calendar
    "festivals.hero.title": "节日日历",
    "festivals.hero.subtitle":
      "呵叻全年都有丰富多彩的节日、文化庆典和传统活动",

    // General
    "general.viewAll": "查看全部",
    "general.readMore": "阅读更多",
    "general.exploreArea": "探索区域",
    "general.backTo": "返回",
    "general.all": "全部",
    "general.search": "搜索地点...",
    "general.filter": "筛选",

    // Categories
    "cat.temples": "寺庙与遗迹",
    "cat.food": "当地美食",
    "cat.neighborhoods": "探索街区",
    "cat.transport": "交通攻略",
    "cat.plan": "实用信息",
    "cat.blog": "攻略与指南",

    // Plan your trip
    "plan.hero.title": "规划您的",
    "plan.hero.title2": "行程",
    "plan.hero.subtitle": "来呵叻之前您需要知道的一切",
    "plan.tab.info": "旅行信息",
    "plan.tab.routes": "推荐路线",
    "plan.weather.title": "最佳旅行时间",
    "plan.budget.title": "预算指南",
    "plan.tips.title": "实用攻略",
    "plan.phrases.title": "实用泰语短语",

    // Seasons
    "season.cool": "凉季",
    "season.cool.months": "十一月 — 二月",
    "season.cool.desc": "最佳旅行时间。宜人温度(20-30°C)，低湿度，晴朗天空。",
    "season.hot": "热季",
    "season.hot.months": "三月 — 五月",
    "season.hot.desc": "非常炎热(35-40°C)。游客少意味着更好的价格。四月泼水节很棒。",
    "season.rainy": "雨季",
    "season.rainy.months": "六月 — 十月",
    "season.rainy.desc": "午后阵雨，郁郁葱葱。瀑布最壮观。价格最低。",

    // Footer
    "footer.desc": "呵叻府完整旅行指南 — 泰国通往伊森的门户。",
    "footer.explore": "探索",
    "footer.plan": "规划",
    "footer.about": "关于呵叻",
    "footer.aboutText":
      "呵叻府是泰国最大的府，也是通往伊森地区的门户。",
    "footer.copyright": "Visit Korat 为旅行者用心打造。",

    // SEO Meta
    "seo.home.title": "呵叻旅游攻略 — 泰国东北部伊森大门 | 2026旅游指南",
    "seo.home.desc": "探索泰国呵叻府，伊森地区的大门。游览披迈历史公园、考艾国家公园，品尝正宗呵叻美食。最全呵叻自由行攻略，景点、美食、住宿一网打尽。",
    "seo.attractions.title": "呵叻必去景点 | 披迈历史公园、考艾国家公园、隐藏宝藏",
    "seo.attractions.desc": "呵叻府景点推荐：披迈石宫、考艾世界遗产、巾帼英雄纪念碑、丹宽陶器村。泰国呵叻所有必去景点完整指南。",
    "seo.food.title": "呵叻美食攻略 | 炒米粉、青木瓜沙拉和伊森美食推荐",
    "seo.food.desc": "呵叻必吃美食：正宗Pad Mee Korat炒米粉、Som Tam木瓜沙拉、烤鸡糯米饭、夜市小吃。泰国东北部最地道的美食体验。",
    "seo.neighborhoods.title": "呵叻街区探索 | 市中心、考艾和披迈",
    "seo.neighborhoods.desc": "探索呵叻最佳街区：历史老城区、考艾山区度假胜地、古老的披迈地区。呵叻府各区旅游指南。",
    "seo.festivals.title": "呵叻节日活动 | 披迈节、素拉纳里纪念节等年度盛事",
    "seo.festivals.desc": "呵叻全年节日活动指南：素拉纳里纪念节、披迈节龙舟赛、宋干泼水节、水灯节。泰国呵叻府最精彩的文化节庆活动。",
    "seo.plan.title": "呵叻旅行规划 | 曼谷到呵叻交通、预算与攻略",
    "seo.plan.desc": "呵叻旅行规划完整指南：从曼谷坐大巴、火车或自驾到呵叻。最佳旅行时间、预算指南、住宿建议和实用旅行信息。",
    "seo.getting-around.title": "呵叻交通指南 | 曼谷到呵叻及市内交通",
    "seo.getting-around.desc": "从曼谷到呵叻的完整交通指南：大巴、火车、自驾、Grab、双条车。呵叻府旅行者实用交通攻略。",
    "seo.blog.title": "呵叻旅游博客 | 攻略、行程推荐和深度指南",
    "seo.blog.desc": "呵叻旅行攻略、行程推荐和深度指南。首次访问指南、周末行程计划和呵叻府隐藏宝藏。",
  },
} as const;
