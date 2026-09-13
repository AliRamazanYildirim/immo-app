import type { BlogDict } from "../de/blog";

const blog: BlogDict = {
  list: {
    breadcrumbTitle: "Blogumuz",
    breadcrumbBg: "/assets/img/blog/page-header-bg.webp",
  },

  sidebarPage: {
    breadcrumbTitle: "Kenar Çubuklu Blog",
    breadcrumbBg: "/assets/img/blog/page-header-bg.webp",
  },

  posts: [
    {
      category: "Mimarlık",
      date: "2 Temmuz 2023",
      titleLine1: "Mimarlık günlük yaşamımızda",
      titleLine2: "iyi bir meslek mi?",
      image: "/assets/img/blog/blog-v1-img1.webp",
      alt: "Tasarım üzerinde çalışan mimarlık ofisi",
    },
    {
      category: "Tasarım",
      date: "2 Temmuz 2023",
      titleLine1: "Mimarlık görsel bir sanattır —",
      titleLine2: "binalar kendileri için konuşur",
      image: "/assets/img/blog/blog-v1-img2.webp",
      alt: "Modern bir binanın cephe detayı",
    },
    {
      category: "Yapı Kalitesi",
      date: "2 Temmuz 2023",
      titleLine1: "Bize güvenebilmeniz için kalite ve",
      titleLine2: "güvenliğin arkasında duruyoruz",
      image: "/assets/img/blog/blog-v1-img3.webp",
      alt: "Şantiyede kalite kontrolü",
    },
  ],

  /** Kenar çubuklu varyantta kullanılan uzun kartlar. */
  sidebarPosts: [
    {
      date: "21 Nisan 2023",
      author: "Elena Rostova",
      titleLine1: "Mimari sorunlara ve yaratıcılığa",
      titleLine2: "en iyi çözüm",
      image: "/assets/img/blog/blog-sidebar-img1.webp",
      alt: "Tasarım üzerinde çalışan mimarlık ofisi",
    },
    {
      date: "21 Nisan 2023",
      author: "Marcus Vance",
      titleLine1: "İyi bir aydınlatma tasarımı",
      titleLine2: "mekânı nasıl dönüştürür",
      image: "/assets/img/blog/blog-sidebar-img2.webp",
      alt: "Katmanlı aydınlatma tasarımlı iç mekân",
    },
    {
      date: "21 Nisan 2023",
      author: "Janes Cooper",
      titleLine1: "On yıl sonra da ikna eden",
      titleLine2: "malzeme seçimi",
      image: "/assets/img/blog/blog-sidebar-img3.webp",
      alt: "Doğal taş ve meşe malzeme numuneleri",
    },
    {
      date: "21 Nisan 2023",
      author: "David Miller",
      titleLine1: "Enerji renovasyonu:",
      titleLine2: "nereden başlamalı",
      image: "/assets/img/blog/blog-sidebar-img4.webp",
      alt: "Renovasyon projesinde cephe yalıtımı",
    },
  ],

  details: {
    breadcrumbTitle: "Blog Detayı",
    breadcrumbBg: "/assets/img/blog/page-header-bg.webp",
    meta: {
      date: "23 Mart 2022",
      category: "MİMARLIK",
      byLabel: "YAZAN",
      author: "Elena Rostova",
      commentsLabel: "{count} yorum",
    },
    heading1: "İyi tasarım arsadan başlar",
    text1:
      "İlk çizgi çizilmeden önce analiz gelir: yönlenme, topografya, komşu yapılar, imar planı ve mikroklima. Bu koşullar netleştiğinde ancak gün ışığını kullanan, enerji ihtiyacını düşüren ve çevresine doğal biçimde yerleşen bir tasarım ortaya çıkar. Bu adımı atlayan, bedelini sonra öder — ek işlerde, işletme maliyetlerinde ya da hiçbir zaman tam oturmayan mekânlarda.",
    heading2: "Modelden şantiyeye",
    text2:
      "BIM modelinde mimarlık, taşıyıcı sistem ve tesisat bir araya gelir. Çakışmalar şantiyede değil ekranda görünür; metrajlar güvenilir biçimde belirlenir ve maliyetler hassas öngörülür. Böylece sahada gerçekten önemli olana zaman kalır: uygulama kalitesi.",
    quote:
      "Bir yapı, yirmi yıl sonra hâlâ yerinde duruyormuş gibi göründüğünde iyidir — ilk yılında en çok dikkat çektiğinde değil.",
    quoteAuthor: "Elena Rostova, Baş Mimar",
    postedIn: "Yayınlandığı kategori:",
    tags: ["Mimarlık", "Planlama", "Sürdürülebilirlik"],
    shareAria: "Yazıyı paylaş",
    imageAlts: {
      main: "Tamamlanmış bir konut projesinin iç görünümü",
      secondary1: "Ahşap-beton kompozit yapı detayı",
      secondary2: "Panoramik cam cepheden kesit",
    },
    comments: {
      title: "Yorumlar ({count})",
      items: [
        {
          author: "Saiful Islam",
          date: "3 Şubat 2023",
          text: "Çok iyi anlatılmış — özellikle arsa analizinin sonraki tasarımın kalitesini belirlediği noktası.",
          avatar: "/assets/img/blog/blog-details-img4.webp",
        },
        {
          author: "Jhon Smith",
          date: "3 Şubat 2023",
          text: "BIM sürecinin anlatımı bizim deneyimimizle örtüşüyor: çakışmaları erken bulmak sonunda en çok zamanı kazandırıyor.",
          avatar: "/assets/img/blog/blog-details-img5.webp",
        },
      ],
      replyLabel: "Yanıtla",
    },
    form: {
      title: "Bize Yazın",
      note: "E-posta adresiniz yayınlanmayacaktır. Zorunlu alanlar * ile işaretlenmiştir.",
      name: "Adınız*",
      email: "E-postanız*",
      website: "Web sitesi*",
      message: "Mesajınızı yazın*",
      submit: "Mesaj gönder",
    },
    sidebar: {
      searchTitle: "Arama",
      searchPlaceholder: "Anahtar kelime girin …",
      categoriesTitle: "Kategoriler",
      categories: [
        "Mimarlık",
        "İç Mimarlık",
        "Bina Renovasyonu",
        "Şantiye Yönetimi",
      ],
      recentTitle: "Son Yazılar",
      recentPosts: [
        {
          titleLine1: "İyi tasarım",
          titleLine2: "arsadan başlar",
          date: "21 Nisan 2023",
          image: "/assets/img/blog/sidebar-img1.webp",
        },
        {
          titleLine1: "BIM modelinden",
          titleLine2: "şantiyeye",
          date: "21 Nisan 2023",
          image: "/assets/img/blog/sidebar-img2.webp",
        },
        {
          titleLine1: "Yıkmak yerine",
          titleLine2: "yenilemek",
          date: "21 Nisan 2023",
          image: "/assets/img/blog/sidebar-img3.webp",
        },
      ],
      tagsTitle: "Etiketler",
      tags: [
        "Planlama",
        "Tasarım",
        "Hizmetler",
        "Renovasyon",
        "BIM",
        "Sürdürülebilirlik",
      ],
    },
  },
};

export default blog;
