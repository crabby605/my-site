"use client";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "@/app/globals.css";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-[#12100e] text-[#d4df9e] p-6 items-center w-full relative">
            <nav className="absolute top-4 left-6 flex space-x-6">
                {["Home", "Projects", "Blog", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href="#"
                        className="hover:text-white hover:scale-110 transition-transform duration-200 ease-in-out"
                    >
                        {item}
                    </Link>
                ))}
            </nav>

            <header className="w-full border-b border-[#d4df9e] pb-4 text-center">
                <h1 className="text-4xl font-bold">vihaan.codes</h1>
            </header>

            <main className="w-full max-w-5xl flex flex-col items-center mt-6 flex-grow">
                <section className="w-full flex flex-col md:flex-row items-center md:items-start">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-semibold mb-2">About Me</h2>
                        <p className="mb-4">
                            Hi there!, so it looks like you&apos;ve stumbled upon my website! It must&apos;ve been a long journey, traveler.
                            Anyways, this is me Vihaan, I go by Crabby or Crabby605 on the internet, but you can call me Vihaan ^_^.
                            I assume looking at this site you&apos;ve gotten to know that I&apos;m not a good designer, but I can&apos;t do anything
                            about it.
                        </p>
                        <p>
                            I use Arch, by the way. And Debian. I wanna be a cybersecurity expert—maybe at Palo Alto or Cloudflare (if you&apos;re reading, please hire me).
                        </p>
                    </div>

                    <div className="w-64 h-64 mb-4 md:mb-0 md:ml-6">
                        <Image
                            src="/profile.png"
                            alt="My Picture"
                            width={256}
                            height={256}
                            className="rounded-full border-4 border-[#d4df9e]"
                        />
                    </div>
                </section>
            </main>

            <div className="absolute bottom-12 left-6">
                <Link
                    href="https://github.com/crabby605"
                    className="text-[#d4df9e] relative text-lg font-semibold transition-transform duration-300 ease-in-out hover:scale-110 group"
                >
                    Visit my GitHub →
                    <span className="block w-0 h-0.5 bg-[#d4df9e] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </Link>
            </div>

            <footer className="w-full border-t border-[#d4df9e] pt-4 text-center mt-auto">
                <div className="flex flex-wrap justify-center gap-4 w-full items-center">
                    {[
                        { name: "debian", link: "https://www.debian.org/" },
                        { name: "ublock", link: "https://ublockorigin.com/" },
                        { name: "nocookie", link: "" },
                        { name: "tor", link: "https://www.torproject.org/" },
                        { name: "github", link: "https://github.com/" },
                        { name: "doomrl", link: "https://drl.chaosforge.org/" },
                        { name: "firefoxget", link: "https://getfirefox.com/" },
                        { name: "nclinux", link: "" },
                    ].map((btn) => (
                        <Link
                            key={btn.name}
                            href={btn.link}
                            target="_blank"
                            className="transition-transform duration-200 ease-in-out hover:scale-110"
                        >
                            <Image src={`/${btn.name}.gif`} alt={btn.name} width={88} height={31} />
                        </Link>
                    ))}

                    <iframe
                        src="https://increm.net/badge?key=crabbyscounter"
                        title="incremnet badge"
                        width="88"
                        height="31"
                        style={{ border: "none", background: "url('https://increm.net/bg.png')" }}
                    ></iframe>

                    <div className="flex space-x-2">
                        <Link
                            href="https://webring.hackclub.com/"
                            id="previousBtn"
                            className="text-[#d4df9e] hover:text-white hover:scale-110 transition-transform duration-200 ease-in-out"
                            title="Previous"
                        >
                            ‹
                        </Link>
                        <Link href="https://webring.hackclub.com/" className="webring-logo">
                            <Image src="/webring-logo.png" alt="Hack Club Webring" width={88} height={31} />
                        </Link>
                        <Link
                            href="https://webring.hackclub.com/"
                            id="nextBtn"
                            className="text-[#d4df9e] hover:text-white hover:scale-110 transition-transform duration-200 ease-in-out"
                            title="Next"
                        >
                            ›
                        </Link>
                    </div>
                </div>
            </footer>
            <Script src="https://webring.hackclub.com/embed.min.js" strategy="lazyOnload" />
        </div>
    );
}
