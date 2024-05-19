import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'
import ElaqeMail from '../../Pages/Main/ElaqeMail'
function Footer() {
  return (
    <div className='footer__all'>
      <div class="footer-wrapper snipcss-m74LD">
  <div class="container">
    <footer class="footer ">
      <div class="footer-bottom-wrapper row">
        <div class="cell-3 cell-6-sm cell-12-mc">
          <div class="title">
            Haqqımızda
          </div>
          <ul class="footer-menu menu level-1 insales-menu--loaded" data-menu-id="footer-menu">
            <li class="footer-menu-item menu-item level-1">
             <Link to="Elaqe">Elaqe ve Unvanlar</Link>
            </li>
            <li class="footer-menu-item menu-item level-1">
             <Link to="Xeberler">Xəbərler</Link>
            </li>
            <li class="footer-menu-item menu-item level-1">
             <Link to="Blog">Blog</Link>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="https://alinino.az/blogs/bizden-kitab-tovsiyesi" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Bizdən kitab tövsiyəsi
              </a>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/wishlist" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Seçilmişlər siyahısı
              </a>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/mobilnye-prilozheniya" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Mobil tətbiqlər
              </a>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/eli-ve-nino-nesriyyati-2" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                "Əli və Nino" nəşriyyatı
              </a>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/politika-konfidentsialnosti" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Gizlik siyasəti
              </a>
            </li>
          </ul>
        </div>
        <div class="cell-3 cell-6-sm cell-12-mc">
          <div class="title">
            Aksiyalar Və Endirimlər
          </div>
          <ul class="footer-menu menu level-1 insales-menu--loaded" data-menu-id="footer-menu">
            <li class="footer-menu-item menu-item level-1">
              <a href="https://alinino.az/page/daima-yenilenen-endirim-bloku-2" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Möhtəşəm endirimlər
              </a>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/pulsuz-catdirilma-furseti" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Pulsuz çatdırılma fürsəti
              </a>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/podarochnye-sertifikaty" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Hədiyyə Sertifikatları
              </a>
            </li>
          </ul>
        </div>
        <div class="cell-3 cell-6-sm cell-12-mc">
          <div class="title">
            Sifariş haqda
          </div>
          <ul class="footer-menu menu level-1 insales-menu--loaded" data-menu-id="footer-menu">
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/sifarisi-nece-etmek" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Sifarişi necə etmək?
              </a>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/payment" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Ödənişi necə etmək?
              </a>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/promocode" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Promokodu necə istifadə etməli?
              </a>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/bolgelerden-sifaris-etmek-qaydasi-2" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Bölgələrdən sifariş etmək qaydası
              </a>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/delivery" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Çatdırılma
              </a>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/serfeli-kredit" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Sərfəli taksit imkanı
              </a>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/ozun-gotur-xidmeti-nedir" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                "Özün götür" xidməti nədir?
              </a>
            </li>
          </ul>
        </div>
        <div class="cell-3 cell-6-sm cell-12-mc">
          <div class="title">
            Yardım
          </div>
          <ul class="footer-menu menu level-1 insales-menu--loaded" data-menu-id="footer-menu">
            <li class="footer-menu-item menu-item level-1">
              {/* <a href="/page/contacts" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Bizimlə əlaqə saxlayın
              </a> */}
              <Link to="ElaqeMail">Bizimke elaqe saxlayin</Link>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/sifarisimi-qaytarmaq-yaxud-deyismek-isteyirem" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Sifarişimi qaytarmaq (dəyişmək) istəyirəm
              </a>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/geyimlerin-rahat-qaytarilmasi" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Geyimlərin rahat qaytarılması
              </a>
            </li>
            <li class="footer-menu-item menu-item level-1">
              <a href="/page/pulsuz-deneme-nedir" class="footer-menu-link menu-link" data-menu-link-source="menu" data-menu-link-current="no">
                Pulsuz dənəmə nədir?
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div class="footer-bottom row custom-flex">
        <div class="cell-8 cell-8-md cell-6-sm cell-12-xs copyright">
          <div>
            Copyright © 2010-2024 Alinino.az. "Ali&amp;Nino" LLC Bütün hüquqlar qorunur
          </div>
          <br/>
          <a href="/page/oferta?lang=az">
          </a>
          <a href="/page/agreement?lang=az">
          </a>
        </div>
        <div class="payment-link-wrapper cell-4 cell-4-md cell-6-sm cell-12-xs">
          <img src="https://static.insales-cdn.com/assets/1/3171/6319203/1707219346/million_logo_105x32.png" alt="Azericard"/>
          <img src="https://static.insales-cdn.com/assets/1/3171/6319203/1707219346/cards_ico.jpg" alt="Visa &amp; Mastercard"/>
          <img src="https://static.insales-cdn.com/assets/1/3171/6319203/1707219346/_mir.jpg" alt="MIR" id="style-V6FZU" class="style-V6FZU"/>
          <br/>
          <br/>
          <a target="_blank" href="https://apps.apple.com/ca/app/ali-and-nino-bookhouse/id6447558579">
            <img src="https://static.insales-cdn.com/assets/1/3171/6319203/1707219346/IOS_App_Qr_Code.png" alt="QR Apple" id="style-eiYUj" class="style-eiYUj"/>
          </a>
          <a target="_blank" href="https://play.google.com/store/apps/details?id=alinino.bookhouse.az">
            <img src="https://static.insales-cdn.com/assets/1/3171/6319203/1707219346/Googleplay_Qr_Code.png" alt="QR GP" id="style-iRHos" class="style-iRHos"/>
          </a>
        </div>
        <div class="social-link-wrapper cell-4 cell-4-md cell-6-sm cell-12-xs">
          <ul class="social-menu">
            <li class="social-menu-item">
              <a target="blank" title="Facebook" href="https://www.facebook.com/aliandnino.azerbaijan" class="social-menu-link">
                <div class="fa fa-facebook fa-lg">
                </div>
              </a>
            </li>
            <li class="social-menu-item">
              <a target="blank" title="Instagram" href="https://www.instagram.com/ali_and_nino/" class="social-menu-link">
                <div class="fa fa-instagram fa-lg">
                </div>
              </a>
            </li>
            <li class="social-menu-item">
              <a target="blank" title="YouTube" href="https://www.youtube.com/channel/UCDFEScj7flj0VXff8s_TB0g" class="social-menu-link">
                <div class="fa fa-youtube fa-lg">
                </div>
              </a>
            </li>
            <li class="social-menu-item">
              <a target="blank" title="Twitter" href="https://twitter.com/Ali_and_Nino" class="social-menu-link">
                <div class="fa fa-twitter fa-lg">
                </div>
              </a>
            </li>
            <li class="social-menu-item">
              <a target="blank" title="telegram" href="https://t.me/ali_nino" class="social-menu-link">
                <div class="fa fa-telegram">
                </div>
              </a>
            </li>
            <li class="social-menu-item whatsapp">
              <a target="blank" title="whats-app" href="https://api.whatsapp.com/send?phone=994513122440">
                <img src="https://static.insales-cdn.com/files/1/1943/16131991/original/4202050chatlogosocialsocialmediawhatsapp-115638_115663.png" height="30"/>
                WhatsApp: dəstək
              </a>
            </li>
            <li class="social-menu-item banner_phone">
              <span>
                (+99412) 431 40 67
              </span>
              <span>
                (+99451) 312 24 40
              </span>
            </li>
          </ul>
        </div>
      </div> */}
    </footer>
  </div>
</div>
    </div>
  )
}

export default Footer

