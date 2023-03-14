import qrCode from "../assets/image-qr-code.png";
import "./Card.css";

export function Card() {
  return (
    <section className="card">
      <img src={qrCode} alt="Imagem de QR Code" />
      <strong>Improve your front-end skills by building project</strong>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </section>
  );
}
