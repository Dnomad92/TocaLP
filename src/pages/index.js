import * as React from "react"
import Hero from '../components/hero';
import Services from '../components/services';
import Benefits from '../components/benefits';
import Portfolio from '../components/portfolio';
import Feedback from '../components/feedback';
import About from '../components/about'
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Benefits />
      <Portfolio />
      <Feedback />
      <About />
      <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Toca da Design</title>
