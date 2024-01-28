import { useState } from "react"
import './categories.scss'

const Categories = ({categoriesItems, filterCategories}) => {
  const [active, setActive] = useState(0)

  return (
    <div className="categories">
        { categoriesItems.map((item, id) => (
            <button className={ active === id ? 'active': ''  } onClick={() => {
              setActive(id)
              filterCategories(item)
            }} key={item}>{item}</button>
        ) ) }
    </div>
  )
}

export default Categories