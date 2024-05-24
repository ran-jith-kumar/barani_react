import React from 'react';
import Card from 'react-bootstrap/Card';
import { Productlist } from '../data/Productlist';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/reducer/cart';
function Singleproduct() {
    const params = useParams();
    const dispatch = useDispatch();
    
    const Product = Productlist.find((item) => item.id === parseInt(params.id));

    const handleAddToCart = () => {
      
      console.log(Product);
      dispatch(addItem(Product));

    };

    
    return (
        <section className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-4 pt-5'>
                    <Card>
                        <div className='d-flex justify-content-center'>
                            <img src={Product.image} alt={Product.title} />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-center">{Product.title}</Card.Title>
                            <h5 className="text-center">{Product.description}</h5>
                            <h6 className="text-center">{Product.price}</h6>
                            <div className='d-flex justify-content-center'>
                                {Product.stock > 0 ?
                                    <button className='btn btn-success' onClick={handleAddToCart}>Add to cart</button> :
                                    <button className='btn btn-danger'>Out of stock</button>}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
      
    );
}

export default Singleproduct;
