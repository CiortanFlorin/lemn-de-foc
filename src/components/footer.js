import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <section id="footer" className="bg-zinc-900 md:p-5">
      {/* Footer Container */}
      <div className="mx-auto flex max-w-screen-lg flex-col space-y-3 p-5 md:flex-row md:justify-between">
        {/* Footer Menu */}
        <div className="flex flex-col items-center space-y-3 text-xl md:flex-row md:space-x-3 md:space-y-0">
          <a href="/#ProductList" className="hover:text-fireRed">
            Produse
          </a>
          <a href="/#faq-accordion" className="hover:text-fireRed">
            Informații
          </a>
          <a href="/contact" className="hover:text-fireRed">
            Contact
          </a>
          {/* Media Icons Menu */}
        </div>
        {/* Social Media Icons */}
        <div className="flex flex-row justify-center space-x-5">
          <Link href="https://www.facebook.com/metalemn/">
            <svg
              className="fill-white hover:fill-fireRed"
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
              />
            </svg>
          </Link>
          <Link href="https://www.olx.ro/d/oferta/vand-lemn-foc-fag-si-salcie-si-plop-esenta-moale-si-esenta-tare-taiate-IDdR1Oj.html?reason=seller_profile">
            <Image
              className="bg-white hover:bg-fireRed"
              src="/olx.svg"
              alt=""
              height={35}
              width={35}
            />
          </Link>
        </div>
      </div>
      <div className="block pb-3 text-center text-zinc-600 md:mx-auto md:max-w-screen-lg md:pr-5 md:text-right">
        Design by: florin.ciortan@hotmail.com
      </div>
    </section>
  );
}
