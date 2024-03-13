import LayoutMain from "./LayoutMain";
import {ciudades} from "../data/data";
import Carrousel  from "../components/Carrousel";


const Home = () => {

    

   return(
    <LayoutMain>
        <main className="grow flex justify-center items-center">    

            <Carrousel ciudades={ciudades} />

        </main>
    </LayoutMain>
   )
}

export default Home;
