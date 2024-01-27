import './home.scss'
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <div className='home_container'>
        <div className="home_top">
            <div className="head"><p>CURATED <span className='primary'>IMAGES</span></p><p> FROM THE <span className='gray'>AI WORLD</span></p></div>

            <div className='search_wrapper'>
                <form className="search">
                    <div className="input_content">
                        <BsSearch className='icon'/>
                        <input className='input_search' type="text" placeholder='search image' />
                    </div>
                    <a className='search_btn' href="">Search</a>
                </form>
                <p className='search-tag'>free AI images for your use</p>
            </div>
        </div>

        <div className="home_bottom"></div>
    </div>
  )
}

export default Home