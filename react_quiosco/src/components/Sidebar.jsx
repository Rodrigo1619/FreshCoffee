import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"

export default function Sidebar() {
    const {categorias} = useQuiosco();
    return (
        <aside className="md:w-72">
            <div className="p-4">
                <img
                    className="w-40" 
                    src="img/logo.svg" 
                    alt="logo" />
            </div>
            <div className="mt-10">
                {categorias.map(categoria => (
                    <Categoria
                        /* pasando como props la categoria */
                        categoria = {categoria}
                        key={categoria.id}
                    />
                ))}
            </div>

            <div className="my-5 px-5">
                <button 
                    type="button"
                    className="text-center bg-red-500 w-full p-3 font-bold text-white truncate"
                >
                    Cancelar orden

                </button>
            </div>
        </aside>
    )
}
