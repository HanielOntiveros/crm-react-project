import { useNavigate } from "react-router-dom"

export const Cliente = ({ cliente }) => {
    const navigate = useNavigate()
    const { nombre, email, telefono, empresa, id } = cliente
    return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p >{empresa}</p>
            </td>
            <td className="p-6">
                <p className=" text-gray-600"><span className="text-gray-800 uppercase font-bold">email: </span>{email}</p>
                <p className=" text-gray-600"><span className="text-gray-800 uppercase font-bold">telefono: </span>{telefono}</p>
            </td>
            <td className="p-6 flex flex-col gap-3">
                <button
                    type="button"
                    className="text-blue-600 text-xs  uppercase font-bold hover:text-blue-700"
                    onClick={() => navigate(`/clientes/:${id}/editar`)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="text-red-600 text-xs  uppercase font-bold hover:text-red-700"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}
