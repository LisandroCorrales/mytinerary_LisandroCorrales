const CarrouselItem = ({ciudad}) => {
    return (
        <article className="relative w-4/5 " >
            <img 
            className="w-full h-80 object-cover object-top"
            src={ciudad.image} alt={"Imagen de " + ciudad.name } />

            <footer className="bg-[#5b5b5faf]	 absolute block w-full bottom-0 p-1">
                <h2 className="flex justify-center text-gray-100 font-bold font-serif text-2xl">{ciudad.name}</h2>
                <p className="flex justify-center text-gray-100 font-bold font-serif text-sm">{ciudad.country}</p>
            </footer>
        </article>



    )
};

export default CarrouselItem;