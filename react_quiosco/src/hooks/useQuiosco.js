import { useContext } from "react";
import QuioscoContext from "../context/QuioscoProvider";

const useQuiosco = () =>{
    /* con esto tendra acceso a la informacion del quiosco context provider*/
    return useContext(QuioscoContext);
}
export default useQuiosco;