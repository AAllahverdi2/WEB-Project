import React from 'react'
import "./ElaqeMail.scss"
const containerStyle = {
    width: '1229px',
    height: '600px'
};

const center = {
    lat: -34.397,
    lng: 150.644
};
const ElaqeMail = () => {
    return (
        <div className='ss'>
             <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px", marginTop:"20px", width:"100%",fontSize:"30px"}}>
      <div className='boss' style={{width:"30%", height:"12px",backgroundColor:"#f6f6f6"}}></div>
      <div  style={{fontSize:"30px"}}><strong>Bizimlə əlaqə saxlayın</strong></div>
      <div className='boss'style={{width:"30%", height:"12px",backgroundColor:"#f6f6f6", }}></div>
      </div>
            <div className='mail__all'>
            <div className='map__text'>
<p>Əgər sizin sifarişinizlə bağlı hər hansı bir çətinlik yaşandısa, sifarişinizin detallarında dəyişiklik etmək, yaxud, sifarişinizi ləğv etmək istəyirsinizsə, o zaman bizimlə əlaqə saxlayaraq istəyinizi bildirin.</p>

<p>Biz sizə kömək etməyə hər zaman hazırıq!</p>
<p>Telefon: (+99412) 431 40 67</p>
<p>Mobile/Whatsapp: (+99451) 312 24 40  </p>
<p>E-mail: online@alinino.az
www.alinino.az </p>


            </div>
            <div className='map__div'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12158.813006734255!2d49.8379399!3d40.3711038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307db12c3f9531%3A0xfe401c39eeadef9!2sAli%20%26%20Nino%20Book%20Store!5e0!3m2!1sen!2saz!4v1707909683780!5m2!1sen!2saz" height="450" style={{ border: '0', width: '100%' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>

            
            </div>
            <div className='map__progs'>
                <img src="https://static-eu.insales.ru/files/1/593/7471697/original/facebook_9f7a2ba46fbc7ef0eb27e44acee88f53.png" alt="" />
                <img src="https://static-eu.insales.ru/files/1/594/7471698/original/instagram_8f080ba978580966c6b64eda8a4d3cc4.png" alt="" />
                <img src="https://static-eu.insales.ru/files/1/595/7471699/original/twitter_67c00585ff161698ea495903670d0ca1.png" alt="" />
                <img src="https://static-eu.insales.ru/files/1/596/7471700/original/youtube_95dbd6374c4c3aaec02bdfdf4e6108cf.png" alt="" />
                <img src="https://static-sl.insales.ru/files/1/7024/16112496/original/telegram_icon.png" alt="" />

            </div>
        </div>
    )
}

export default ElaqeMail
