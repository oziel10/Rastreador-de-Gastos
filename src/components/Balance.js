import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = (props) => {
  const { transactions } = useContext(GlobalContext);
 
  
  
    const amounts = transactions.map(transaction => (
      props.MesName === transaction.mes ? transaction.amount : null));
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return  <>
    <h4 style={{ marginLeft:"26%", fontSize:"15px", fontWeight: "bold"}}>Balance del mes</h4>
    <h1 style={{ marginLeft:"27%", color:"#4a65a3", fontWeight: "bold" }}>${total}</h1>
    </>
  
  
}

