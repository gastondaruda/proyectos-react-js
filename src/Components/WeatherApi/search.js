import {AsyncPaginate} from "react-select-async-paginate"
import React,{useState} from "react"
import {Geo_api_url, geoApiOptions} from "./api.js"


const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(
            `${Geo_api_url}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
            geoApiOptions
        )
        .then((response) => response.json())
        .then((response) => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        })
        .catch(err => console.error(err));
    }
 
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData)
    }

    return ( 
        <> 
            <AsyncPaginate 
                placeholder="Search for a city"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
                />
        </>
    )
}

export default Search