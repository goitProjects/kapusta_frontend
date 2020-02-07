import React from 'react';
import VitaliiKalinbet from '../../assets/staff/VitaliiKalinbet.jpg';
import ViktoriiaUshakova from '../../assets/staff/ViktoriiaU.jpg';
import BorysD from '../../assets/staff/BorysD.jpg';
import OlgaS from '../../assets/staff/OlgaSavytska.jpg';
import VolodymyrP from '../../assets/staff/VolodymyrPotapenko.png';
import DmytryV from '../../assets/staff/DmytryV.jpg';
import YaroslavA from '../../assets/staff/DenisA.jpg';
import DenisB from '../../assets/staff/DenisB.jpg';
import Egor from '../../assets/staff/Egor.jpg';
import EugenRoy from '../../assets/staff/EugenRoy.jpg';
import s from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={s.contactus_div_main}>
      <ul className={s.contactus_ul}>
        <li className={s.contactus_li}>
          <img src={VitaliiKalinbet} alt="us" className={s.contactus_img} />
          <p className={s.contactus_name_p}>Виталий Калинбет</p>
          <p className={s.contactus_title_p}>Team Lead</p>
          <p className={s.contactus_email_p}>bosssvit@gmail.com</p>
        </li>
        <li className={s.contactus_li}>
          <img src={Egor} alt="us" className={s.contactus_img} />
          <p className={s.contactus_name_p}>Егор Васильев</p>
          <p className={s.contactus_title_p}>Product Owner</p>
          <p className={s.contactus_email_p}>egordelta@gmail.com</p>
        </li>
        <li className={s.contactus_li}>
          <img src={DenisB} alt="us" className={s.contactus_img} />
          <p className={s.contactus_name_p}>Денис Беляк</p>
          <p className={s.contactus_title_p}>Scrum Master</p>
          <p className={s.contactus_email_p}>denis.belyak@gmail.com</p>
        </li>
        <li className={s.contactus_li}>
          <img src={ViktoriiaUshakova} alt="us" className={s.contactus_img} />
          <p className={s.contactus_name_p}>Виктория Ушакова</p>
          <p className={s.contactus_title_p}>Frontend Developer</p>
          <p className={s.contactus_email_p}>iamushakova@gmail.com</p>
        </li>
        <li className={s.contactus_li}>
          <img src={BorysD} alt="us" className={s.contactus_img} />
          <p className={s.contactus_name_p}>Борис Демченко</p>
          <p className={s.contactus_title_p}>Frontend Developer</p>
          <p className={s.contactus_email_p}>demchenko_boris86@gmail.com</p>
        </li>
        <li className={s.contactus_li}>
          <img src={OlgaS} alt="us" className={s.contactus_img} />
          <p className={s.contactus_name_p}>Ольга Савицкая</p>
          <p className={s.contactus_title_p}>Frontend Developer</p>
          <p className={s.contactus_email_p}>о.savytska77@gmail.com</p>
        </li>
        <li className={s.contactus_li}>
          <img src={VolodymyrP} alt="us" className={s.contactus_img} />
          <p className={s.contactus_name_p}>Владимир Потапенко</p>
          <p className={s.contactus_title_p}>Frontend Developer</p>
          <p className={s.contactus_email_p}>vlarus@ukr.net</p>
        </li>
        <li className={s.contactus_li}>
          <img src={EugenRoy} alt="us" className={s.contactus_img} />
          <p className={s.contactus_name_p}>Евгений Рой</p>
          <p className={s.contactus_title_p}>Frontend Developer</p>
          <p className={s.contactus_email_p}>box.rz.box@gmail.com</p>
        </li>
        <li className={s.contactus_li}>
          <img src={DmytryV} alt="us" className={s.contactus_img} />
          <p className={s.contactus_name_p}>Дмитрий Велков</p>
          <p className={s.contactus_title_p}>Frontend Developer</p>
          <p className={s.contactus_email_p}>velkov55@gmail.com</p>
        </li>
        <li className={s.contactus_li}>
          <img src={YaroslavA} alt="us" className={s.contactus_img} />
          <p className={s.contactus_name_p}>Ярослав Адашян</p>
          <p className={s.contactus_title_p}>Project Manager</p>
          <p className={s.contactus_email_p}>adashyan27@gmail.com</p>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
