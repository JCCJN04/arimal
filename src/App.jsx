import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import LocationContact from './sections/LocationContact'
import TrustFinalCTA from './sections/TrustFinalCTA'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import Products from './sections/Products'
import PetGallery from './sections/PetGallery'

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Products />
                <PetGallery />
                <Testimonials />
                <LocationContact />
                <TrustFinalCTA />
            </main>
            <Footer />
            <FloatingButtons />
            {/* Schema.org JSON-LD is rendered in index.html <head> for immediate crawling */}
        </div>
    )
}

export default App
