import type { HomeDict } from "../de/home";

const home: HomeDict = {
  banner1: {
    eyebrow: "Yaratıcı",
    title: "Mimarlık",
    imageAlt: "Yaratıcı mimarlık — proje görünümü",
  },

  features: {
    eyebrow: "ÖNE ÇIKAN ÖZELLİKLER",
    items: [
      { title: "Yaratıcı Çözümler", icon: "icon-solution", href: "/service" },
      { title: "Minimal Mimarlık", icon: "icon-blueprint", href: "/architecture" },
      { title: "Yeniden Kurgulanan Mekânlar", icon: "icon-office-building", href: "/interior-design" },
    ],
  },

  about1: {
    eyebrow: "Şirket Hakkında",
    titleLine1: "Vizyonunuzu ve tutkunuzu",
    titleLine2: "inşa eden mimarlar",
    text: "Hassas planlamayı tasarım iddiasıyla birleştiriyoruz. İlk eskizden anahtar teslimine kadar Almanya ve Avrupa'daki yatırımcılara eşlik ediyoruz — net bir biçim dili, sürdürülebilir malzemeler ve güvenilir maliyet kontrolüyle.",
    experienceYears: 24,
    experienceLines: ["YIL", "MESLEKİ", "DENEYİM"],
    progress: [
      { label: "Tasarım", percent: 80 },
      { label: "Mimarlık", percent: 90 },
    ],
    imageAlt: "Mühendislerin bulunduğu mimari şantiye",
    portraitAlt: "Kurucunun portresi",
    signatureAlt: "Kurucunun imzası",
  },

  services1: {
    eyebrow: "HİZMETLERİMİZ",
    title: "Mimarlık Hizmetlerimiz",
    items: [
      {
        number: "01",
        icon: "icon-blueprint",
        title: "Mimarlık & Planlama",
        text: "İleri görüşlü mimari konseptler, 3D BIM modelleme, statik mühendisliği ve eksiksiz yapı ruhsatı süreçleri.",
        href: "/architecture",
      },
      {
        number: "02",
        icon: "icon-interior-design",
        title: "İç Mimarlık",
        text: "Özel mekân tasarımı, üst segment malzeme seçimi, kişiye özel mobilya detayları ve anahtar teslim iç mekân kurgusu.",
        href: "/interior-design",
      },
      {
        number: "03",
        icon: "icon-solution",
        title: "Bina Renovasyonu",
        text: "Enerji verimli modernizasyon, tarihi yapı restorasyonu, yapısal güçlendirme ve yüksek verimli cephe yenileme.",
        href: "/building-renovation",
      },
      {
        number: "04",
        icon: "icon-engineer",
        title: "Şantiye Yönetimi",
        text: "Tam kapsamlı genel yüklenicilik, şantiye denetimi, taşeron koordinasyonu, sıkı iş güvenliği ve zamanında teslim.",
        href: "/construction-site",
      },
    ],
  },

  projects1: {
    eyebrow: "SON PROJELERİMİZ",
    titleLine1: "Son tamamladığımız projeler —",
    titleLine2: "işimize bir bakış",
    items: [
      {
        location: "Freiburg",
        title: "Villa Joshna",
        image: "/assets/img/project/project-v1-img1.webp",
        alt: "Villa Joshna — mimari proje 1",
      },
      {
        location: "Stuttgart",
        title: "Lindenhof Konutu",
        image: "/assets/img/project/project-v1-img2.webp",
        alt: "Lindenhof Konutu — mimari proje 2",
      },
      {
        location: "Strazburg",
        title: "Rheinblick Rezidans",
        image: "/assets/img/project/project-v1-img3.webp",
        alt: "Rheinblick Rezidans — mimari proje 3",
      },
      {
        location: "Basel",
        title: "Nordlicht Atölyesi",
        image: "/assets/img/project/project-v1-img4.webp",
        alt: "Nordlicht Atölyesi — mimari proje 4",
      },
    ],
  },

  team1: {
    eyebrow: "EKİBİMİZ",
    titleLine1: "ARY GROUP'un",
    titleLine2: "arkasındaki ekip",
  },

  faq1: {
    bigTitle: "SSS",
    items: [
      {
        question: "Tasarım ve yapı ruhsatı süreci ne kadar sürer?",
        answer:
          "Konsept ve ön tasarım genellikle 4 ila 8 hafta sürer. Yapı ruhsatının belediye tarafından incelenmesi, kurumun iş yüküne ve proje ölçeğine bağlı olarak genellikle 2 ila 4 ay alır.",
      },
      {
        question: "Anahtar teslim yapım ve genel yüklenicilik sunuyor musunuz?",
        answer:
          "Evet. Kazı, kaba yapı, bina kabuğu, mekanik-elektrik tesisat ve iç mekân imalatlarını tek elden, tek sözleşme altında anahtar teslim olarak üstleniyoruz.",
      },
      {
        question: "İç mimarlık hizmetiniz neleri kapsıyor?",
        answer:
          "Mekân akışı optimizasyonu, özel mobilya ve ahşap işleri tasarımı, aydınlatma planı, malzeme tedariki, fotogerçekçi 3D görselleştirme ile komple mobilyalama ve montaj.",
      },
      {
        question: "Bütçeye uyumu nasıl sağlıyor, ek maliyetleri nasıl önlüyorsunuz?",
        answer:
          "Detaylı metraj ve keşif listeleri, rekabetçi taşeron ihaleleri ve garantili azami fiyat sözleşmeleriyle — hakediş esaslı ödemelerle güvence altına alınır.",
      },
    ],
  },

  featureTwo: {
    items: [
      {
        titleLine1: "Size en iyi tasarımı",
        titleLine2: "sunuyoruz",
        icon: "icon-light-bulb",
        image: "/assets/img/resource/feauture-v2-img1.webp",
        href: "/service",
      },
      {
        titleLine1: "Nitelikli bir mühendis",
        titleLine2: "ekibimiz var",
        icon: "icon-engineer",
        image: "/assets/img/resource/feauture-v2-img2.webp",
        href: "/team",
      },
    ],
  },

  video1: {
    titleLine1: "Mimarlıkta",
    titleLine2: "öncüyüz",
  },

  testimonial1: {
    eyebrow: "MÜŞTERİ YORUMLARI",
    title: "Müşteriler ARY GROUP hakkında ne diyor",
  },

  banner2: {
    brandTitle: "ARY GROUP",
    titleLine1: "Mimarlık",
    titleLine2: "yaşanan bir heykeldir",
    imageAlt: "Mimarlık yaşanan bir heykeldir",
  },

  about2: {
    eyebrow: "ARY GROUP'U TANIYIN",
    titleLine1: "Hedefiniz gerçeğe dönüşsün diye",
    titleLine2: "her şeyi biz üstleniyoruz",
    text: "Yapılabilirlik etüdünden kabule kadar takvimi, maliyeti ve kaliteyi kontrol altında tutuyoruz. Tek bir muhatabınız olur — proje müelliflerini, kurumları ve taşeronları biz koordine ederiz.",
    listItems: [
      "Yapılabilirlik etütleri",
      "Konsept tasarım",
      "Özel planlama & donatım",
    ],
  },

  whyChooseUs: {
    items: [
      {
        icon: "icon-office-building",
        title: "Mimari Tasarım",
        text: "Sürdürülebilir malzemeler, akıllı alan kullanımı ve biyoklimatik tasarım ilkeleriyle kurgulanan yenilikçi taşıyıcı sistem konseptleri.",
      },
      {
        icon: "icon-interior-design",
        title: "Kalıcı Yaşam Kalitesi",
        text: "Ergonomik konforu, zamansız malzeme dilini ve özel aydınlatma kurgusunu birleştiren özenli yaşam alanları.",
      },
      {
        icon: "icon-targeted",
        title: "Profesyonel Planlama",
        text: "Gerçekçi maliyet tahmini, uygulanabilir iş programı, mevzuata tam uyum ve sorunsuz uygulama yönetimi.",
      },
    ],
  },

  services2: {
    eyebrow: "HİZMETLERİMİZ",
    title: "Mimarlık Hizmetlerimiz",
    items: [
      {
        icon: "icon-blueprint",
        title: "Mimarlık & Planlama",
        text: "Modern yaşam için vizyoner tasarımlar, sürdürülebilir yapı planları ve hassas 3D BIM koordinasyonu.",
        href: "/architecture",
        image: "/assets/img/service/service-v2-bg-architecture.webp",
      },
      {
        icon: "icon-engineer",
        title: "Genel Yüklenicilik",
        text: "Kapsamlı şantiye denetimi, teknik uygulama ve kaliteden ödün vermeyen anahtar teslim yapım.",
        href: "/construction-site",
        image: "/assets/img/service/service-v2-bg-construction.webp",
      },
      {
        icon: "icon-interior-design",
        title: "İç Mimarlık",
        text: "Ergonomik konforu, seçkin malzemeleri ve özel üretim ahşap işlerini buluşturan uyumlu iç mekânlar.",
        href: "/interior-design",
        image: "/assets/img/service/service-v2-bg-interior.webp",
      },
      {
        icon: "icon-solution",
        title: "Bina Renovasyonu",
        text: "Enerji verimli modernizasyon, tarihi yapı restorasyonu ve yüksek verimli cephe yenileme.",
        href: "/building-renovation",
        image: "/assets/img/service/service-v2-bg-renovation.webp",
      },
    ],
  },

  action: {
    title: "Aklınızda bir proje mi var?",
    subtitle: "Çekinmeyin, bir merhaba deyin",
    cta: "HADİ KONUŞALIM",
  },

  news: {
    eyebrow: "BLOGUMUZDAN",
    title: "Son yazılarımız",
  },

  contactForm: {
    eyebrow: "YARDIMA HAZIRIZ",
    title: "Sorunuz mu var?",
    fields: {
      name: "Adınız",
      email: "E-posta adresi",
      phone: "Telefon numarası",
      message: "Mesajınızı yazın",
    },
    submit: "MESAJINIZI GÖNDERİN",
    loading: "Lütfen bekleyin …",
    counters: [
      { value: 48, labelLine1: "Mimar ve", labelLine2: "mühendis" },
      {
        value: 256,
        labelLine1: "Mimari başarı için",
        labelLine2: "alınan ödül",
      },
    ],
    imageAlt: "İletişim — modern mimarlık",
  },

  banner3: {
    title: "YENİ BİR YAŞAM BİÇİMİ",
    followUs: "Bizi takip edin",
    ctaSecondary: "HEMEN BAŞLAYIN",
    imageAlt: "Yeni bir yaşam biçimi",
  },

  services3: {
    items: [
      {
        icon: "icon-office-building",
        title: "Mimari Tasarım",
        text: "Sürdürülebilir malzemeler, akıllı alan kullanımı ve biyoklimatik tasarım ilkeleriyle kurgulanan yenilikçi taşıyıcı sistem konseptleri.",
      },
      {
        icon: "icon-interior-design",
        title: "İç Mekânda Uyum",
        text: "Ergonomik konforu, zamansız malzeme dilini ve özel aydınlatma kurgusunu birleştiren özenli yaşam alanları.",
      },
      {
        icon: "icon-targeted",
        title: "Hassas Proje Planlaması",
        text: "Gerçekçi maliyet tahmini, uygulanabilir iş programı, mevzuata tam uyum ve sorunsuz uygulama yönetimi.",
      },
    ],
  },

  awards: {
    eyebrow: "Uluslararası Ödüller",
    title: "Ödüller & Başarılar",
    month: "EKİ",
    day: "25",
    logoAlt: "Ödül logosu",
    items: [
      {
        project: "Villa Daniel, Romanya",
        award: "Red Dot Design Award",
        image: "/assets/img/resource/awards-v1-img1.webp",
      },
      {
        project: "Seeblick Konutu, İsviçre",
        award: "German Design Award",
        image: "/assets/img/resource/awards-v1-img2.webp",
      },
      {
        project: "Nordlicht Atölyesi, Basel",
        award: "Iconic Awards Architecture",
        image: "/assets/img/resource/awards-v1-img3.webp",
      },
      {
        project: "Rheinblick Rezidans, Strazburg",
        award: "Architizer A+ Award",
        image: "/assets/img/resource/awards-v1-img4.webp",
      },
    ],
  },

  video3: {
    scrollingText: "ARY YARATICI MİMARLIK ÇÖZÜMLERİ",
  },

  projects3: {
    eyebrow: "SON PROJELERİMİZ",
    title: "Projelerimize göz atın",
  },

  testimonial3: {
    eyebrow: "MÜŞTERİ YORUMLARI",
    titleLine1: "Müşteriler neden",
    titleLine2: "bizimle çalışıyor",
  },

  about3: {
    projectAlt: "Mimari projeye genel bakış",
    buildingAlt: "Modern bina inşaatı",
    interiorAlt: "İç mimari detay",
  },

  team3: {
    eyebrow: "EKİBİMİZ",
  },

  beforeAfter: {
    eyebrow: "// DÖNÜŞÜM GALERİSİ",
    titleLine1: "Kaba yapıdan kusursuzluğa",
    titleLine2: "Yapı kalitemizi detayda görün",
    text: "Dikey ayırma çizgisini fareyle veya dokunarak kaydırın; kaba yapı aşaması ile tamamlanmış, oturuma hazır mimarlık arasındaki 1:1 farkı keşfedin.",
    tablistAria: "Dönüşüm örnekleri",
    sliderAria: "Öncesi-sonrası karşılaştırma kaydırıcısı",
    presets: {
      before: "Öncesi",
      beforeTitle: "Tamamen öncesi (kaba yapı)",
      split: "50 / 50",
      splitTitle: "50/50 görünüm",
      after: "Sonrası",
      afterTitle: "Tamamen sonrası (anahtar teslim)",
    },
    projects: [
      {
        id: "luxury-villa-exterior",
        tabNumber: "01",
        tabTitle: "Özel Villa Mülkü",
        category: "Mimarlık & Kaba Yapı",
        subtitle:
          "Betonarme taşıyıcı sistem & havuz kazısı ➔ Sonsuzluk havuzlu ve panoramik cepheli, oturuma hazır lüks rezidans",
        beforeImg: "/assets/img/project/villa-transformation-before.webp",
        beforeAlt:
          "Betonarme yapısı, iskelesi ve havuz kazısıyla kaba yapı aşamasındaki özel villa",
        beforeBadge: "Kaba yapı",
        afterImg: "/assets/img/project/villa-transformation-after.webp",
        afterAlt:
          "Havuzu, cam korkulukları ve modern cephe tasarımıyla tamamlanmış lüks villa",
        afterBadge: "Anahtar teslim",
      },
      {
        id: "luxury-living-interior",
        tabNumber: "02",
        tabTitle: "Usta İşi İç Mekân",
        category: "İç Mekân & Komple Tadilat",
        subtitle:
          "Ham zemin & şömine kaba imalatı ➔ Traverten şömineli ve balıksırtı parkeli tamamlanmış yaşam salonu",
        beforeImg: "/assets/img/project/interior-transformation-before.webp",
        beforeAlt:
          "Sıvasız duvarları ve yerden ısıtma tesisatıyla kaba yapı aşamasındaki yaşam alanı",
        beforeBadge: "Kaba yapı",
        afterImg: "/assets/img/project/interior-transformation-after.webp",
        afterAlt:
          "Yanan şömineli ve seçkin meşe parkeli, anahtar teslim tasarım salonu",
        afterBadge: "Anahtar teslim",
      },
    ],
  },

  featureExplore: {
    eyebrow: "GÜÇLÜ YÖNLERİMİZİ KEŞFEDİN",
    titleLine1: "En iyi mimarlık ve",
    titleLine2: "iç mimarlığı sunuyoruz",
    text: "Yenilikçi ve sürdürülebilir mimari tasarımlar, kişiye özel iç mekân atmosferleri ve sağlam bir şantiye yönetimi sunuyoruz. Entegre ekibimiz vizyoner yaratıcılığı hassas mühendislikle birleştiriyor — kalıcı mekânlar için.",
    imageAlt: "Mimarlık & iç mimarlık",
  },
};

export default home;
