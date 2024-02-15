export async function obtenerClientes() {
    const resp = await fetch(import.meta.env.VITE_API_URL)
    const data = await resp.json()
    return data;
}
export async function obtenerCliente(id) {
    const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const data = await resp.json()
    return data
}

export async function agregarClientes(datos) {
    try {
        const resp = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await resp.json()
    } catch (error) {
        console.log(error);
    }
}