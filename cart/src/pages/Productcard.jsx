import Card from 'react-bootstrap/Card';
import { Productlist } from '../data/Productlist';
import { useNavigate } from 'react-router-dom';

function Productcard() {
  const navigate = useNavigate();

  return (
    <section className='container'>
      <div className='row'>
        {Productlist && Productlist.length > 0 && Productlist.map((items) => {
          return (
            <div key={items.id} className='col-lg-4 col-md-6 pt-5'>
              <Card className='cursor-pointer' onClick={() => navigate(`/singleproduct/${items.id}`)}>
                <div className='d-flex justify-content-center'>
                  <img src={items.image} alt={items.title} />
                </div>
                <Card.Body>
                  <Card.Title className="text-center">{items.title}</Card.Title>
                  <h5 className="text-center">{items.description}</h5>
                  <h6 className="text-center">{items.price}</h6>
                  <div className='d-flex justify-content-center'>
                    {items.stock > 0 ? 
                      <button className='btn btn-success'>Add to cart</button> : 
                      <button className='btn btn-danger'>Out of stock</button>}
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Productcard;
