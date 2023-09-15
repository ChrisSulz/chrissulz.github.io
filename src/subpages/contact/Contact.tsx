import "./Contact.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Contact() {
  return (
    <>
      <Header/>
      <Navbar/>
      <main>
        <div className="kontakt-container">
          <h1>Kontakt</h1>
          <p>chris.sulzinger@gmail.com</p>
        </div>
      </main>
      <Footer/>
    </>
  );
}