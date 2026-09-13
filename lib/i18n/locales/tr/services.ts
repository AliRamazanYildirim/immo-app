import type { ServicesDict } from "../de/services";

const services: ServicesDict = {
  overview: {
    breadcrumbTitle: "Hizmetler",
    breadcrumbBg: "/assets/img/service/page-header-bg.webp",
  },

  sidebar: {
    categoriesTitle: "Kategoriler",
    supportTitleLine1: "Hizmetlerimizden birine",
    supportTitleLine2: "ihtiyacınız mı var?",
    supportCta: "ÇÖZÜM BULUN",
    contactNote: "Dilediğiniz zaman arayabilirsiniz",
    contactFreeLabel: "Ücretsiz",
  },

  goalsTitle: "Hedeflerimiz",
  challengesTitle: "Zorluklar",

  details: {
    architecture: {
      breadcrumbTitle: "Mimarlık & Planlama",
      breadcrumbBg: "/assets/img/service/page-header-bg-architecture.webp",
      heroImage: "/assets/img/service/services-details-img1.webp",
      heroAlt: "Yapı mimarlığı ve planlama projesi",
      title: "Yapı Mimarlığı & Planlama",
      intro1:
        "Konut yerleşkeleri, modern ticari kompleksler ve kentsel yaşam alanları için yenilikçi, sürdürülebilir ve kişiye özel mimari çözümler üretiyoruz. Bütüncül planlama yaklaşımımız vizyoner tasarımı işlevsel verimlilik, yapısal hassasiyet ve çevresel sorumlulukla birleştirir.",
      intro2:
        "İlk yapılabilirlik etüdünden detaylı 3D BIM modellemesine kadar projenizin her aşamasında yanınızdayız. Yaşam tarzınızı veya kurumsal kimliğinizi kalıcı yapılı gerçekliğe dönüştürüyoruz.",
      checkItems: [
        "Doğal ışığı, havalandırmayı ve enerji performansını optimize eden sürdürülebilir biyoklimatik tasarım.",
        "Çakışmasız mühendislik ve maliyet verimliliği sağlayan ileri seviye 3D BIM modelleme.",
      ],
      midText:
        "Her mimari eser, arsanın kendine özgü karakterini ve gelecek kullanıcılarının beklentilerini anlamakla başlar. Topografyayı, imar mevzuatını ve mikroklimayı analiz ederek zarifçe yaşlanan ve kalıcı mekânsal değer sunan yapılar kurguluyoruz.",
      midItems: [
        "Kapsamlı konsept tasarım, fotogerçekçi görselleştirmeler ve fiziksel maketler.",
        "Eksiksiz ruhsat dosyası ve kurumlarla proaktif koordinasyon.",
        "Detaylı uygulama projeleri, teknik şartnameler ve ihale dosyaları.",
      ],
      image2: "/assets/img/service/services-details-arch-img2.webp",
      image2Alt: "Mimarlık ve mühendislik ofisinden detay",
      outroText1:
        "Ofisimiz sanatsal ifadeyi titiz Alman mühendislik standartlarıyla birleştirir. Statik, mekanik-elektrik ve yapı fiziği müelliflerinin tamamını koordine ederek uyumlu mimari bütünler üretiyoruz.",
      outroText2:
        "Yapım sürecinde mimarlarımız sahada sanatsal üst denetim ve kalite kontrolü yürütür. Böylece her gölge derzi, her malzeme geçişi ve her mekân ölçüsü tasarım niyetiyle milimetrik uyum içinde kalır.",
      goals: [
        "Net sıfır enerji verimliliği (KfW 40 / Passivhaus)",
        "Zamansız estetik kalıcılık & mekânsal uyum",
        "Şeffaf bütçeleme & sıkı termin kontrolü",
      ],
      challengesText:
        "Karmaşık imar planları, dar kentsel parsel sınırları ve sıkı çevre mevzuatı. Bunları erken aşamada kurum görüşmeleri, hassas arsa ölçümleri ve alandan tasarruf eden akıllı taşıyıcı sistem çözümleriyle aşıyoruz.",
      faq: [
        {
          question: "Tasarım ve ruhsat süreçleri ne kadar sürer?",
          answer:
            "Konsept ve detay tasarımı genellikle 4 ila 8 hafta sürer. Yapı ruhsatı, ilgili belediyeye ve proje ölçeğine bağlı olarak genellikle 2 ila 4 ay alır.",
        },
        {
          question: "Ruhsat başvurularını ve resmi izinleri siz yürütüyor musunuz?",
          answer:
            "Evet, uçtan uca ruhsat yönetimi sunuyoruz: resmi yapı ruhsatı başvurusu (Bauantrag), statik hesaplar, yangın güvenliği konsepti ve kurumlarla doğrudan koordinasyon dahil.",
        },
        {
          question: "3D BIM projeme nasıl fayda sağlar?",
          answer:
            "BIM; mimari, statik ve mekanik-elektrik sistemleri tek bir dijital 3D modelde birleştirir. Çakışmalar inşaat başlamadan tespit edilir, sahadaki maliyetli değişiklikler azalır ve maliyet tahminleri hassaslaşır.",
        },
        {
          question: "Enerji verimli binalar ve pasif ev tasarlıyor musunuz?",
          answer:
            "Kesinlikle. KfW 40, Passivhaus ve DGNB standartlarındaki yüksek verimli konseptlerde uzmanız; toprak kaynaklı ısı pompaları, fotovoltaik sistemler ve akıllı yapı kabuğu çözümleri entegre ediyoruz.",
        },
      ],
    },

    "interior-design": {
      breadcrumbTitle: "İç Mimarlık",
      breadcrumbBg: "/assets/img/service/page-header-bg-interior.webp",
      heroImage: "/assets/img/service/services-details-img3.webp",
      heroAlt: "İç mimarlık ve mekân tasarımı projesi",
      title: "İç Mimarlık & Mekân Tasarımı",
      intro1:
        "Günlük yaşamı yükselten ve kendine özgü bireysel ya da kurumsal kimliği yansıtan, kişiye özel ve rafine iç mekânlar yaratıyoruz. İç mimarlık yaklaşımımız mekân oranlarını, doğal ışığı, organik malzeme dilini ve el işçiliğiyle üretilmiş mobilyayı uyum içinde buluşturur.",
      intro2:
        "Özel lüks rezidanslardan çatı katlarına, butik otellerden modern yönetici ofislerine kadar; estetik incelikle günlük kullanım kolaylığını dengeleyen atmosferler kurguluyoruz.",
      checkItems: [
        "Dolaşımı, görüş akslarını ve doğal aydınlatmayı optimize eden kişiye özel mekân planlaması.",
        "Özel üretim dolaplar, kişiye özel ahşap imalat ve özenle seçilmiş üst segment malzemeler.",
      ],
      midText:
        "Her iç mekân konsepti müşterilerimizle yakın bir diyalog içinde geliştirilir. Dokunsal renk paletleri, katmanlı mimari aydınlatma ve akustik çözümleri kurgulayarak sıcak, zamansız ve tamamen kendine has duyusal ortamlar oluşturuyoruz.",
      midItems: [
        "Konsept moodboard'ları, dokunsal malzeme paletleri ve fotogerçekçi 3D görselleştirmeler.",
        "Kapsamlı ahşap imalat teknik çizimleri, aydınlatma planları ve elektrik yerleşimleri.",
        "Anahtar teslim mobilya ve donatım tedariki, zanaatkâr koordinasyonu ve sahada titiz kurgu.",
      ],
      image2: "/assets/img/service/services-details-interior-img2.webp",
      image2Alt: "Kişiye özel lüks iç mimarlık ve mobilya",
      outroText1:
        "Ekibimiz tedarik ve montaj sürecinin tamamını yönetir; usta zanaatkârlar, doğal taş atölyeleri ve tanınmış Avrupa mobilya markalarıyla birlikte çalışır. Her dikiş, her ek yeri en yüksek el işçiliği ölçütünü karşılar.",
      outroText2:
        "Montaj sürecinde iç mimarlarımız her aşamayı sahada denetler — özel imalat firmalarını koordine eder, ölçüye özel mobilyanın montajını takip eder, sanat eseri, aksesuar ve aydınlatmayı kusursuz bir teslim için yerleştirir.",
      goals: [
        "Uyumlu mekân akışı & ergonomik mükemmellik",
        "Zanaatkâr işçiliği & sürdürülebilir, üst segment malzemeler",
        "Atmosferik mimari aydınlatma & akustik konfor",
      ],
      challengesText:
        "Modern tesisat, akıllı ev otomasyonu ve akustik gereklilikleri; iç mimarlığın net ve zarif çizgilerini bozmadan kesintisiz biçimde entegre etmek.",
      faq: [
        {
          question: "Kapsamlı iç mimarlık hizmetiniz neleri içeriyor?",
          answer:
            "Tam kapsamlı hizmetimiz konsept moodboard'ları, mekân yerleşim planları, fotogerçekçi 3D görselleştirmeler, özel imalat detay çizimleri, aydınlatma ve elektrik şemaları, mobilya seçimi ve sahada anahtar teslim kurguyu kapsar.",
        },
        {
          question: "Mevcut bir yapı içinde iç mekânı yeniden tasarlıyor musunuz?",
          answer:
            "Kesinlikle. Mevcut dairelerin, tarihi konutların ve butik ticari mekânların üst segment dönüşümünde uzmanız; taşıyıcı elemanlara saygı göstererek planları optimize ediyoruz.",
        },
        {
          question: "Özel mobilya ve ölçüye özel dolap tasarımı yapıyor musunuz?",
          answer:
            "Evet. Ekibimiz özel mutfaklar, giyinme odaları, gömme raf sistemleri ve duvar kaplamaları için detaylı imalat çizimleri hazırlar ve usta marangozlarla birlikte çalışır.",
        },
        {
          question: "Tedarik öncesinde konseptleri nasıl sunuyorsunuz?",
          answer:
            "Fiziksel malzeme numune tablaları, özel yüzey örnekleri ve fotogerçekçi 3D sanal gezintiler sunuyoruz; böylece yatırım kararınızı vermeden önce her dokuyu, rengi ve ışık atmosferini deneyimlersiniz.",
        },
      ],
    },

    "building-renovation": {
      breadcrumbTitle: "Bina Renovasyonu",
      breadcrumbBg: "/assets/img/service/page-header-bg-renovation.webp",
      heroImage: "/assets/img/service/services-details-img5.webp",
      heroAlt: "Bina renovasyonu ve modernizasyon projesi",
      title: "Bina Renovasyonu & Modernizasyonu",
      intro1:
        "Mevcut konut, ticari ve tarihi yapıları yeniden canlandırıyor; yaşlanmış strüktürleri yüksek performanslı, enerji verimli ve çağdaş mimari mekânlara dönüştürüyoruz. Renovasyon ekibimiz derin yapısal uzmanlığı, koruma odaklı hassas zanaatkârlıkla birleştirir.",
      intro2:
        "Kentsel bir apartmanı yükseltmek, bir ofis mülkünü modernize etmek ya da tescilli bir villayı restore etmek — her durumda yapının ömrünü uzatıyor ve uzun vadeli değerini en üst düzeye çıkarıyoruz.",
      checkItems: [
        "En üst KfW verimlilik standartlarına ulaşan ve ısıtma maliyetlerini belirgin şekilde düşüren kapsamlı enerji renovasyonu.",
        "Özgün mimari mirasa saygılı, tescilli yapı koruması (Denkmalschutz).",
      ],
      midText:
        "Başarılı bir renovasyon, yıkıma başlamadan önce titiz bir teşhis gerektirir. Temelleri, taşıyıcı duvarları, ahşap strüktürleri ve su yalıtım katmanlarını ayrıntılı olarak inceleyerek gizli kusurları giderir ve yapıyı geleceğe hazırlarız.",
      midItems: [
        "Statik, ısı yalıtımı ve nem açısından kapsamlı yapı teşhisi.",
        "Cephe yenileme, yüksek performanslı üçlü cam ve çatı dönüşümü.",
        "Modern ısıtma-havalandırma, ısı pompası entegrasyonu, yerden ısıtma ve akıllı ev dönüşümü.",
      ],
      image2: "/assets/img/service/services-details-renov-img2.webp",
      image2Alt: "Yüksek performanslı bina canlandırma ve renovasyon",
      outroText1:
        "Mühendislik ve uygulama ekiplerimiz sıkı kalite ve güvenlik denetimi altında çalışır. Toz sızdırmaz bölmeler, negatif basınçlı hava temizleyiciler ve düzenli lojistik sayesinde kısmen kullanımda olan yapılarda da renovasyon yapılabilir.",
      outroText2:
        "Ayrıca tüm ruhsat işlemlerini, koruma kurulu görüşmelerini ve enerji teşvik başvurularını (BAFA / KfW) biz yürütürüz; böylece modernizasyon yatırımınız azami mali destekten yararlanır.",
      goals: [
        "Bina enerji tüketiminde köklü azalma",
        "Statik güçlendirme & nemin tamamen giderilmesi",
        "Tarihi ruhu koruyarak çağdaş konfor",
      ],
      challengesText:
        "Eski duvar veya ahşap strüktürlerde öngörülmeyen hasarları ortaya çıkarmak ve sıkı koruma kurallarını güncel yangın güvenliği ile yalıtım standartlarıyla bağdaştırmak. Disiplinler arası ekibimiz bunu yenilikçi, yapıya zarar vermeyen restorasyon teknikleriyle çözüyor.",
      faq: [
        {
          question:
            "Binanın bir bölümü kullanılırken renovasyon yapılabilir mi?",
          answer:
            "Evet. Etaplı planlama, sızdırmaz toz bariyerleri, belirlenmiş çalışma saatleri ve planlı altyapı geçişleriyle kiracılar veya işletme üzerindeki etkiyi en düşük düzeyde tutuyoruz.",
        },
        {
          question: "Hangi enerji teşviklerine ve hibelere başvurabiliriz?",
          answer:
            "Cephe yalıtımı, üçlü cam pencere değişimi, ısı pompası dönüşümü ve çatı yalıtımını kapsayan cazip devlet teşviklerine (örneğin KfW ve BAFA programları) başvuruda müşterilerimize destek veriyoruz.",
        },
        {
          question: "Tescilli yapı mevzuatını (Denkmalschutz) nasıl yönetiyorsunuz?",
          answer:
            "Ekibimiz koruma kurullarıyla yakın çalışır; onaylı, nefes alabilen kireç sıvalar, özgün ahşap profiller ve sıkı koruma kurallarına uyan geri alınabilir iç yalıtım sistemleri kullanır.",
        },
        {
          question: "Eski bir yapının statik güvenliği nasıl doğrulanır?",
          answer:
            "Herhangi bir imalata başlamadan önce kapsamlı tahribatsız teşhis yapıyoruz: temel zemininden karot alımı, duvarda ultrason testi, ahşap kirişlerde nem analizi ve statik yeniden hesaplamalar.",
        },
      ],
    },

    "construction-site": {
      breadcrumbTitle: "Şantiye Yönetimi",
      breadcrumbBg: "/assets/img/service/page-header-bg-construction.webp",
      heroImage: "/assets/img/service/services-details-img6.webp",
      heroAlt: "Anahtar teslim şantiye yönetimi ve sahada mühendislik",
      title: "Yapım & Şantiye Yönetimi",
      intro1:
        "Anahtar teslim genel yüklenicilik ve titiz şantiye denetimi sunuyoruz. Şantiye mühendislerimiz her mimari çizimin, her statik hesabın ve her teknik şartnamenin sahada ödünsüz bir hassasiyetle uygulanmasını güvence altına alır.",
      intro2:
        "Kazı ve betonarme imalatından yapı kabuğunun su yalıtımına ve mekanik-elektrik tesisatına kadar tüm uzman gruplarını koordine ediyoruz — zamanında, bütçe içinde ve en yüksek kalite standardında.",
      checkItems: [
        "Garantili azami fiyat şeffaflığı ve bağlayıcı termin taahhütleriyle anahtar teslim genel yüklenicilik.",
        "Şantiyede sertifikalı iş sağlığı, güvenliği ve çevre koordinasyonu (SiGeKo).",
      ],
      midText:
        "Başarılı yapım, kusursuz lojistik planlama ve günlük gruplar arası koordinasyon gerektirir. Saha yöneticilerimiz malzeme sevkiyatlarını denetler, donatı yerleşimini doğrular, beton kürünü izler ve yapı kabuğunun hava sızdırmazlığını ölçer — kusurlar ortaya çıkmadan önler.",
      midItems: [
        "Titiz kalite güvencesi, malzeme belgelendirmesi ve hakediş esaslı kabuller.",
        "Dijital şantiye dokümantasyonu, ilerleme takibi ve şeffaf haftalık raporlama.",
        "Kapsamlı taşeron yönetimi, program senkronizasyonu ve uyuşmazlık önleme.",
      ],
      image2: "/assets/img/service/services-details-const-img2.webp",
      image2Alt: "Sahada şantiye denetimi ve teknik muayene",
      outroText1:
        "Deneyimli şantiye yöneticilerimiz sahada sürekli olarak bulunur. Yatırımcılar, mimarlar, belediye denetçileri ve uygulayıcı firmalar arasında merkezi iletişim noktası olarak teknik sorunları öngörüyle çözüyoruz.",
      outroText2:
        "Tamamlanma aşamasında tüm mekanik, elektrik ve yangın güvenliği sistemlerini devreye alıyor, resmi kabul protokollerini (VOB/BGB) tamamlıyor ve kolay işletme için düzenli dijital yapı dokümantasyonu teslim ediyoruz.",
      goals: [
        "Kusursuz teknik teslim & yapısal mükemmellik",
        "Sıkı hakediş programı & garantili bütçe uyumu",
        "En yüksek iş güvenliği & düzenli şantiye standartları",
      ],
      challengesText:
        "Karmaşık kentsel şantiye lojistiğini, vinç konumlandırmasını, komşu korumasını ve dar parsellerde ağır malzeme sevkiyatlarının eşzamanlamasını — ardışık imalat akışını geciktirmeden yönetmek.",
      faq: [
        {
          question:
            "Şantiye yöneticinizin ve genel yüklenici ekibinizin rolü nedir?",
          answer:
            "Şantiye yöneticilerimiz günlük saha operasyonunu yürütür, imalatı mimari şartnamelerle karşılaştırarak doğrular, tüm uzman taşeronları koordine eder, güvenlik kurallarını uygulatır ve hakediş esaslı kalite kabullerini yönetir.",
        },
        {
          question: "İnşaat maliyetlerini nasıl kontrol ediyor, aşımları nasıl önlüyorsunuz?",
          answer:
            "Şeffaf sözleşmeler, detaylı metraj ve keşif listeleri, açık hesap esaslı rekabetçi taşeron ihaleleri ve onaylı hakedişlere karşı haftalık sapma denetimiyle sürekli maliyet takibi uyguluyoruz.",
        },
        {
          question: "Sahada hangi iş güvenliği ve çevre standartları uygulanıyor?",
          answer:
            "Sertifikalı iş sağlığı ve güvenliği koordinatörleri (SiGeKo) şantiyelerimizi düzenli olarak denetler. Tam kişisel koruyucu donanım kullanımını, güvenli iskele kurulumunu, günlük güvenlik bilgilendirmelerini ve çevreye duyarlı atık ayrıştırmasını zorunlu tutuyoruz.",
        },
        {
          question: "Nihai teslim ve garanti süreci nasıl işliyor?",
          answer:
            "Müşteriyle birlikte resmi bir kabul protokolü (Abnahmeprotokoll) düzenlenir; tüm bina sistemlerinin eksiksiz teknik testi belgelenir, işletme kılavuzları teslim edilir ve yasal garanti belgeleri düzenlenir.",
        },
      ],
    },
  },
};

export default services;
