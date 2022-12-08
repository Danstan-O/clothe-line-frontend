import React,{ useState} from 'react';
import { Container, Row, Col, Button, Form, Spinner} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
// import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';

const MerchandizeForm = () => {
    const [loading, setLoading] = useState(false);
    const [theme] = useThemeHook();
    

    const handleSubmit = (event)=>{
        const form = event.currentTarget;
        event.preventDefault();
        const name = form.name.value;
        const  category= form.category.value;
        const image_url = form.image_url.value;
        const price = form.price.value;
        
        if(name && category && image_url && price){
            setLoading(true);
            console.log('call api here');
            console.log(name, category, image_url, price);
        }
    }
    return (
       <Container className="py-5 mt-5">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded ${theme? 'text-light bg-dark' : 'text-black bg-light'}`}>
                    <h1 className={`text-center border-bottom pb-3 ${theme? 'text-dark-primary' : 'text-light-primary'}`}>
                        Create Account
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group className="mb-3">
                                <Form.Label>Product name</Form.Label>
                                <Form.Control name="firstName" type="text" placeholder="product name" required />
                            </Form.Group>
                            {/* <Form.Group className="mb-3 col-lg-6">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control name="lastName" type="text" placeholder="Last name" required />
                            </Form.Group> */}
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Product category</Form.Label>
                            <Form.Control name="category" type="text" placeholder="category" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control name="image" type="text" placeholder="URL" minLength={3} required />
                        </Form.Group>
                        
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" minLength={6} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>password confirmation</Form.Label>
                            <Form.Control name="password" type="password" placeholder="confirm password" minLength={6} required />
                        </Form.Group>
                        <Button
                            type="submit"
                            className={`${theme? 'bg-dark-primary text-black' : 'bg-light-primary'} m-auto d-block`}
                            disabled={loading}
                            style={{border: 0}}
                        >
                        {loading? 
                            <>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                &nbsp;Loading...
                            </> : 'Continue'
                        }
                        </Button>
                    </Form>
                </Col>
            </Row>
       </Container>
    );
};

export default MerchandizeForm;