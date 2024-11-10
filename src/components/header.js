import Link from "next/link";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="fixed top-0 z-20 w-full bg-zinc-900">
      <div className="mx-auto flex h-32 max-w-screen-xl lg:h-36 flex-row justify-between px-10">
        {/* Logo */}
        <Link href="/">
          <div className="mx-auto h-32 w-32 bg-lemn-logo bg-contain bg-no-repeat lg:mx-0 lg:h-36 lg:w-48 lg:bg-center"></div>
        </Link>
        {/* Menu */}
        <Navbar />
      </div>
    </header>
  );
}
