import Navbar from "./components/navbar/Navbar";
import Programa from "./components/programa/Programa";
import PorQueSerPartner from "./components/partner/PorQueSerPartner";
import Asociarte from "./components/asociarte/Asociarte";
import QuienPuedeSerPartner from "./components/quien/QuienPuedeSerPartner";
import TresPasos from "./components/pasos/TresPasos";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Programa />
        <PorQueSerPartner />
        <Asociarte />
        <QuienPuedeSerPartner />
        <TresPasos />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
