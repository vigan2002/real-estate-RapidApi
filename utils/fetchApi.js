import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '2aff532b7fmsh71da37869fe95b6p14dc6djsn28409f83cf08',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data
}

