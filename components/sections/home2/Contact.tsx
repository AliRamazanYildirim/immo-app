import CounterUp from "@/components/elements/CounterUp";

export default function Contact() {
  return (
    <>
      {/*Start Contact One */}
      <section className="contact-one">
        <div
          className="contact-one__bg"
          style={{
            backgroundImage: "url(/assets/img/background/contact-v1-bg.webp)",
          }}
        >
          <div className="contact-one__counter">
            <ul>
              <li>
                <div className="content-box">
                  <h2 className="count">
                    <CounterUp end={48} /> <span className="plus">+</span>
                  </h2>
                  <p>
                    Architects and <br />
                    engineers
                  </p>
                </div>
              </li>
              <li>
                <div className="content-box">
                  <h2 className="count">
                    <CounterUp end={256} /> <span className="plus">+</span>
                  </h2>
                  <p>
                    Awards for architectural <br />
                    excellence
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="contact-one__pattern"
          style={{
            backgroundImage: "url(/assets/img/pattern/contact-v1-pattern.webp)",
          }}
        ></div>
        <div className="contact-one__img">
          <img src="/assets/img/resource/contact-v1-img1.webp"
            alt="Contact Modern Architecture" decoding="async" loading="lazy" width={502} height={690} />
        </div>
        <div className="container clearfix">
          <div className="contact-one__inner">
            <div
              className="contact-one__form wow animated fadeInRight"
              data-wow-delay="0.1s"
            >
              <div className="title-box">
                <p>WE READY TO HELP</p>
                <h2>Have Any Question?</h2>
              </div>

              <form action="#">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Write Your Message" required></textarea>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="button-box">
                      <button
                        className="thm-btn"
                        type="submit"
                        data-loading-text="Please wait..."
                      >
                        <span className="txt">SEND YOUR MESSAGE</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*End Contact One */}
    </>
  );
}
