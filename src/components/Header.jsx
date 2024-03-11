const Header = () => {
    return (
        <header className="flex justify-between px-5 py-2 bg-gray-800 items-center">
          <img className="w-12" src="/logo.jpg " alt="logo" />
          <nav className="flex gap-5 items-center text-stone-200 px-2">
            <a className="rounded-lg border-solid border-2 border-gray-600 p-1.5" href="#">Home</a>
            <a className="rounded-lg border-solid border-2 border-gray-600 p-1.5" href="#">Cities</a>
            <a className="rounded-lg border-solid border-2 border-gray-600 p-1.5" href="#">Contact</a>
            <img className="w-10 rounded" src="/usuarioGenerico.jpg" alt="usuario generico" />
          </nav>
      </header>
   )
}

export default Header;