import {defineStore} from "pinia";
import {api} from "~/api/index.js";


export const useCountrystore = defineStore('country', () => {
    const countries = ref([]);

    const fetchCountries = async () => {
        const result = await api.get('/countries');
        countries.value = result.data.countries;
    }

    fetchCountries();

    return {
        countries,
    }
});