
import React, {useState, useContext} from 'react';
import  {Header}  from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
 import { AddTransaction } from './components/AddTransaction';
 import { GlobalContext } from './context/GlobalState';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
//   Link
} from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';


function Meses() {

      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);
      const { mes } = useContext(GlobalContext); 

  return (
    
    <Router>
        <Switch>
        {mes.map(mes1 => ( 
           <Route key={mes1.id} path={mes1.url}>  
          <div className="container" style={{ background:"#E5E7E9" , borderRadius:"20px", margin:"0px", padding: "0px", height:"100%", paddingBottom:"10px", width:"30%", marginLeft:"35%"}}>
              <Header />
              <div style={{background:"#fff", borderRadius:"20px", width:"70%", margin:"50px", marginTop:"20px"}}>
         <Balance   MesName={mes1.title}/>
         <IncomeExpenses  MesName={mes1.title} /> 
         </div>  
         <TransactionList MesName={mes1.title}/>
               <div>
                   <Button color="danger" onClick={toggle} style={{width:"60%", marginLeft:"20%", background:"blue", color:"#fff"}}>Añadir Transacción</Button>
                   <Modal isOpen={modal} toggle={toggle} className="container">
                        <ModalHeader toggle={toggle} style={{paddingLeft:"30%"}}>Nueva Transacción</ModalHeader>
                         <ModalBody>
                             <AddTransaction  MesName={mes1.title}/>
                         </ModalBody>
                  </Modal>
              </div>
          </div>
          </Route>
          ))}
        </Switch>
    </Router>
    
    
  );
}

export default Meses;


