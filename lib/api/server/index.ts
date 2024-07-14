export const getAbobas = async () => {
    const response = await fetch('http://localhost:3000/api/getAbobas')
    const data = await response.json()
    return data
}