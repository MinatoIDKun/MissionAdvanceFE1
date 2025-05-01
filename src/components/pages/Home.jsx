import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardSection from '../organism/CardSection.jsx';
import Hero from '../molecules/Hero.jsx';
import Newsletter from '../molecules/Newsletter.jsx';
import NavbarFooter from '../layouts/NavbarFooter.jsx';


function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-baseBackground">
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4 lg:px-20">
          <section className="mb-16">
            <Hero />
          </section>
          
          <section className="mb-16">
            <CardSection />
          </section>
          
          <section className="mb-16">
            <Newsletter />
          </section>
        </div>
      </main>
      
      <NavbarFooter isLoggedIn/>
    </div>
  );
}

export default Home;