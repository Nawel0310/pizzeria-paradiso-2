import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Especialidades from '@/components/Especialidades';
import Testimonios from '@/components/Testimonios';
import Faq from '@/components/Faq';
import Contacto from '@/components/Contacto';

export default function HomePage() {
  return (
    <>
      {/*<Hero/>*/}
      <AboutUs />
      <Especialidades />
      <Testimonios />
      <Faq />
      <Contacto />
    </>
  );
}
