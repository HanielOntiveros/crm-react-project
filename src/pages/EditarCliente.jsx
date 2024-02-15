// import { useLoaderData } from "react-router-dom";
import { obtenerCliente } from "../data/Clientes";

export async function editLoader({ params }) {
    const cliente = await obtenerCliente(params.clienteId)
    console.log(cliente);
    // return cliente
}

export const EditarCliente = () => {
    // const datos = useLoaderData()
    return (
        <div>EditarCliente</div>
    )
}
