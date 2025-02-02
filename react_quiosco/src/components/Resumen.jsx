import useQuiosco from "../hooks/useQuiosco"
export default function Resumen() {
    const {pedido} = useQuiosco();

    return(
        <aside className="w-72 h-screen overflow-y-scroll p-5">
            <h1 className=" text-4xl font-black">
                Mi pedido
            </h1>
            <p className="text-lg my-5">
                Aqui podras ver el resumen de tu pedido
            </p>
            <div className="py-10">
                {pedido.length === 0 ? (
                    <p className="text-center text-2xl">No hay productos</p>
                ) : (
                    <p>Si hay productos</p>
                )}
            </div>
            <p className="text-xl mt-10">
                Total: {''}
            </p>
            <form className="w-full">
                <div className="mt-5">
                    <input
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded uppercase font-bold 
                        text-white text-center w-full cursor-pointer" 
                        value="Confirmar pedido"
                    />
                </div>
            </form>
        </aside>
    )
}
