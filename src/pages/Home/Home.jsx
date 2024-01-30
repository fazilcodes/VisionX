import Categories from '../../components/categories/Categories';
import './home.scss'
import Data from '../../assets/Data'

import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

const Home = () => {
    const [items, setItems] = useState(Data)
    const [input, setInput] = useState('')
    const [categories, setCategories] = useState([])
    const [searchPlaceholder, setSearchPlaceholder] = useState('search image')
    const [loadmore, setLoadmore] = useState(6)

    useEffect(() => {
        const categoriesItem = ['All', ...new Set(Data.map((item) => item.category))]
        setCategories(categoriesItem)
    }, [Data])


    const filterCategories = (category) => {
        if ( category === 'All' ) {
           return setItems(Data)
        }

        const newItems = Data.filter((item) => item.category === category)
        setItems(newItems)
    }

    // Advanced Search with either category, author, keyword match
    const searchCategory = (e) => {
        e.preventDefault()

        if (input.length > 0) {
            const searchWordsArray = input.trim().split(' ')

            const newQuery = Data.filter((val) => {
                // Check if the input is present in the category or author
                const isMatch = searchWordsArray.some((word) => val.category.toLowerCase().includes(word.toLowerCase())) ||
                                searchWordsArray.some((word) => val.author.toLowerCase().includes(word.toLowerCase()));
        
                // Check if any keyword includes the input
                const hasKeywordMatch = searchWordsArray.some((word) => val.keyword.some((key) =>
                key.toLowerCase().includes(word.toLowerCase())
            ));
        
                return isMatch || hasKeywordMatch;
            });
            // Update the state with the filtered items
            setItems(newQuery);
            setSearchPlaceholder('search image')
            setLoadmore(6)
        } else {
            setSearchPlaceholder('enter something here...')
        }
    }

  return (
    <div className='home_container'>
        <div className="home_top">
            <div className="head"><p>CURATED <span className='primary'>IMAGES</span></p><p> FROM THE <span className='gray'>AI WORLD</span></p></div>

            <div className='search_wrapper'>
                <form className="search">
                    <div className="input_content">
                        <BsSearch className='icon'/>
                        <input onChange={(e) => setInput(e.target.value)} className='input_search' type="text" placeholder={searchPlaceholder} />
                    </div>
                    <button onClick={searchCategory} className='search_btn' href="">Search</button>
                </form>
                <p className='search-tag'>free AI images for your use</p>
            </div>
        </div>

        <div className="home_bottom">
            <Categories categoriesItems={categories} filterCategories={filterCategories}/>
            {items.length > 0 ? <Card item={items} loadmore={loadmore} setLoadmore={setLoadmore}/> : <p className='no-card'>No images available</p>}
        </div>
    </div>
  )
}

export default Home