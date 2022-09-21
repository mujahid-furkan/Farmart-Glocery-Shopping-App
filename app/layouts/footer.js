import FooterCard from "../components/footerCard"
import {FiPhoneCall} from 'react-icons/fi'
import {AiOutlineHome,AiOutlineMail} from 'react-icons/ai'
import Link from "next/link"
import Button from "../components/shared/Button"
const Footer = () => {
  return (
    <footer className="bg-white border-t ">
      <div className="container">
        {/* footer infos */}
        <div className="flex flex-wrap space-y-4 pt-8 pb-10 border-b justify-between items-center">
          <FooterCard
          img="/icons/f (1).svg"
          title='Free Shipping'
          subtitle='For all orders over $200'
          />
            <FooterCard
          img="/icons/f (2).svg"
          title='1 & 1 Returns'
          subtitle='Cancellation after 1 day'
          />
            <FooterCard
          img="/icons/f (3).svg"
          title='100% Secure Payment'
          subtitle='Gurantee secure payments'
          />
            <FooterCard
          img="/icons/f (4).svg"
          title='24/7 Dedicated Support'
          subtitle='Anywhere & anytime'
          />
            <FooterCard
          img="/icons/f (5).svg"
          title='Daily Offers'
          subtitle='Discount up to 70% OFF'
          />
            
        
        </div>
        {/* footer widget */}
        <div className="my-10 flex flex-wrap justify-between">
          {/* contact */}
          <div className="max-w-sm">
            <h2 className="text-xl font-bold mb-5">Farmart - Your Online Food & Glocery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus viverra iaculis. Etiam vulputate et justo eget scelerisque.</p>
           <div className="mt-10 space-y-2">
           <span className="flex">
              <FiPhoneCall className="text-color mt-[5px]"/>
              <div className="ml-4">
              <p>Hotline 24/7:</p>
              <h3 className="text-2xl font-bold">(+880) 1878586303</h3>
              </div>
              </span>

              <span className="flex !mt-5">
              <AiOutlineHome className="text-color mt-[5px]"/>
              <address className="ml-4 text-color not-italic"> Sonagazi, Feni 3900 , Bangladesh</address>
              </span>
              
              <span className="flex">
              <AiOutlineMail className="text-color mt-[5px]"/>
              <p className="ml-4">support.mujahid@gmail.com</p>
              </span>
           </div>

          </div>
          {/* links */}
          <div className="mt-5 md:mt-0">
              <h2 className="text-xl mb-6 font-bold">Useful Links</h2>
              <ul className="space-y-5">
              <FooterLink href='/about' title='About Us'/>
              <FooterLink href='/contact' title='Contact Us'/>
              <FooterLink href='/help-center' title='Help Center'/>
              <FooterLink href='/policy' title='Policy'/>
              <FooterLink href='/flash-sell' title='Flash Sell'/>
              <FooterLink href='/career' title='Career'/>
              </ul>
          </div>
          
           {/* help center */}
           <div className="mt-5 md:mt-0">
              <h2 className="text-xl mb-6 font-bold">Help Center</h2>
              <ul className="space-y-5">
              <FooterLink href='/payment' title='Payments'/>
              <FooterLink href='/shipping' title='Shipping'/>
              <FooterLink href='/product-returns' title='Product Returns'/>
              <FooterLink href='/faq' title='FAQ'/>
              <FooterLink href='/checkout' title='Checkout'/>
              <FooterLink href='/other-issues' title='Other Issues'/>
              </ul>
          </div>

            {/* farmart business */}
          <div className=" mt-5 md:mt-0">
              <h2 className="text-xl mb-6 font-bold">Farmart Busines</h2>
              <ul className="space-y-5">
              <FooterLink href='/payment' title='Sell On Farmart'/>
              <FooterLink href='/shipping' title='Affiliate Program'/>
              <FooterLink href='/product-returns' title='Our Suppliers'/>
              <FooterLink href='/faq' title='Accessibility'/>
              <FooterLink href='/checkout' title='Advertise With Us'/>
              </ul>
          </div>

          {/* newsletter */}
          <div className="lg:max-w-sm mt-5 md:mt-0">
            <h2 className="text-lg font-bold mb-6">Farmart Newsletter</h2>
            <p className="text-lg mb-4">Register now to get updates on promotions and coupns. Don’t worry! We not spam</p>
           <div className="flex items-center mt-5">
           <div className="flex items-center flex-1 space-x-3 border border-gray-400 p-5 rounded">
             <span> 
              <AiOutlineMail className="text-color text-xl"/>
             </span>
             <input className="outline-none border-none bg-transparent " type="text" placeholder="Your Email"/>
             
            </div>
            <Button className='self-stretch' title='Subscribe'></Button>
           </div>
          </div>
         
        </div>
        {/* copyright */}
        <div className="py-8 flex flex-wrap space-y-3 justify-center md:justify-between items-center border-t">
          <p className="text-sm">
            {new Date().getFullYear()} 
            <a href='#' className="underline">Mujahidul islam</a> .All Right Reserved.</p>
          <img src="/images/footer-new-payment.png" alt="" />
        </div>
      </div>
    </footer>
    )
}


const FooterLink=({href='#',title})=>(
  <li>
      <Link href={href}>
       <a className="text-xl" href={href}>{title}</a>
      </Link>
  </li>
)

export default Footer