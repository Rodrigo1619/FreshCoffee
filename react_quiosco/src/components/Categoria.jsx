import useQuiosco from "../hooks/useQuiosco";

export default function Categoria({categoria}) { /* categoria es desestructurado del prop */
    const {handleClickCategorias, categoriaActual} = useQuiosco();
    const {icono, id, nombre} = categoria;
    const resaltarCategoriaActual = () => categoriaActual.id === id ? "bg-amber-400" : "bg-white"
    
    return (
        <div className={` ${resaltarCategoriaActual()}
            flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
            <img 
                src={`/img/icono_${icono}.svg`} 
                alt="imagen icono" 
                className="w-12"
                />
            <button 
                className="text-lg font-bold cursor-pointer truncate"
                type="button"
                /* obteniendo el id de las categorias */
                onClick={()=> handleClickCategorias(id)} /* con el arrfunc espera a que se haga el click y no se ejecuta la funcion solo por mandarla a llamar */
            >
                {nombre}
            </button>
        </div>
    )
}
