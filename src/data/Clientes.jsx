export async function obtenerClientes() {
    const resp = await fetch(import.meta.env.VITE_API_URL)
    const data = await resp.json()
    return data;
}