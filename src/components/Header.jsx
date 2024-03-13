const Header = () => {
    return (
        <header className="flex flex-col ">
          <div className="flex justify-between items-center px-5 py-2">
            <div className="flex items-center">
            <img className="w-10" src="/logo.jpg " alt="logo" />
            <h3 className="px-5">MyTinerary</h3>
            </div>
            <img className="w-10 rounded" src="/usuarioGenerico.jpg" alt="usuario generico" />
          </div>
          <nav className="flex gap-5 items-center justify-center px-2 border border-transparent border-t-[#BDBDBD]">
            <a className="p-1 my-1.5 border border-transparent hover:border-b-[#BDBDBD]" href="#">HOME</a>
            <a className="p-1 my-1.5 border border-transparent hover:border-b-[#BDBDBD]" href="#">CITIES</a>
            <a className="p-1 my-1.5 border border-transparent hover:border-b-[#BDBDBD]" href="#">CONTACT</a>
          </nav>
      </header>
   )
}

export default Header;