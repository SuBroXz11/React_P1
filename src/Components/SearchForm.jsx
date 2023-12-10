import React from 'react'
import useGlobalContext from '../Context/Context'
export default function SearchForm() {
    const { setSearchTerm } = useGlobalContext()
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log("works");
        // console.log(e.target.elements);
        const searchInput = e.target.elements.search.value
        // console.log(searchInput);
        setSearchTerm(searchInput)
    }
    return (
        <section>
            <h1 className="title">Unsplash Images</h1>
            <form onSubmit={handleSubmit} className='search-form'>
                <input type="text" name='search' placeholder='cat' className='form-input search-input' />
                <button className="btn">Search</button>
            </form>
        </section>
    )
}
