import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useGlobalContext from '../Context/Context'

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;
console.log(import.meta.env.VITE_API_KEY);
export default function Gallery() {
    const { searchTerm } = useGlobalContext()
    const response = useQuery({
        queryKey: ['images', searchTerm],
        //BY DOING THE ABOVE WE CAN NOW SEARCH 
        //BEFORE THAT WE COULD NOT AS REACT QUERY CACHES THE DATA DEFAULTLY
        queryFn: async () => {
            const result = await axios(`${url}&query=${searchTerm}`)
            return result.data
        }
    })
    console.log(response)
    if (response.isLoading) {
        return <section className="image-container">
            <h4>Loading...</h4>
        </section>
    }
    if (response.isError) {
        return <section className="image-container">
            <h4>There was an Error...</h4>
        </section>
    }
    const results = response.data.results;
    if (results.length < 1) {
        return (
            <section className='image-container'>
                <h4>No results found...</h4>
            </section>
        )
    }
    return (
        <section className="image-container">
            {results.map((item) => {
                const url = item?.urls?.small
                return <img src={url} alt={item.alt_description} key={item.id} className='img' />
            })}
        </section>
    )
}
// BECAUSE REACTQUERY CACHES THE DATA.. WE SEARCH CAT AND AGAIN SEARCH CAT
// THERE IS NO LOADING....