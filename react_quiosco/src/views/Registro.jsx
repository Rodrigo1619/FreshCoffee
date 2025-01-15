import { Link } from "react-router-dom"

export default function Registro() {
    return (
        <>
            <h1 className=" text-4xl font-black">Crea tu cuenta</h1>
            <p>Crea tu cuenta llenando el formulario</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form>
                    <div className="mb-4">
                        <label 
                            className="text-slate-800"
                            htmlFor="name" /* Laravel usa esa convencion asi que se usara todo en inglish */
                            >Nombre:
                        </label>
                        <input 
                            type="text"
                            id="name"
                            className="mt-2 w-full p-3 bg-gray-100"
                            name="name"
                            placeholder="Escribe tu nombre"
                        />
                    </div>

                    <div className="mb-4">
                        <label 
                            className="text-slate-800"
                            htmlFor="email"
                            >Email:
                        </label>
                        <input 
                            type="email"
                            id="email"
                            className="mt-2 w-full p-3 bg-gray-100"
                            name="email"
                            placeholder="Escribe tu email"

                        />
                    </div>
                    <div className="mb-4">
                        <label 
                            className="text-slate-800"
                            htmlFor="password"
                            >Password:
                        </label>
                        <input 
                            type="password"
                            id="password"
                            className="mt-2 w-full p-3 bg-gray-100"
                            name="password"
                            placeholder="Escribe tu password"
                        />
                    </div>

                    <div className="mb-4">
                        <label 
                            className="text-slate-800"
                            htmlFor="password_confirmation" /* laravel se encargara de hacer la confirmacion */
                            >Repetir Password:
                        </label>
                        <input 
                            type="password"
                            id="password_confirmation"
                            className="mt-2 w-full p-3 bg-gray-100"
                            name="password_confirmation"
                            placeholder="Repite tu password"
                        />
                    </div>

                    <input
                        type="submit"
                        value="Crear cuenta"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />
                </form>
            </div>
            <nav className="mt-5">
                <Link to="/auth/login">
                    ¿Ya tienes cuenta? Inicia sesión
                </Link>
            </nav>
        </>
    )
}
