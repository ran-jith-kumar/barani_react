import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const list = useSelector((state) => state.cart.list);
  console.log(list);

  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default Cart;
