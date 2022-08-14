import axios from 'axios'
let endpoint = process.env.REACT_APP_HMG_LIBRAS_ENDPOINT

if (window.location.hostname === 'localhost') {
    endpoint = process.env.REACT_APP_MOCKOON_ENDPOINT
}

export const getAllSigns = async () => {
    try {
        const { data } = await axios.get(`${endpoint}/api/tabela_sinais/sinais?not-paginate=true`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getAllHandConfig = async () => {
    try {
        const { data } = await axios.get(`${endpoint}/api/tabela_sinais/conf_mao_dominante?not-paginate=true`)
        return data
    } catch (error) {
        console.error(error)
    }
}
