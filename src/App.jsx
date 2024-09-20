import EbookCards from "./components/EbookCards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Header />

      <main className="App">
        <Hero />
        <EbookCards />
      </main>

      <Footer />
    </>
  );
}
