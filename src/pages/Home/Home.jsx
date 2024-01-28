import Categories from '../../components/categories/Categories';
import './home.scss'
import Data from '../../assets/Data'

import { BsSearch } from "react-icons/bs";
import { useState } from 'react';
import Card from '../../components/Card/Card';

const Home = () => {

    const [items, setItems] = useState(Data)
    const categoriesItem = ['All', ...new Set(Data.map((item) => item.category))]
    const [input, setInput] = useState('')

    const filterCategories = (category) => {
        if ( category === 'All' ) {
           setItems(Data)
           return
        }

        const newItems = Data.filter((item) => item.category === category)
        setItems(newItems)
    }

    // Advanced Search with either category, author, keyword match
    const searchCategory = (e) => {
        e.preventDefault()
        const newQuery = Data.filter((val) => {
            // Check if the input is present in the category or author
            const isMatch = val.category.toLowerCase().includes(input.toLowerCase()) ||
                            val.author.toLowerCase().includes(input.toLowerCase());
    
            // Check if any keyword includes the input
            const hasKeywordMatch = val.keyword.some((word) =>
                word.toLowerCase().includes(input.toLowerCase())
            );
    
            return isMatch || hasKeywordMatch;
        });
    
        // Update the state with the filtered items
        setItems(newQuery);
    }

  return (
    <div className='home_container'>
        <div className="home_top">
            <div className="head"><p>CURATED <span className='primary'>IMAGES</span></p><p> FROM THE <span className='gray'>AI WORLD</span></p></div>

            <div className='search_wrapper'>
                <form className="search">
                    <div className="input_content">
                        <BsSearch className='icon'/>
                        <input onChange={(e) => setInput(e.target.value)} className='input_search' type="text" placeholder='search image' />
                    </div>
                    <button onClick={searchCategory} className='search_btn' href="">Search</button>
                </form>
                <p className='search-tag'>free AI images for your use</p>
            </div>
        </div>

        <div className="home_bottom">
            <Categories categoriesItems={categoriesItem} filterCategories={filterCategories}/>
            {items.length > 0 ? <Card item={items}/> : <p className='no-card'>No images available</p>}
        </div>
    </div>
  )
}

export default Home