const Footer = () => {
    return (
        <footer className="p-3 text-center bg-zinc-950"> 
         <nav className="flex flex-col items-center justify-center px-2 ">
            <a className="text-neutral-300 text-sm p-1 my-1.5 border border-transparent hover:border-b-[#BDBDBD]" href="#">HOME</a>
            <a className="text-neutral-300 text-sm p-1 my-1.5 border border-transparent hover:border-b-[#BDBDBD]" href="#">CITIES</a>
            <a className="text-neutral-300 text-sm p-1 my-1.5 border border-transparent hover:border-b-[#BDBDBD]" href="#">CONTACT</a>
          </nav>
          <div className="border border-transparent border-t-[#bdbdbdce]">
            <p className="p-2 text-xs text-neutral-400">©2024 • MyTinerary - <a className="hover:text-[#bdbdbdce]" href="https://www.linkedin.com/in/lisandrocorrales/">Web Design</a></p>
          </div>
        </footer>
    )
}

export default Footer;