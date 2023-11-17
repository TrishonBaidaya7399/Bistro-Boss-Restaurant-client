// import PropTypes from 'prop-types';
import { FaFacebookF,FaInstagram,FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
<footer className=''>
<div className="grid grid-cols-1 md:grid-cols-2 text-white">
  <div className="bg-[#1F2937] p-[80px] text-center flex flex-col items-center justify-center">
      <h1 className="text-2xl pb-3 font-bold">CONTACT US</h1>
      <p className="">123 ABS Street, Uni 21, Bangladesh</p>
      <p className="">+88 123456789</p>                     
      <p className="">Mon - Fri: 08:00 - 22:00</p>                     
      <p className="">Sat - Sun: 10:00 - 23:00</p>                     
  </div>
  <div className="bg-[#111827] p-[80px] text-center flex flex-col items-center justify-center">
      <h1 className="text-2xl pb-3 font-bold">CONTACT US</h1>  
      <h1 className="">Join us on social media</h1> 
      <div className="flex gap-6 pt-4">
        <FaFacebookF className='text-2xl'/>
        <FaInstagram className='text-2xl'/>
        <FaTwitter className='text-2xl'/>
      </div> 
  </div>
</div>

<div className="footer footer-center p-4 bg-black text-white">
  <aside>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </aside>
</div>

</footer>
    );
};

Footer.propTypes = {
    
};

export default Footer;