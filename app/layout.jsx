import "bootstrap/dist/css/bootstrap.min.css"; // Estilos de Bootstrap
import "../styles/styles.css";
import "../styles/buttonStyles.css";

import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/*export const metadata={
  title: "Pizzeria Paradiso",
  description: "Pizzeria de única calidad ubicada en Buenos Aires, Argentina",
  keywords: "Pizzeria, Buenos Aires, Argentina, Calidad, Sabor, Buen Precio",
  author: "Nahuel A. Barbaro"
}*/

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


export const metadata = {
  title: "Pizzería Paradiso | Auténtica Pizza Artesanal en Buenos Aires",
  description:
    "Disfruta de pizzas artesanales con ingredientes frescos y tradición italiana. Delivery, para llevar o reserva tu mesa en Pizzería Paradiso en Buenos Aires, Argentina.",
  keywords:
    "Pizzería, Pizza artesanal, Buenos Aires, Argentina, Tradición Italiana, Delivery de pizzas, Reservas, Ingredientes frescos, Pepperoni, Cuatro Quesos, Sabor único",
  author: "Nahuel A. Barbaro",
  openGraph: {
    title: "Pizzería Paradiso | El Sabor de Italia en Buenos Aires",
    description:
      "Desde 1995, traemos la tradición italiana a tu mesa con pizzas artesanales hechas con amor. Pide delivery o visita nuestro local en Buenos Aires.",
    url: "${BASE_URL}",
    type: "website",
    images: [
      {
        url: "/app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Pizza Pepperoni Artesanal en Pizzería Paradiso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizzería Paradiso | El Sabor de Italia en Buenos Aires",
    description:
      "Descubre las mejores pizzas artesanales con ingredientes frescos y tradición italiana. Pide ahora o reserva tu mesa en Buenos Aires.",
    image: "/app/opengraph-image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>

        {/*Scripts!*/}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
