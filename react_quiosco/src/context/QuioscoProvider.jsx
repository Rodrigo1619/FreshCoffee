import {createContext, useState} from 'react';
import { categorias as categoriasDB } from "../data/Categorias"


const QuioscoContext = createContext();

const QuioscoProvider = ({children})  =>{
    /* usando useState para cambia el valor de las categorias */
    const [categorias, setCategorias] = useState(categoriasDB);
    return (
        <QuioscoContext.Provider
            value={{
                /* aqui se ponen los datos que se comparten entre componentes */
                categorias

            }}
        >{children}</QuioscoContext.Provider>
    )
}
export {
    QuioscoProvider
}
export default QuioscoContext;