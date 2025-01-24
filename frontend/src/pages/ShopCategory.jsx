import React from 'react'
import './CSS/ShopCategory.css'
import all_product from '../assets/all_product'
import Item from '../components/items/Item'

const ShopCategory = (props) => {
  return (
    <div className='shopcategory-products'>
      {all_product.map((item,index)=>{
        if(props.category === item.category){
          return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        } 
        else
        {
          return null;
        }
      })}
    </div>
  )
}

export default ShopCategory