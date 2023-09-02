import './index.css'
import Header from '../Header'

const About = () => (
  <>
    <Header />
    <div className="home-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="about"
        className="sm-about-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="about"
        className="lg-about-img"
      />
    </div>
  </>
)

export default About
