import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import "./Elaqe.scss"
const containerStyle = {
  width: '1229px',
  height: '600px'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

const Elaqe = () => {
  return (
    <div className='all__div'>
      <div className='elaqe__all'>
        <div className='w-100'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12158.813006734255!2d49.8379399!3d40.3711038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db12c3f9531%3A0xfe401c39eeadef9!2sAli%20%26%20Nino%20Book%20Store!5e0!3m2!1sen!2saz!4v1707909683780!5m2!1sen!2saz" height="450" style={{ border: '0', width: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
        <div className='elaqe__text'>
          <h2><strong>Alinino.az Sayti</strong></h2>
          <p style={{ marginTop: "20px" }}>Alinino.az saytı 10 ildən çoxdur ki, Azərbaycanda operativ satış və çatdırılma xidməti göstərən onlayn satış mağazasıdır. <br />
            Sayt öz müştərilərinə Azərbaycan, Türk, Rus, İngilis, Alman və Fransız dillərində kitablarla yanaşı, sərfəli qiymətlə minlərlə oyuncaq, elektronika, <br />
            keyfiyyətli kosmetika və parfümeriya, idman malları, məktəb ləvazimatları, Lego konstruktorları, dünyanın ən məşhur markalarından <br />
            (Ravensburger, Clementoni, Educo, Anatolian və s.) uşaqlar və böyüklər üçün pazllar, qadın geyimləri, qida məhsulları,<br />
            musiqi, ev tekstili, bağ mövsümünə dair hər şey və s. təqdim edir.</p>


          <p>Peşəkar və operativ çatdırılma xidməti sayəsində Alinino.az  saytı Azərbaycanın bütün rayon və şəhərlərinə, <br />
            Bakıda və dünyanın bütün ölkələrindəki bütün ünvanlara çatdırılmanı həyata keçirir.
            Sayt Bakı daxilində çatdırılmanı 24 saat ərzində təmin edir. </p>

          <p>
            Alinino.az saytı hər zaman öz müştərilərini düşünərək yüksək endirim kampaniyaları,
            fərqli endirim fürsətləri və müxtəlif kampaniyalar təşkil edir</p>
          <div className='elaqe__text__num'>
            <p>
              <strong> Əlaqə:</strong>
              <br />
              <br />

              Whatsap: (+99451) 312 24 40
              <br />
              <br />
              Tel: (+99412) 431 35 02
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Elaqe;

