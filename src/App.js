import qrCode from './images/image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="card">
          <img src={qrCode} className="qrCode" width="100%" height="100%" alt="QR Code" />
          <h2 className="titleText">Improve your front-end skills by building projects</h2>
          <p className="subTitleText">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </section>
      </header>
    </div>
  );
}

export default App;
