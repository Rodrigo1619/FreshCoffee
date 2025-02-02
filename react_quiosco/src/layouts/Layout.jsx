import {Outlet} from 'react-router-dom'
import Modal from 'react-modal'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import useQuiosco from '../hooks/useQuiosco'
import ModalProducto from '../components/ModalProducto'

/* estilos para el modal */
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

export default function Layout() {
    const {modal, handleClickModal} = useQuiosco();
    console.log(modal)
    return (
        <>
            <div className='md:flex'>
                <Sidebar />
                <main className='md:flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
                    <Outlet />
                </main>
                <Resumen />
            </div>

            <Modal isOpen={modal} style={customStyles}>
                <ModalProducto/>
            </Modal>
                
        </>
    )
}
