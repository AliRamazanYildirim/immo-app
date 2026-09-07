import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import siteConfig, { getMailtoLink, getTelLink } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung und Informationen zum Datenschutz für ${siteConfig.company.name}`,
};

export default function DatenschutzPage() {
  return (
    <Layout
      headerStyle={4}
      footerStyle={1}
      breadcrumbTitle="Datenschutzerklärung"
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
                  Datenschutzerklärung
                </h1>

                <h2 style={{ fontSize: "22px", fontWeight: "600", marginTop: "30px", marginBottom: "15px", color: "var(--thm-black, #11161f)" }}>
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Allgemeine Hinweise
                </h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
                  Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>

                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Datenerfassung auf dieser Website
                </h3>
                <p>
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                  <br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
                  <br />
                  {siteConfig.company.name}
                  <br />
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zipCode} {siteConfig.address.city}
                  <br />
                  Telefon:{" "}
                  <a href={getTelLink()} style={{ color: "var(--thm-primary, #e90b35)" }}>
                    {siteConfig.contact.phone}
                  </a>
                  <br />
                  E-Mail:{" "}
                  <a href={getMailtoLink()} style={{ color: "var(--thm-primary, #e90b35)" }}>
                    {siteConfig.contact.email}
                  </a>
                </p>
                <p>
                  <strong>Wie erfassen wir Ihre Daten?</strong>
                  <br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B.
                  um Daten handeln, die Sie in ein Kontaktformular eingeben oder uns per E-Mail senden. Andere Daten
                  werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme
                  erfasst (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
                <p>
                  <strong>Wofür nutzen wir Ihre Daten?</strong>
                  <br />
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                  Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
                <p>
                  <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
                  <br />
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung
                  oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
                  haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Zudem steht Ihnen ein
                  Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>

                <h2 style={{ fontSize: "22px", fontWeight: "600", marginTop: "35px", marginBottom: "15px", color: "var(--thm-black, #11161f)" }}>
                  2. Hosting
                </h2>
                <p>
                  Wir hosten die Inhalte unserer Website bei einem externen Dienstleister (Hoster):{" "}
                  <em>[Hosting-Provider z. B. Vercel Inc. / Hetzner Online GmbH / Strato AG]</em>.
                  Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters
                  gespeichert. Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
                  potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
                  schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter
                  (Art. 6 Abs. 1 lit. f DSGVO).
                </p>

                <h2 style={{ fontSize: "22px", fontWeight: "600", marginTop: "35px", marginBottom: "15px", color: "var(--thm-black, #11161f)" }}>
                  3. Allgemeine Hinweise und Pflichtinformationen
                </h2>
                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Datenschutz
                </h3>
                <p>
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
                  dieser Datenschutzerklärung.
                </p>

                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Hinweis zur verantwortlichen Stelle
                </h3>
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  <br />
                  <strong>{siteConfig.company.name}</strong>
                  <br />
                  Ali Ramazan Yildirim
                  <br />
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zipCode} {siteConfig.address.city}
                  <br />
                  {siteConfig.address.country}
                  <br />
                  Telefon: {siteConfig.contact.phone}
                  <br />
                  E-Mail: {siteConfig.contact.email}
                </p>

                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Speicherdauer
                </h3>
                <p>
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
                  Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
                  berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
                  werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung
                  Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen).
                </p>

                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Rechte der betroffenen Person
                </h3>
                <p>
                  Sie haben nach der DSGVO folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                </p>
                <ul style={{ paddingLeft: "25px", listStyleType: "disc", marginBottom: "15px" }}>
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (&quot;Recht auf Vergessenwerden&quot;, Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruchsrecht gegen die Verarbeitung (Art. 21 DSGVO)</li>
                </ul>

                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Beschwerderecht bei der zuständigen Aufsichtsbehörde
                </h3>
                <p>
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                  Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in Baden-Württemberg ist der Landesbeauftragte für den
                  Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW).
                </p>

                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  SSL- bzw. TLS-Verschlüsselung
                </h3>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
                  Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
                  verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot;
                  auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>

                <h2 style={{ fontSize: "22px", fontWeight: "600", marginTop: "35px", marginBottom: "15px", color: "var(--thm-black, #11161f)" }}>
                  4. Datenerfassung auf dieser Website
                </h2>
                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Server-Log-Dateien
                </h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                  Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und
                  Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit
                  der Serveranfrage und IP-Adresse. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                  DSGVO.
                </p>

                <h3 style={{ fontSize: "18px", fontWeight: "600", marginTop: "20px", marginBottom: "10px", color: "var(--thm-black, #11161f)" }}>
                  Kontaktformular und Kontaktaufnahme per E-Mail / Telefon
                </h3>
                <p>
                  Wenn Sie uns per Kontaktformular, E-Mail oder Telefon Anfragen zukommen lassen, werden Ihre Angaben
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                  von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
                  mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                  erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
                  der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
