// import { Footer } from 'flowbite-react';
// import { Link } from 'react-router-dom';
// import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
// export default function FooterCom() {
//   return (
//     <Footer container className=''>
//       <div className='w-full max-w-7xl mx-auto'>
//         <Footer.Divider />
//         <div className='w-full sm:flex sm:items-center sm:justify-between'>
//           <Footer.Copyright
//             href='#'
//             by="Tech Trends"
//             year={new Date().getFullYear()}
//           />
//           <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
//             <Footer.Icon href='#' icon={BsFacebook}/>
//             <Footer.Icon href='#' icon={BsInstagram}/>
//             <Footer.Icon href='#' icon={BsTwitter}/>
//             <Footer.Icon href='#' icon={BsGithub}/>
//             <Footer.Icon href='#' icon={BsDribbble}/>
//           </div>
//         </div>
//       </div>
//     </Footer>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

const FooterLink = ({ href, children }) => (
  <Link to={href} className="hover:underline">
    {children}
  </Link>
);

const SocialIcon = ({ href, icon: Icon }) => (
  <a href={href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
    <Icon className="w-5 h-5" />
  </a>
);

export default function FooterCom() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
              Tech Trends
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0">
            <div className="flex space-x-6">
              <SocialIcon href="#" icon={BsFacebook} />
              <SocialIcon href="#" icon={BsInstagram} />
              <SocialIcon href="#" icon={BsTwitter} />
              <SocialIcon href="#" icon={BsGithub} />
              <SocialIcon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-4">
                <li><FooterLink href="/about">About</FooterLink></li>
                <li><FooterLink href="#">Careers</FooterLink></li>
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li><FooterLink href="#">Privacy Policy</FooterLink></li>
                <li><FooterLink href="#">Terms of Service</FooterLink></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <FooterLink href="#t">Contact</FooterLink>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Tech Trends. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}