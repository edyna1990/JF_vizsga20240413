import React from 'react'
import {properties} from "../data"
import { SinglePropertie } from './SinglePropertie'

export const Properties = () => {
  console.log(properties)
  return (
    <div className="container">
      <h3 className='propertie'>Aktuális ingatlan kínálatunk</h3>
      <div className='d-flex justify-content-center flex-wrap gap-2 p-2'>
        {properties.map(obj=><SinglePropertie key={obj.id} {...obj}/>)}
      </div>
    </div>
  )
}

