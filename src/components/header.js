import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-20 h-40 w-full bg-zinc-900 md:h-40">
      <div className="mx-auto flex max-w-screen-xl flex-col justify-between px-10 md:flex-row">
        {/* Logo */}
        <Link href="/">
          <div className="mx-auto h-32 w-32 bg-lemn-logo bg-contain bg-no-repeat md:mx-0 md:h-40 md:w-48 md:bg-center"></div>
        </Link>
        {/* Menu */}
        <div className="flex items-center justify-center space-x-4 pb-6 text-xl md:pb-0">
          <a href="/#ProductList" className="hover:text-fireRed">
            Produse
          </a>
          <a href="/#faq-accordion" className="hover:text-fireRed">
            Informații
          </a>
          <Link href="/contact" className="hover:text-fireRed">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
