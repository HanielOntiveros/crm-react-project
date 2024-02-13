import { useNavigate, Form, useActionData } from 'react-router-dom'
import { Formulario, Error } from '../components'

export async function action({ request }) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    const errors = []
    if (Object.values(data).includes('')) {
        errors.push('Todos los campos son obligatorios ')
    }


    if (Object.keys(errors).length) {
        return errors
    }


}


export const NuevoCliente = () => {
    const navigate = useNavigate()
    const errors = useActionData()
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevos clientes</h1>
            <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>
            <div className='flex justify-end'>
                <button
                    className='bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-md  hover:bg-blue-900'
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>
            </div >
            <div className='bg-white shadow rounded-md mx-auto px-5 py-10 mt-20 md:3/4'>
                {errors?.length && errors.map((error, i) => <Error key={i}>{error}</Error>)}
                <Form
                    method='post'
                >
                    <Formulario />
                    <input
                        type='submit'
                        className='mt-5 w-full bg-blue-800 font-bold p-3 uppercase text-white text-lg text-center hover:cursor-pointer hover:bg-blue-900'
                        value='registrar cliente'
                    />
                </Form>
            </div>
        </>
    )
}
