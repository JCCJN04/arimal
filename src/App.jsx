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

            {/* Schema.org markup for LocalBusiness */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "VeterinaryCare",
                    "name": "Veterinaria Arimal",
                    "image": "https://arimal.com.mx/logo.png",
                    "@id": "https://arimal.com.mx",
                    "url": "https://arimal.com.mx",
                    "telephone": "8127711270",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Av. Cumbres Elite 299-Loc. 106, Sector Villas",
                        "addressLocality": "Monterrey",
                        "addressRegion": "NL",
                        "postalCode": "64349",
                        "addressCountry": "MX"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 25.756789,
                        "longitude": -100.412345
                    },
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                        ],
                        "opens": "09:00",
                        "closes": "19:00"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "50"
                    }
                })}
            </script>
        </div>
    )
}

export default App
