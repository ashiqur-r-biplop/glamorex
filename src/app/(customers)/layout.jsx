import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";


export default function CustomerLayout({ children }) {
  return ( 
       <>
          <Navbar />
          {children}
          <Footer />
    </>
  );
}
