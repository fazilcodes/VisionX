import './card.scss'
import { IoHeartOutline } from "react-icons/io5";


const Card = ({ item }) => {
  return (
    <div className='card_wrapper'>
        { item.map((val) => (
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
  )
}

export default Card