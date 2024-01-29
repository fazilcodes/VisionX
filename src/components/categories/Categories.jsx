import { useState } from "react"
import './categories.scss'

const Categories = ({categoriesItems, filterCategories}) => {
  const [active, setActive] = useState(0)

  const slicedCategories = categoriesItems.slice(0, 8)

  return (
    <div className="categories">
        { slicedCategories.map((item, id) => (
            <button className={ active === id ? 'active': ''  } onClick={() => {
              setActive(id)
              filterCategories(item)
            }} key={item}>{item}</button>
        ) ) }
    </div>
  )
}

export default Categories