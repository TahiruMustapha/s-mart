"use client";
import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsInstagram,
} from "react-icons/bs";
import payment from "../../public/payment.png";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" w-full text-slate-100 bg-darkText">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            illo possimus sapiente maxime omnis, iusto adipisci modi minus quo
            necessitatibus officia laborum, deleniti dicta atque iure illum!
            Sunt exercitationem soluta illum distinctio in deserunt dignissimos
            cumque error quia, impedit assumenda.
          </p>
          <div className="flex items-center gap-x-4">
            <Link href='https://www.youtube.com/' target="_blank">
            <span className="socialLink">
              <BsYoutube />
            </span>
            </Link>
            
            <Link
              href={
                "https://www.linkedin.com/in/tahiru-mustapha-6a332a251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              }
              target="_blank"
            >
              <span className="socialLink">
                <BsLinkedin />
              </span>
            </Link>

            <Link href="https://www.instagram.com/mustapha_tahiru?igsh=OGQ5ZDc2ODk2ZA==" target="_blank">
              <span className="socialLink">
                <BsInstagram />
              </span>
            </Link>

            <Link href="https://x.com/tyru_mustapha?s=11&t=YG3iRORqN5Tj65_ejScQ9Q" target="_blank">
              <span className="socialLink">
                <BsTwitterX />
              </span>
            </Link>

            <Link href="https://github.com/TahiruMustapha" target="_blank">
              <span className="socialLink">
                <BsGithub />
              </span>
            </Link>
          </div>
        </div>
        <div>
            <p className="text-lg">Latest Post</p>
            <ul className= " text-sm font-light m-2 flex flex-col gap-y-2">
                <li className="flex flex-col">
                    <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">Where Music Is Headed Next</span>
                    <span className="text-orange-600">January 30, 2024</span>
                </li>
                <li className="flex flex-col">
                    <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">Where Music Is Headed Next</span>
                    <span className="text-orange-600">January 30, 2024</span>
                </li>
                <li className="flex flex-col">
                    <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">Where Music Is Headed Next</span>
                    <span className="text-orange-600">January 30, 2024</span>
                </li>
                <li className="flex flex-col">
                    <span className="text-slate hover:text-orange-600 cursor-pointer duration-200">Where Music Is Headed Next</span>
                    <span className="text-orange-600">January 30, 2024</span>
                </li>
            </ul>
        </div>
        <div>
            <p className="text-lg">Links</p>
            <ul className="text-base font-medium mt-2 flex flex-col gap-y-2">
                  <Link href={'/'}>
                  <li className=" hover:text-orange-600 cursor-pointer duration-200">Home</li>

                  </Link>
                  <Link href={'/cart'}>
                  <li className=" hover:text-orange-600 cursor-pointer duration-200">Cart</li>

                  </Link>
                  <Link href={'/about'}>
                  <li className=" hover:text-orange-600 cursor-pointer duration-200">About</li>

                  </Link>
                  <Link href={'/contact'}>
                  <li className=" hover:text-orange-600 cursor-pointer duration-200">Contact</li>

                  </Link>
                  <Link href={'/newsLetter'}>
                  <li className=" hover:text-orange-600 cursor-pointer duration-200">NewsLetter</li>

                  </Link>





            </ul>
        </div>
        <div>
            <p className="text-lg mb-2">Pay us with your trusted services</p>
            <Image 
            src={payment}
             alt="payment_img"
             className=" w-full h-10 object-cover"
             />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
