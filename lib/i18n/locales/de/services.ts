/**
 * Almanca — Leistungen (Übersicht + 4 Detailseiten).
 *
 * Vier Detailseiten sind strukturgleich; sie werden von einer gemeinsamen
 * Komponente (components/sections/services/ServiceDetail.tsx) gerendert.
 */

const services = {
  overview: {
    breadcrumbTitle: "Leistungen",
    breadcrumbBg: "/assets/img/service/page-header-bg.webp",
  },

  sidebar: {
    categoriesTitle: "Kategorien",
    supportTitleLine1: "Benötigen Sie eine",
    supportTitleLine2: "Leistung von uns?",
    supportCta: "LÖSUNG FINDEN",
    contactNote: "Sie können jederzeit anrufen",
    contactFreeLabel: "Kostenlos",
  },

  goalsTitle: "Unsere Ziele",
  challengesTitle: "Die Herausforderungen",

  details: {
    architecture: {
      breadcrumbTitle: "Architektur & Planung",
      breadcrumbBg: "/assets/img/service/page-header-bg-architecture.webp",
      heroImage: "/assets/img/service/services-details-img1.webp",
      heroAlt: "Projekt für Gebäudearchitektur und Planung",
      title: "Gebäudearchitektur & Planung",
      intro1:
        "Wir entwickeln innovative, nachhaltige und maßgeschneiderte Architekturlösungen für Wohnanlagen, moderne Gewerbekomplexe und urbane Lebensräume. Unsere ganzheitliche Planungsmethodik verbindet visionäres Design mit funktionaler Effizienz, konstruktiver Präzision und ökologischer Verantwortung.",
      intro2:
        "Von der ersten Machbarkeitsstudie bis zur detaillierten 3D-BIM-Modellierung begleiten wir Ihr Projekt durch jede Phase. Wir übersetzen Ihren Lebensstil oder Ihre Markenidentität in dauerhaft gebaute Realität.",
      checkItems: [
        "Nachhaltiges bioklimatisches Design, das Tageslicht, Lüftung und Energieeffizienz optimiert.",
        "Moderne 3D-BIM-Modellierung für kollisionsfreie Planung und Kosteneffizienz.",
      ],
      midText:
        "Jedes architektonische Werk beginnt mit dem Verständnis für den Charakter des Grundstücks und die Erwartungen seiner künftigen Nutzer. Wir analysieren Topografie, Bauleitplanung und Mikroklima, um Bauwerke zu schaffen, die in Würde altern und dauerhaften räumlichen Wert bieten.",
      midItems: [
        "Umfassender Konzeptentwurf, fotorealistische Visualisierungen und physische Modelle.",
        "Vollständige Genehmigungsunterlagen und proaktive Abstimmung mit den Behörden.",
        "Detaillierte Ausführungspläne, technische Spezifikationen und Vergabeunterlagen.",
      ],
      image2: "/assets/img/service/services-details-arch-img2.webp",
      image2Alt: "Detail aus dem Architektur- und Ingenieurbüro",
      outroText1:
        "Unser Architekturbüro verbindet künstlerischen Ausdruck mit strengen deutschen Ingenieurstandards. Wir koordinieren alle Fachplaner — Tragwerksplaner, TGA-Planer und Bauphysiker — zu einem harmonischen architektonischen Ganzen.",
      outroText2:
        "Während der Bauphase übernehmen unsere Architekten die künstlerische Oberleitung und Qualitätsüberwachung vor Ort. So stimmt jede Schattenfuge, jeder Materialübergang und jedes Raummaß millimetergenau mit dem Entwurf überein.",
      goals: [
        "Netto-Null-Energieeffizienz (KfW 40 / Passivhaus)",
        "Zeitlose ästhetische Langlebigkeit & räumliche Harmonie",
        "Transparente Budgetierung & strikte Terminkontrolle",
      ],
      challengesText:
        "Komplexe Bauleitpläne, enge städtische Grundstücksgrenzen und strenge Umweltauflagen. Wir lösen das durch frühzeitige Behördenabstimmung, präzise Vermessung und intelligente, flächensparende Tragwerkskonzepte.",
      faq: [
        {
          question: "Wie lange dauern Entwurf und Genehmigungsverfahren?",
          answer:
            "Konzept- und Detailplanung benötigen in der Regel 4 bis 8 Wochen. Die Baugenehmigung dauert je nach Bauaufsichtsbehörde und Projektgröße üblicherweise 2 bis 4 Monate.",
        },
        {
          question:
            "Übernehmen Sie Bauantrag und behördliche Genehmigungen?",
          answer:
            "Ja, wir bieten das vollständige Genehmigungsmanagement — inklusive Bauantrag, Standsicherheitsnachweis, Brandschutzkonzept und direkter Abstimmung mit den Behörden.",
        },
        {
          question: "Welchen Nutzen hat 3D-BIM für mein Projekt?",
          answer:
            "BIM erzeugt ein einheitliches digitales 3D-Modell aus Architektur, Tragwerk und technischer Gebäudeausrüstung. Kollisionen werden vor Baubeginn erkannt, teure Änderungen auf der Baustelle vermieden und Kosten präziser prognostiziert.",
        },
        {
          question:
            "Planen Sie auch energieeffiziente Gebäude und Passivhäuser?",
          answer:
            "Selbstverständlich. Wir sind auf hocheffiziente Konzepte nach KfW 40, Passivhaus- und DGNB-Standard spezialisiert und integrieren Erdwärmepumpen, Photovoltaik und intelligente Gebäudehüllen.",
        },
      ],
    },

    "interior-design": {
      breadcrumbTitle: "Innenarchitektur",
      breadcrumbBg: "/assets/img/service/page-header-bg-interior.webp",
      heroImage: "/assets/img/service/services-details-img3.webp",
      heroAlt: "Projekt für Innenarchitektur und Raumgestaltung",
      title: "Innenarchitektur & Raumgestaltung",
      intro1:
        "Wir gestalten maßgeschneiderte, hochwertige Innenräume, die den Alltag aufwerten und eine eigenständige private oder geschäftliche Identität widerspiegeln. Unser Ansatz bringt Raumproportionen, Tageslicht, natürliche Materialität und handwerklich gefertigte Einrichtung in Einklang.",
      intro2:
        "Von privaten Luxusresidenzen und Penthäusern bis zu Boutique-Hotels und modernen Büroflächen formen wir Atmosphären, die ästhetischen Anspruch mit selbstverständlicher Alltagstauglichkeit verbinden.",
      checkItems: [
        "Maßgeschneiderte Raumplanung, die Wege, Sichtachsen und Tageslicht optimiert.",
        "Maßgefertigte Einbauten, individueller Innenausbau und kuratierte, hochwertige Materialien.",
      ],
      midText:
        "Jedes Innenraumkonzept entsteht im engen Dialog mit unseren Bauherren. Wir kuratieren haptische Farbpaletten, geschichtete Lichtplanung und akustische Maßnahmen — für Räume, die warm, zeitlos und unverwechselbar wirken.",
      midItems: [
        "Konzept-Moodboards, haptische Materialpaletten und fotorealistische 3D-Visualisierungen.",
        "Umfassende Schreiner- und Werkplanung, Lichtplanung und Elektroplanung.",
        "Schlüsselfertige Beschaffung von Möbeln und Ausstattung, Handwerkerkoordination und sorgfältiges Styling vor Ort.",
      ],
      image2: "/assets/img/service/services-details-interior-img2.webp",
      image2Alt: "Maßgefertigte Innenarchitektur und Einrichtung",
      outroText1:
        "Unser Team steuert den gesamten Beschaffungs- und Montageprozess und arbeitet mit Kunsthandwerkern, Steinmetzbetrieben und renommierten europäischen Möbelmanufakturen zusammen. Jede Naht und jede Fuge erfüllt den höchsten handwerklichen Anspruch.",
      outroText2:
        "Während der Montage überwachen unsere Innenarchitekten jede Phase direkt vor Ort — sie koordinieren Fachbetriebe, begleiten den Einbau der Maßmöbel und arrangieren Kunst, Accessoires und Licht für eine makellose Übergabe.",
      goals: [
        "Harmonische Raumabläufe & ergonomische Qualität",
        "Handwerklicher Innenausbau & nachhaltige, hochwertige Materialien",
        "Atmosphärische Lichtplanung & akustischer Komfort",
      ],
      challengesText:
        "Moderne Gebäudetechnik, Smart-Home-Automation und akustische Anforderungen nahtlos zu integrieren — ohne die klaren, eleganten Linien der Innenarchitektur zu stören.",
      faq: [
        {
          question: "Was umfasst Ihre innenarchitektonische Leistung?",
          answer:
            "Unser Komplettangebot umfasst Moodboards, Grundrissplanung, fotorealistische 3D-Visualisierungen, Werkplanung für Maßmöbel, Licht- und Elektroplanung, Möbelkuratierung und schlüsselfertiges Styling vor Ort.",
        },
        {
          question:
            "Gestalten Sie Innenräume auch im bestehenden Gebäude neu?",
          answer:
            "Selbstverständlich. Wir sind auf hochwertige Umgestaltungen bestehender Wohnungen, historischer Gebäude und Boutique-Gewerbeflächen spezialisiert und optimieren Grundrisse unter Berücksichtigung der Tragstruktur.",
        },
        {
          question:
            "Planen Sie individuelle Möbel und maßgefertigte Einbauten?",
          answer:
            "Ja. Wir erstellen detaillierte Werkzeichnungen für Küchen, Ankleiden, Einbauregale und Wandverkleidungen und arbeiten mit Tischlermeistern und Kunsthandwerkern zusammen.",
        },
        {
          question: "Wie präsentieren Sie Konzepte vor der Beschaffung?",
          answer:
            "Wir zeigen physische Materialmuster, individuelle Oberflächenproben und fotorealistische 3D-Begehungen, damit Sie jede Textur, Farbe und Lichtstimmung erleben, bevor Sie investieren.",
        },
      ],
    },

    "building-renovation": {
      breadcrumbTitle: "Gebäudesanierung",
      breadcrumbBg: "/assets/img/service/page-header-bg-renovation.webp",
      heroImage: "/assets/img/service/services-details-img5.webp",
      heroAlt: "Projekt für Gebäudesanierung und Modernisierung",
      title: "Gebäudesanierung & Modernisierung",
      intro1:
        "Wir revitalisieren bestehende Wohn-, Gewerbe- und historische Gebäude und verwandeln in die Jahre gekommene Bauten in leistungsfähige, energieeffiziente und zeitgemäße Architektur. Unser Sanierungsteam verbindet tiefe bautechnische Expertise mit behutsamem Denkmalhandwerk.",
      intro2:
        "Ob Aufwertung eines städtischen Mehrfamilienhauses, Modernisierung einer Büroimmobilie oder Restaurierung einer denkmalgeschützten Villa — wir verlängern den Lebenszyklus des Gebäudes und steigern seinen langfristigen Wert.",
      checkItems: [
        "Tiefgreifende energetische Sanierung nach höchsten KfW-Standards mit deutlich reduzierten Heizkosten.",
        "Denkmalschutzgerechte Sanierung, die das authentische architektonische Erbe respektiert.",
      ],
      midText:
        "Erfolgreiche Sanierung beginnt mit sorgfältiger Diagnose, bevor der erste Abbruch erfolgt. Wir untersuchen Fundamente, tragendes Mauerwerk, Holzkonstruktionen und Feuchtesperren, um verdeckte Mängel zu beheben und das Gebäude zukunftsfähig zu machen.",
      midItems: [
        "Umfassende Bauwerksdiagnostik zu Statik, Wärmeschutz und Feuchtigkeit.",
        "Fassadensanierung, hochwertige Dreifachverglasung und Dachausbau.",
        "Moderne Heizungs- und Lüftungstechnik, Wärmepumpen, Fußbodenheizung und Smart-Home-Nachrüstung.",
      ],
      image2: "/assets/img/service/services-details-renov-img2.webp",
      image2Alt: "Leistungsfähige Gebäuderevitalisierung und Sanierung",
      outroText1:
        "Unsere Ingenieur- und Handwerksteams arbeiten unter strenger Qualitäts- und Sicherheitsaufsicht. Staubdichte Abschottungen, Unterdruckhaltung und durchdachte Logistik ermöglichen Sanierungen auch in teilweise bewohnten Gebäuden.",
      outroText2:
        "Wir übernehmen außerdem alle Genehmigungen, die Abstimmung mit der Denkmalbehörde und die Beantragung von Fördermitteln (BAFA / KfW) — damit Ihre Modernisierung maximal gefördert wird.",
      goals: [
        "Drastische Senkung des Energieverbrauchs",
        "Statische Sicherung & vollständige Trockenlegung",
        "Historischen Charakter bewahren, zeitgemäßen Komfort schaffen",
      ],
      challengesText:
        "Unvorhergesehene Schäden in altem Mauerwerk oder Holz aufzudecken und strenge Denkmalschutzvorgaben mit modernem Brandschutz und Wärmedämmung zu vereinbaren. Unser interdisziplinäres Team löst das mit innovativen, substanzschonenden Restaurierungstechniken.",
      faq: [
        {
          question:
            "Kann saniert werden, während Teile des Gebäudes genutzt werden?",
          answer:
            "Ja. Durch abschnittsweise Planung, staubdichte Schutzwände, festgelegte Arbeitszeiten und geplante Umschaltungen der Versorgung halten wir die Beeinträchtigung für Mieter und Betrieb minimal.",
        },
        {
          question: "Welche Fördermittel und Zuschüsse sind möglich?",
          answer:
            "Wir unterstützen bei der Beantragung attraktiver Fördermittel (z. B. KfW- und BAFA-Programme) für Fassadendämmung, Fenstertausch, Wärmepumpen und Dachdämmung.",
        },
        {
          question: "Wie gehen Sie mit dem Denkmalschutz um?",
          answer:
            "Wir arbeiten eng mit der Denkmalschutzbehörde zusammen und setzen genehmigte, diffusionsoffene Kalkputze, authentische Holzprofile und reversible Innendämmsysteme ein, die den strengen Vorgaben entsprechen.",
        },
        {
          question:
            "Wie wird die Standsicherheit eines Altbaus überprüft?",
          answer:
            "Wir führen umfassende zerstörungsfreie Untersuchungen durch — Baugrundbohrungen, Ultraschallprüfung des Mauerwerks, Feuchtemessung an Holzbalken und statische Nachberechnungen vor Beginn der Arbeiten.",
        },
      ],
    },

    "construction-site": {
      breadcrumbTitle: "Bauleitung",
      breadcrumbBg: "/assets/img/service/page-header-bg-construction.webp",
      heroImage: "/assets/img/service/services-details-img6.webp",
      heroAlt: "Schlüsselfertige Bauleitung und Bauüberwachung vor Ort",
      title: "Bauausführung & Bauleitung",
      intro1:
        "Wir übernehmen schlüsselfertige Generalunternehmerschaft und konsequente Bauüberwachung. Unsere Bauleiter stellen sicher, dass jede Planzeichnung, jede statische Berechnung und jede technische Vorgabe auf der Baustelle mit höchster Präzision umgesetzt wird.",
      intro2:
        "Von Erdarbeiten und Betonbau über die wetterfeste Gebäudehülle bis zum technischen Ausbau koordinieren wir alle Fachgewerke — termingerecht, im Budget und auf höchstem Qualitätsniveau.",
      checkItems: [
        "Schlüsselfertige Generalunternehmerschaft mit garantiertem Höchstpreis und verbindlichen Terminen.",
        "Zertifizierte Sicherheits- und Gesundheitsschutzkoordination (SiGeKo) auf der Baustelle.",
      ],
      midText:
        "Erfolgreiche Bauausführung verlangt durchdachte Logistik und tägliche Gewerkekoordination. Unsere Bauleiter prüfen Materiallieferungen, kontrollieren die Bewehrung, überwachen die Betonnachbehandlung und messen die Luftdichtheit der Gebäudehülle — damit Mängel gar nicht erst entstehen.",
      midItems: [
        "Konsequente Qualitätssicherung, Materialnachweise und Abnahmen nach Bauabschnitten.",
        "Digitale Baudokumentation, Fortschrittskontrolle und transparente Wochenberichte.",
        "Umfassendes Nachunternehmermanagement, Terminsynchronisation und Konfliktvermeidung.",
      ],
      image2: "/assets/img/service/services-details-const-img2.webp",
      image2Alt: "Bauüberwachung und technische Abnahme vor Ort",
      outroText1:
        "Unsere erfahrenen Bauleiter sind dauerhaft auf der Baustelle präsent. Wir sind die zentrale Schnittstelle zwischen Bauherren, Architekten, Bauaufsicht und Fachunternehmen und lösen technische Fragen vorausschauend.",
      outroText2:
        "Zum Abschluss nehmen wir alle technischen Anlagen sowie Brandschutzsysteme in Betrieb, führen die förmliche Abnahme nach VOB/BGB durch und übergeben strukturierte digitale Objektdokumentationen für den einfachen Gebäudebetrieb.",
      goals: [
        "Mängelfreie technische Übergabe & konstruktive Qualität",
        "Strikte Terminplanung & garantierte Budgettreue",
        "Höchste Standards bei Arbeitssicherheit & Baustellenordnung",
      ],
      challengesText:
        "Komplexe innerstädtische Baustellenlogistik, Kranstellflächen, Nachbarschaftsschutz und die abgestimmte Anlieferung schwerer Materialien auf engen Grundstücken — ohne den Ablauf der aufeinanderfolgenden Gewerke zu verzögern.",
      faq: [
        {
          question:
            "Welche Rolle haben Ihr Bauleiter und die Generalunternehmung?",
          answer:
            "Unsere Bauleiter steuern den täglichen Baustellenbetrieb, prüfen die Ausführung gegen die Planung, koordinieren alle Nachunternehmer, setzen Sicherheitsvorschriften durch und führen die Qualitätsabnahmen je Bauabschnitt.",
        },
        {
          question: "Wie kontrollieren Sie Baukosten und vermeiden Nachträge?",
          answer:
            "Durch transparente Verträge, detaillierte Leistungsverzeichnisse, offene Nachunternehmerausschreibungen und laufende Kostenkontrolle mit wöchentlichem Soll-Ist-Vergleich.",
        },
        {
          question:
            "Welche Sicherheits- und Umweltstandards gelten auf der Baustelle?",
          answer:
            "Zertifizierte Sicherheits- und Gesundheitsschutzkoordinatoren (SiGeKo) kontrollieren unsere Baustellen regelmäßig. Wir setzen vollständige Schutzausrüstung, gesicherte Gerüste, tägliche Sicherheitsunterweisungen und umweltgerechte Bauabfalltrennung durch.",
        },
        {
          question: "Wie laufen Abnahme und Gewährleistung ab?",
          answer:
            "Gemeinsam mit dem Bauherrn wird ein förmliches Abnahmeprotokoll erstellt. Es dokumentiert die vollständige technische Prüfung aller Anlagen, die Übergabe der Betriebsanleitungen und die Ausstellung der gesetzlichen Gewährleistungsnachweise.",
        },
      ],
    },
  },
};

export type ServicesDict = typeof services;

/** Detay sayfalarının slug'ları — route ile sözlük anahtarı eşleşmesi. */
export type ServiceSlug = keyof ServicesDict["details"];

export default services;
