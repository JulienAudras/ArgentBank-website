import Header from "../components/Header"
import Footer from "../components/Footer"
import "../style/style.css"

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <Header />
      <main>
        <div className="hero">
          <section className="hero__content">
            <h2 className="hero__content sr-only" >Promoted Content</h2>
            <p className="hero__content--subtitle">No fees.</p>
            <p className="hero__content--subtitle">No minimum deposit.</p>
            <p className="hero__content--subtitle">High interest rates.</p>
            <p className="hero__content--text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          <h2 className="features sr-only">Features</h2>
          <div className="features__item">
            <img 
              src="/images/icon-chat.png" 
              alt="Chat Icon" 
              className="features__item--icon" />
            <h3 className="features__item--title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div className="features__item">
            <img
              src="/images/icon-money.png"
              alt="Chat Icon"
              className="features__item--icon"
            />
            <h3 className="features__item--title">More savings means higher rates</h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div className="features__item">
            <img
              src="/images/icon-security.png"
              alt="Chat Icon"
              className="features__item--icon"
            />
            <h3 className="features__item--title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage