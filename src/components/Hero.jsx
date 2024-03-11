const Hero = () => {
    return (
        <section className="relative">
            <img className="w-full max-h-64	object-cover " src="/hero.jpg" alt="Welcome" />
            <div className=" absolute z-10 bottom-5 left-5  ">
                <h2 className="text-4xl	 p-1 text-yellow-950 font-semibold">MyTinerary</h2>
                <h3 className="italic text-lg pb-5 text-yellow-950">"Find your perfect trip, designed by insiders who know and love their cities."</h3>
                <div className="text-center ">
                    <a href="#" className="border rounded p-2   border-amber-800 bg-amber-700 text-slate-300">Check Cities Now!</a>
                </div>
            </div>
        </section>
    )
}

export default Hero