import type { PagesDict } from "../de/pages";

const pages: PagesDict = {
  meta: {
    defaultTitle: "ARY Tech Solutions — Yaratıcı Mimarlık",
    titleTemplate: "%s | ARY Tech Solutions",
    description:
      "Almanya ve Avrupa'da mimarlık, iç mimarlık ve anahtar teslim yapım. Tasarım, ruhsat ve şantiye yönetimi tek elden.",
    keywords: [
      "mimarlık",
      "iç mimarlık",
      "şantiye yönetimi",
      "bina renovasyonu",
      "Sasbach",
      "Almanya",
    ],
  },

  cta: {
    titleLine1: "Aklınızda bir proje mi var?",
    titleLine2: "Çekinmeyin, bir merhaba deyin",
    button: "HADİ KONUŞALIM",
  },

  about: {
    breadcrumbTitle: "Hakkımızda",
    breadcrumbBg: "/assets/img/about/page-header-bg.webp",
    whyChooseImages: [
      {
        src: "/assets/img/about/about-why-choose-img1.webp",
        alt: "Modern mimari tasarım maketi",
      },
      {
        src: "/assets/img/about/about-why-choose-img2.webp",
        alt: "Mimari projeler ve malzemeler",
      },
    ],
  },

  team: {
    breadcrumbTitle: "Ekibimiz",
    breadcrumbBg: "/assets/img/team/page-header-bg.webp",
    eyebrow: "EKİBİMİZ",
    titleLine1: "ARY GROUP'un arkasındaki",
    titleLine2: "yetenekli ekibimiz",
    shareAria: "Profili paylaş",
    members: [
      {
        name: "Marcus Vance",
        role: "Kıdemli Mimar",
        image: "/assets/img/team/team-v2-img1.webp",
      },
      {
        name: "Janes Cooper",
        role: "Baş İç Mimar",
        image: "/assets/img/team/team-v2-img2.webp",
      },
      {
        name: "David Miller",
        role: "İnşaat Mühendisi",
        image: "/assets/img/team/team-v2-img3.webp",
      },
      {
        name: "Sophia Laurent",
        role: "Peyzaj Mimarı",
        image: "/assets/img/team/team-v2-img4.webp",
      },
      {
        name: "Clara Schmidt",
        role: "İç Mekân Konsept Uzmanı",
        image: "/assets/img/team/team-v2-img5.webp",
      },
      {
        name: "Alexander Wright",
        role: "Şantiye Şefi",
        image: "/assets/img/team/team-v2-img6.webp",
      },
    ],
  },

  teamDetails: {
    breadcrumbTitle: "Ekip Detayı",
    breadcrumbBg: "/assets/img/team/page-header-bg.webp",
    brandTitle: "ARY GROUP",
    name: "Elena Rostova",
    role: "Baş Mimar & Proje Direktörü",
    imageAlt: "Elena Rostova — Baş Mimar & Proje Direktörü",
    labels: {
      department: "Departman:",
      experience: "Deneyim:",
      email: "E-posta:",
      phone: "Telefon:",
    },
    department: "Mimarlık & İç Mimarlık",
    experience: "15 yıl",
    biographyTitle: "Elena Rostova'nın Biyografisi",
    biography1:
      "Mimari planlama, iç mimarlık ve sürdürülebilir yapı yönetiminde 15 yılı aşkın deneyimiyle Elena, iddialı konut ve ticari projeleri konseptten anahtar teslimine kadar yönetiyor.",
    biography2:
      "Çağdaş tasarımı ileri düzey BIM planlaması, sürdürülebilir malzemeler ve kararlı şantiye denetimiyle birleştiriyor — böylece her proje işlevsellik, kalıcılık ve mimari kalite açısından ikna ediyor.",
    skills: [
      { label: "Mimari tasarım & 3D BIM", percent: 95 },
      { label: "İç mimarlık & mekân konsepti", percent: 90 },
      { label: "Yapım & şantiye denetimi", percent: 85 },
    ],
    experienceTitle: "Profesyonel Deneyim",
    positions: [
      { company: "Studio Arki Berlin", role: "Baş Mimar, BIM" },
      { company: "Metro Urban Builders", role: "Kıdemli Şantiye Şefi" },
      { company: "Atelier Interior Spaces", role: "Baş İç Mimar" },
      { company: "Alpine Habitat Design", role: "Sürdürülebilir Yapı Lideri" },
    ],
    competenciesTitle: "Temel Yetkinlikler & Uzmanlıklar",
    competencies1:
      "Kapsamlı yapı tasarımı, kişiye özel mekân konseptleri, statik mühendislik koordinasyonu ve hassas anahtar teslim uygulama alanlarında uzman.",
    competencies2:
      "Tasarım uyumunun çevresel sürdürülebilirlik ve Alman yapı kültürüyle buluştuğu zamansız mekânlara tutkuyla bağlı.",
  },

  projects: {
    breadcrumbTitle: "Projelerimiz",
    breadcrumbBg: "/assets/img/project/page-header-bg.webp",
  },

  projectDetails: {
    breadcrumbTitle: "Proje Detayı",
    breadcrumbBg: "/assets/img/project/page-header-bg.webp",
    heroAlt: "Proje detayı — tamamlanmış mimari proje",
    labels: {
      published: "Yayın tarihi:",
      category: "KATEGORİ:",
      client: "İşveren:",
      previous: "Önceki",
      next: "Sonraki",
      relatedTitle: "İlgili Projeler",
      shareAria: "Projeyi paylaş",
    },
    publishedDate: "20 Nisan 2023",
    category: "Mimarlık / Yeni yapı",
    client: "Özel işveren",
    title: "Mimari Çözümler ve Geleceği İnşa Etmek",
    text1:
      "Bu proje, özenli planlama ile tutarlı uygulamanın nasıl birlikte çalıştığını gösteriyor. Başlangıç noktası arsanın, yönlenmenin ve imar planının hassas analiziydi. Sonuç, gün ışığını en iyi biçimde kullanan ve enerji ihtiyacını düşük tutan kompakt bir kütle oldu. Taşıyıcı sistem, tesisat ve iç imalatlar BIM modelinde koordine edildi; böylece çakışmalar inşaat başlamadan tespit edildi ve maliyetler güvenilir biçimde öngörüldü.",
    text2:
      "Uygulama sürecinde tüm imalat gruplarını kendimiz koordine ettik ve kaliteyi sahada sürekli denetledik. Brüt beton, meşe ve geniş cam yüzeyler sakin bir malzeme paleti oluşturuyor; cephe, gölge derzleri ve malzeme geçişleri tasarımı tam olarak izleyecek şekilde detaylandırıldı. Yapı, zamanında ve mutabık kalınan bütçe içinde teslim edildi.",
    tags: ["Yeni yapı", "Konut", "Sürdürülebilirlik"],
    previousProject: "Lindenhof Konutu",
    nextProject: "Nordlicht Atölyesi",
  },

  testimonials: {
    breadcrumbTitle: "Referanslar",
    breadcrumbBg: "/assets/img/testimonial/page-header-bg.webp",
    ctaButton: "DAHA FAZLA HİZMET",
  },

  faq: {
    breadcrumbTitle: "Sıkça Sorulan Sorular",
    breadcrumbBg: "/assets/img/background/page-header-bg.webp",
    ctaTitleLine1: "Size yardımcı olmaya ve sorularınızı",
    ctaTitleLine2: "yanıtlamaya her zaman hazırız",
    ctaButton: "DAHA FAZLA HİZMET",
    items: [
      {
        question: "Tasarım ve yapı ruhsatı süreci ne kadar sürer?",
        answer:
          "Konsept ve ön tasarım genellikle 4 ila 8 hafta sürer. Yapı ruhsatı incelemesi, kuruma ve proje ölçeğine bağlı olarak genellikle 2 ila 4 ay alır.",
      },
      {
        question: "Anahtar teslim yapım ve genel yüklenicilik sunuyor musunuz?",
        answer:
          "Evet. Kazı, kaba yapı, bina kabuğu, mekanik-elektrik tesisat ve iç imalatları tek sözleşme altında anahtar teslim olarak üstleniyoruz.",
      },
      {
        question: "İç mimarlık hizmetiniz neleri kapsıyor?",
        answer:
          "Mekân akışı optimizasyonu, özel mobilya ve ahşap işleri tasarımı, aydınlatma planı, malzeme tedariki, fotogerçekçi 3D görselleştirme ile komple mobilyalama ve montaj.",
      },
      {
        question: "Bütçeye uyumu nasıl sağlıyor, ek maliyetleri nasıl önlüyorsunuz?",
        answer:
          "Detaylı metraj ve keşif listeleri, rekabetçi taşeron ihaleleri ve garantili azami fiyat sözleşmeleriyle — haftalık sapma denetimleriyle güvence altına alınır.",
      },
      {
        question: "Eski veya tescilli yapıları da renove ediyor musunuz?",
        answer:
          "Evet. Enerji verimli modernizasyon ve tarihi yapı restorasyonunda özel deneyimimiz var; koruma gerekliliklerini güncel ısı yalıtımı ve yüksek konforla bağdaştırıyoruz.",
      },
      {
        question: "3D BIM yapım sürecine nasıl fayda sağlar?",
        answer:
          "BIM; mimarlık, statik ve tesisat sistemlerini birleştiren bütünleşik bir 3D model oluşturur. Mekânsal çakışmalar inşaat öncesinde giderilir ve yapım programı hızlanır.",
      },
      {
        question: "Binalarınız hangi enerji standartlarına ulaşıyor?",
        answer:
          "İddialı enerji standartlarına (KfW 40, Passivhaus, DGNB) göre tasarlıyor ve inşa ediyoruz; toprak kaynaklı ısı pompaları, fotovoltaik ve yüksek performanslı yapı kabukları entegre ediyoruz.",
      },
      {
        question: "Yapı ruhsatı ve statik mühendisliği süreçlerini yönetiyor musunuz?",
        answer:
          "Evet. Gereken tüm disiplinleri koordine ediyoruz — zemin etüdü, statik tasarım, yangın güvenliği konsepti ve yapı denetimiyle doğrudan iletişim.",
      },
      {
        question: "Hangi garanti ve satış sonrası desteği sunuyorsunuz?",
        answer:
          "Tüm işler resmi kabul protokolü ve kapsamlı yasal garanti (VOB/BGB) ile teslim edilir — yapı işletimi için düzenli dijital kullanım kılavuzları dahil.",
      },
    ],
  },

  contact: {
    breadcrumbTitle: "İletişim",
    breadcrumbBg: "/assets/img/background/page-header-bg.webp",
    introTitle: "İletişime Geçin",
    introText:
      "Kapsamlı mimari planlama, iç mimarlık ve anahtar teslim yapım danışmanlığı sunuyoruz. Vizyonunuzu hayata geçirmek için ekibimize ulaşın.",
    contactInfoTitle: "İletişim Bilgileri",
    formTitle: "Bize Yazın",
    formNote:
      "E-posta adresiniz yayınlanmayacaktır. Zorunlu alanlar * ile işaretlenmiştir.",
    fields: {
      name: "Adınız*",
      email: "E-postanız*",
      phone: "Telefon*",
      subject: "Konu*",
      website: "Web sitesi*",
      message: "Mesajınızı yazın*",
    },
    submit: "MESAJ GÖNDER",
    loading: "Lütfen bekleyin …",
    mapTitle: "Google Haritalar'da konum",
  },

  notFound: {
    breadcrumbTitle: "404 — Sayfa Bulunamadı",
    code: "404",
    title: "Hay aksi! Sayfa bulunamadı",
    text: "Aradığınız sayfa mevcut değil. Taşınmış veya silinmiş olabilir.",
    button: "Anasayfaya dön",
  },
};

export default pages;
