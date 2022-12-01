import React from 'react'
import Frame from '../images/Frame.png'
import Location from '../images/map-pin.png'
import Phone from '../images/phone.png'
import Mail from '../images/mail.png'
import Twitter from '../images/tt.png'
import Facebook from '../images/fb.png'
import Linkedin from '../images/linkedin.png'
import Youtube from '../images/yt.png'
import Insta from '../images/insta.png'
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer>
        <img src={Frame} alt="" className='frame-img'/>



        <div className='up-footer'>

            <div className='upfooter-s1 upfooter-section'>

            <div>
            <img src={Location} alt="" className='up-footer-img'/>
            <p className='up-footer-p'>Avenida dos Trabalhadores do Job Coach, Nº123, 3Dto 1234-567, Freguesia Santa Maria Rita</p>
            </div>

            <div>
            <img src={Phone} alt="" className='up-footer-img'/>
            <p className='up-footer-p'>+351 912 345 678</p>
            </div>

            <div>
            <img src={Mail} alt="" className='up-footer-img'/>
            <p className='up-footer-p'>geral@jobcoach.pt</p>
            </div>


            </div>



        </div>


        <hr className='footer-hr'/>

        <div className='bottom-footer'>
            <p>© JobCoach 2022</p>

            <div className='footer-allmedia'>
            <img src={Twitter} alt="" className='footer-media'/>
            <img src={Youtube} alt="" className='footer-media'/>
            <img src={Insta} alt="" className='footer-media'/>
            <img src={Linkedin} alt="" className='footer-media'/>
            <img src={Facebook} alt="" className='footer-media'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer