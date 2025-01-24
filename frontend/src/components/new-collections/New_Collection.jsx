import React from 'react'
import new_collection from '../../assets/new_collections'
import Item from '../items/Item'
import './New_Collection.css'

const New_Collection = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>

        <div className="new-collec-item">
            {new_collection.map((item,index)=>{
                return < Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default New_Collection

