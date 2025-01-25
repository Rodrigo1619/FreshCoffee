import {createContext, useState} from 'react';
import { categorias as categoriasDB } from "../data/Categorias"


const QuioscoContext = createContext();

const QuioscoProvider = ({children})  =>{
    /* usando useState para cambia el valor de las categorias */
    const [categorias, setCategorias] = useState(categoriasDB);
    /* la categoria actual tiene un valor inicial de la primera categoria */
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
    /* modal que al inicio estara "apagado" */
    const [modal, setModal] = useState(false);
    const [producto, setProducto] = useState({});
    const [pedido, setPedido] = useState([]);

    /* funcion para poder filtrar las categorias */
    const handleClickCategorias = (id)=>{
        /* con [0] accede al objeto como tal y ya no nos regresa un arreglo sino que un objeto */
        const categoria = categorias.filter(categoria => categoria.id === id)[0];
        /* cambiando que la categoria actual se muestre */
        setCategoriaActual(categoria);
    }

    const handleClickModal = () => {
        setModal(!modal);
    }
    
    const handleSetProducto = (producto) =>{
        setProducto(producto);
    }

    /* funcion para poder hacer el crud con pedidos */
    /* si pongo antes de ...producto se elimina */
    const handleAgregarPedido = ({categoria_id, imagen, ...producto}) =>{
        /* toma una copia de lo que hay en pedido y agregale este producto nuevo */
        setPedido([...pedido, producto]);
    }

    return (
        <QuioscoContext.Provider
            value={{
                /* aqui se ponen los datos que se comparten entre componentes */
                categorias,
                categoriaActual,
                handleClickCategorias,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido

            }}
        >{children}</QuioscoContext.Provider>
    )
}
export {
    QuioscoProvider
}
export default QuioscoContext;