import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    cartTotal,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
  return  isEmpty ? <img src="https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif" alt="" /> : (
    
    <div style={{"height":"69vh"}}>
      <h3 className='my-3 text-center'>Cart</h3>
    <Table striped bordered hover >
    <thead>
      <tr>
        <th>#</th>
        <th>Photo</th>
        <th>Product name</th>
        <th>Product price</th>
        <th>Quantity</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {items.map((fd,i)=>
     { return <tr>
      <td>{i+1}</td>
      <td><img src={fd.image} alt="err" width={50} /></td>
      <td>{fd.title}</td>
      <td>{fd.price.toFixed(0)*fd.quantity}$</td>
      <td><Button variant='danger' onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}>-</Button>
       <span className='mx-2'> {fd.quantity}</span>
      <Button variant='success' onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}>+</Button>
      </td>
      <td><Button onClick={()=>{removeItem(fd.id)}} variant='danger'>Del</Button></td>
    </tr>}
   
        )}
      
      
    </tbody>
  </Table>
  <h4>Total price:{cartTotal.toFixed(0)}$</h4>
  <Button onClick={()=>{emptyCart()}} variant='danger'>Clear cart</Button>
  </div>
  )
}

export default Cart