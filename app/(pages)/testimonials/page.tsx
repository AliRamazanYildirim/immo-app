import Layout from "@/components/layout/Layout";
const testimonialsData = [
  {
    name: "Marcus Vance",
    role: "Commercial Property Client",
    img: "assets/img/testimonial/testimonials-v2-img1.jpg",
    text: "ARY GROUP delivered our mixed-use commercial building with uncompromising structural precision and complete cost transparency. Their turnkey general contracting and on-site supervision standards are truly outstanding.",
  },
  {
    name: "Janes Cooper",
    role: "Private Villa Owner",
    img: "assets/img/testimonial/testimonials-v2-img2.jpg",
    text: "The interior architecture and spatial flow in our residence are breathtaking. The bespoke joinery, acoustic balance, and curated natural stone and oak materiality far exceeded our highest expectations.",
  },
  {
    name: "David Martinez",
    role: "Corporate Office Client",
    img: "assets/img/testimonial/testimonials-v2-img3.jpg",
    text: "Their seamless 3D BIM modeling and thorough regulatory documentation made navigating complex building permits completely effortless. An exceptional partner for modern architectural engineering.",
  },
  {
    name: "Sophia Laurent",
    role: "Historic Estate Owner",
    img: "assets/img/testimonial/testimonials-v2-img4.jpg",
    text: "Renovating our historic building under strict preservation guidelines required delicate craftsmanship. ARY GROUP modernized the energetic envelope and heating systems while honoring the original heritage facade.",
  },
  {
    name: "Alexander Wright",
    role: "Residential Construction Client",
    img: "assets/img/testimonial/testimonials-v2-img5.jpg",
    text: "Strict on-site safety protocols, rigorous milestone execution, and daily subcontractor supervision ensured that our 45-unit residential complex was constructed and handed over right on schedule.",
  },
  {
    name: "Clara Schmidt",
    role: "Boutique Hotel General Manager",
    img: "assets/img/testimonial/testimonials-v2-img6.jpg",
    text: "Our guests constantly praise the ambient lighting design and tranquil spatial harmony. ARY GROUP brought refined architectural elegance and custom millwork to life in every guest suite and lobby.",
  },
];

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={1}
        breadcrumbTitle="Testimonials"
        breadcrumbBg="assets/img/testimonial/page-header-bg.jpg"
      >
        <div>
          {/*Start Testimonials Two */}
          <section className="testimonials-two testimonials-two--testimonials">
            <div className="container">
              <div className="row">
                {testimonialsData.map((item, index) => (
                  <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="testimonials-two__single">
                      <div className="testimonials-two__single-top">
                        <div className="img-box">
                          <img src={item.img} alt={item.name} />
                        </div>

                        <div className="icon-box">
                          <span className="icon-quote"></span>
                        </div>
                      </div>

                      <div className="testimonials-two__single-text">
                        <p>{item.text}</p>
                      </div>

                      <div className="testimonials-two__single-bottom">
                        <h3>{item.name}</h3>
                        <p>{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/*End Testimonials Two */}

          {/*Start Cta One */}
          <section className="cta-one">
            <div
              className="cta-one__pattern"
              style={{
                backgroundImage: "url(assets/img/pattern/cta-v1-pattern.png)",
              }}
            ></div>
            <div className="container">
              <div className="cta-one__inner">
                <div className="cta-one__content">
                  <h2>
                    We are Always Ready to Help You <br />& Answer Your
                    Questions
                  </h2>
                </div>

                <div className="cta-one__btn">
                  <a className="thm-btn" href="#">
                    <span className="txt">SERVICE MORE</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* End Cta One*/}
        </div>
      </Layout>
    </>
  );
}
