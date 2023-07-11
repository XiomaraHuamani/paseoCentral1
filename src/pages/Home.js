import { Cine } from "../components/Cine/Cine";

import { Footer } from "../components/Footer/Footer";
import { Cartillas } from "../components/Cartillas/Cartillas";
import { Eventos } from "../components/Eventos/Eventos";
import { SliderArtistas } from "../components/SliderArtistas/SliderArtistas";
import { Cards } from "../components/CardArtistas/Cards";
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import {SliderInfo} from "../components/SliderInfo/SliderInfo";
import { Show_infantiles } from "../components/show_infantiles/Show_infantiles";
import { Restaurantes } from "../components/Restaurantes/Restaurantes";
import { Conciertos } from "../components/Conciertos/Conciertos";

function Home() {
    return (
        <div>
            <Navbar/>
            <Header />
            <Cartillas/>
            <Cards/>
            <Conciertos />
            <SliderInfo/>
            <Cine/>
            <Restaurantes />
            <Show_infantiles/>
            <Footer/>
        </div>
    );

}

export default Home;