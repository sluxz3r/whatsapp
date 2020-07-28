import React from 'react';
import { Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import './App.css';
import Tab from './whatsapp'
import logo1 from './1.jpg';
import logo2 from './2.jpg';
import logo4 from './4.jpg';
import logo5 from './5.jpg';
import logo6 from './6.jpg';
import logo7 from './7.jpg';
import logo8 from './8.jpg';
import logo9 from './9.jpg';
import logo10 from './10.jpg';
import logo11 from './11.jpeg';
import logo12 from './12.jpg';
import logo13 from './13.jpg';
import logo14 from './14.jpg';
import logo15 from './15.jpg';
import logo16 from './16.jpg';
import logo17 from './17.jpeg';
import logo18 from './18.png';
import testi1 from './testi-1.jpeg';
import testi2 from './testi-2.jpeg';
import testi3 from './testi-3.jpeg';

function App() {
  const chatme = () => {
    window.open('https://api.whatsapp.com/send?phone=6283136805581&text=Hallo%20admin,%20mau%20tanya%20promo%20minyak%20lintah%20hitam%20papua%20ORIGINAL%20nya%20dong')
  }
  return (
    <div className="App">
      <div className="App-border">
        <img className="App-image" src={logo1} alt="Logo-1" />
        <h1 className="App-title">DIBACA SAMPAI SELESAI</h1>
        <img className="App-image" src={logo2} alt="Logo-2" />
        <h2 className="App-textbig">Dapatkan PROMO POTONGAN ONGKIR</h2>
        <h2 className="App-textbig">(KHUSUS HARI INI !!!)</h2>
        <h2 className="App-textbig">Spesial Promo Hari Ini</h2>
        <h2 className="App-textstrike">Rp 200.000,-</h2>
        <h2 className="App-textbig">Menjadi</h2>
        <h2 className="App-textbig">Rp 150.000,-</h2>
        <h3 className="App-textbig">(belum termasuk ongkir)</h3>
        <h1 className="App-title">+</h1>
        <h2 className="App-textbig">PROMO Beli 1 Dapat 2</h2>
        <h2 className="App-text">Harga Lebih Murah, Beli 2 dapat 4, Beli 3 dapat 1box isi 6. Ajak Teman kamu untuk mendapatkan harga spesial dari kami.</h2>
        <img className="App-image" src={logo18} alt="Logo-18" onClick={chatme} />
        <img className="App-image" src={logo11} alt="Logo-11" />
        <img className="App-image" src={logo17} alt="Logo-17" />
        <img className="App-image" src={logo4} alt="Logo-4" />
        <img className="App-image" src={logo5} alt="Logo-5" />
        <img className="App-image" src={logo6} alt="Logo-6" />
        <img className="App-image" src={logo7} alt="Logo-7" />
        <img className="App-image" src={logo8} alt="Logo-8" />
        <h2 className="App-textbig">Disclaimer</h2>
        <h2 className="App-text">Hasil bisa berbeda beda, tergantung metabolisme tubuh masing masing individu, ada yang cepat tapi ada juga yang lambat. tetapi hasil dari penggunaannya pasti akan memberikan hasil yang positif apabila anda menggunakannya dan membuktikannya sendiri.</h2>
        <img className="App-image" src={logo9} alt="Logo-9" />
        <img className="App-image" src={logo10} alt="Logo-10" />
        <img className="App-image" src={testi1} alt="Testi-1" />
        <img className="App-image" src={testi2} alt="Testi-2" />
        <img className="App-image" src={testi3} alt="Testi-3" />
        <img className="App-image" src={logo12} alt="Logo-12" />
        <h2 className="App-textbig">Bagai mana cara memesannya?</h2>
        <h2 className="App-textbig">Silahkan hubungi kami di 083136805581 dengan format pemesanan mau pesan berapa botol, nama, nomor hp aktif, alamat lengkap (desa, jalan, RT/RW, nomor/blok rumah, kecamatan, kabupaten, provinsi), akan melakukan pembayaran ke BNI/BRI/BCA/MANDIRI/Bayar Ditempat COD</h2>
        <br />
        <h2 className="App-textbig">KURIR PENGIRIMAN</h2>
        <img className="App-image-sm" src={logo13} alt="Logo-13" />
        <br />
        <h2 className="App-textbig">METODE PEMBAYARAN</h2>
        <img className="App-image-sm" src={logo14} alt="Logo-14" />
        <br />
        <img className="App-image" src={logo15} alt="Logo-15" />
        <img className="App-image" src={logo16} alt="Logo-16" />
      </div>
      <Fab
        icon={<Tab />}
        position={{bottom: 18, right: 18}}
        text="Order via Whatsapp"
        event="click"
        onClick={chatme}
      />
    </div>
  );
}

export default App;
