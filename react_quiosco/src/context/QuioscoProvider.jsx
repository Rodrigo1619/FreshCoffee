import {createContext, useState} from 'react';
import { categorias as categoriasDB } from "../data/Categorias"


const QuioscoContext = createContext();

const QuioscoProvider = ({children})  =>{
    /* usando useState para cambia el valor de las categorias */
    const [categorias, setCategorias] = useState(categoriasDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

    /* funcion para poder filtrar las categorias */
    const handleClickCategorias = (id)=>{
        /* con [0] accede al objeto como tal y ya no nos regresa un arreglo sino que un objeto */
        const categoria = categorias.filter(categoria => categoria.id === id)[0];
        /* cambiando que la categoria actual se muestre */
        setCategoriaActual(categoria);
    }
    
    return (
        <QuioscoContext.Provider
            value={{
                /* aqui se ponen los datos que se comparten entre componentes */
                categorias,
                categoriaActual,
                handleClickCategorias

            }}
        >{children}</QuioscoContext.Provider>
    )
}
export {
    QuioscoProvider
}
export default QuioscoContext;