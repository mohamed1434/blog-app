import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://logopond.com/logos/f552bf266653ebe68a5a99113a8989bc.png"
            alt="logo"
            width={50}
            height={50}
            // style={{ borderRadius: "9999px" }}
            className="rounded-full"
          />
        </Link>
        <h1>Hamdoon</h1>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Contact me, to start making blogs
        </Link>
      </div>
    </header>
  );
}

export default Header;
