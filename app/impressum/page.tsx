import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import siteConfig, { getMailtoLink, getTelLink } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und rechtliche Angaben gemäß § 5 DDG für ${siteConfig.company.name}`,
};

export default function ImpressumPage() {
  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle="Impressum"
    >
      <section className="legal-page py-120" style={{ padding: "120px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12">
              <div
                className="legal-content"
                style={{
                  background: "var(--thm-white-bg, #ffffff)",
                  padding: "50px 40px",
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                  color: "#333333",
                  lineHeight: "1.8",
                }}
              >
                <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "25px", color: "var(--thm-black, #11161f)" }}>
                  Impressum
                </h1>

                <h2 style={{ fontSize: "22px", fontWeight: "600", marginTop: "30px", marginBottom: "15px", color: "var(--thm-black, #11161f)" }}>
                  Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
                </h2>
                <p>
                  <strong>{siteConfig.company.name}</strong>
                  <br />
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zipCode} {siteConfig.address.city}
                  <br />
                  {siteConfig.address.country}
                </p>

                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "25px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Vertreten durch
                </h3>
                <p>
                  Ali Ramazan Yildirim (Inhaber / Geschäftsführer)
                </p>

                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "25px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Kontakt
                </h3>
                <p>
                  Telefon:{" "}
                  <a href={getTelLink()} style={{ color: "var(--thm-primary, #e90b35)", textDecoration: "underline" }}>
                    {siteConfig.contact.phone}
                  </a>
                  <br />
                  E-Mail:{" "}
                  <a href={getMailtoLink()} style={{ color: "var(--thm-primary, #e90b35)", textDecoration: "underline" }}>
                    {siteConfig.contact.email}
                  </a>
                </p>

                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "25px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Registereintrag
                </h3>
                <p>
                  Eintragung im Handelsregister: <em>[Registergericht / z. B. Amtsgericht Mannheim / Freiburg]</em>
                  <br />
                  Registernummer: <em>[HRB XXXXXX – Falls vorhanden, ansonsten entfernen]</em>
                </p>

                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "25px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Umsatzsteuer-ID
                </h3>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                  <br />
                  <em>[DE XXXXXXXXX – Falls vorhanden, ansonsten Kleinunternehmerstatus nach § 19 UStG]</em>
                </p>

                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "25px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h3>
                <p>
                  Berufsbezeichnung: <em>[Architekt / Baudienstleistungen / IT-Dienstleister (verliehen in der Bundesrepublik Deutschland)]</em>
                  <br />
                  Zuständige Kammer: <em>[z. B. Architektenkammer Baden-Württemberg / IHK Südlicher Oberrhein]</em>
                </p>

                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "25px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
                </h3>
                <p>
                  Ali Ramazan Yildirim
                  <br />
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zipCode} {siteConfig.address.city}
                  <br />
                  {siteConfig.address.country}
                </p>

                <h2 style={{ fontSize: "22px", fontWeight: "600", marginTop: "35px", marginBottom: "15px", color: "var(--thm-black, #11161f)" }}>
                  EU-Streitschlichtung
                </h2>
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--thm-primary, #e90b35)", textDecoration: "underline" }}
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  .<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>

                <h2 style={{ fontSize: "22px", fontWeight: "600", marginTop: "35px", marginBottom: "15px", color: "var(--thm-black, #11161f)" }}>
                  Verbraucherstreitbeilegung / Universalschlichtungsstelle
                </h2>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>

                <h2 style={{ fontSize: "22px", fontWeight: "600", marginTop: "35px", marginBottom: "15px", color: "var(--thm-black, #11161f)" }}>
                  Haftung für Inhalte
                </h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
                  Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                  Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                  Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                  Inhalte umgehend entfernen.
                </p>

                <h2 style={{ fontSize: "22px", fontWeight: "600", marginTop: "35px", marginBottom: "15px", color: "var(--thm-black, #11161f)" }}>
                  Haftung für Links
                </h2>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                  haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                  der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                  Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                  zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>

                <h2 style={{ fontSize: "22px", fontWeight: "600", marginTop: "35px", marginBottom: "15px", color: "var(--thm-black, #11161f)" }}>
                  Urheberrecht
                </h2>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                  gestattet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
