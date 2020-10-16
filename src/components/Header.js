import React, {  useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import "./Header2.css"
import {
  Link
} from "react-router-dom";



  export const Header = () => {
    const { mes } = useContext(GlobalContext);
    

    return (
        <div className="contenedor">
        {mes.map(item =>  
        <div className="obj"  key={item.id}>
          <Link to={item.url} style={{color:"#fff"}}>
          {item.title}
          </Link>
          </div>
        )}
      </div>
    )
  }
