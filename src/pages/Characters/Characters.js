import Navegation from "../../components/Navegation/Navegation";
import SectionCards from "../../components/SectionCards/SectionCards";
import Filters from "../../components/Filters/Filters"

export default function Characters(){
    return(
        <div>
            <nav><Navegation hoja="Characters"/></nav>
            <main>
                <div>
                    <SectionCards/>
                </div>
            </main>
            
        </div>
    )
}