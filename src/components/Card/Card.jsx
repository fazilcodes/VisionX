import { useEffect, useState } from 'react';
import './card.scss'
import { IoHeartOutline } from "react-icons/io5";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}  

const Card = ({ item }) => {
    const [shuffledItems, setShuffledItems] = useState([]);
    const [loadmore, setLoadMore] = useState(6);
  
    useEffect(() => {
      // Shuffle the items only once on the initial load
      const shuffledArray = shuffleArray(item);
      setShuffledItems(shuffledArray);
    }, [item]);
  
    const loadMoreFunction = (e) => {
      e.preventDefault();
      setLoadMore((prev) => prev + 3);
    };
  
    const displayItems = shuffledItems.slice(0, loadmore);
    const showLoadmore = item.length > loadmore

  return (
    <div className='card_wrapper'>
        <div className='card_container'>
            { displayItems.map((val) => (
                <div className='card' key={val.id}>
                    <div className='image_container'>
                        <img src={val.img} alt="" />
                    </div>
                    <div className='card_details'>
                        <p>{val.author}<span> - {val.category}</span></p>
                        <p className='heart'><IoHeartOutline /></p>
                    </div>
                </div>
            )) }
        </div>
        { showLoadmore && <button onClick={loadMoreFunction} className='load-more'>Load more</button>}
    </div>
  )
}

export default Card