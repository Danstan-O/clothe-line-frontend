import { useState } from "react";
import { Container, Row, Col, Button, Form, Spinner, InputGroup} from 'react-bootstrap';

const initialState = {
  title: "",
  // author_id: "",
  name: "",
  category:"",
  image_url:"",
  price: ""
};

function MerchantForm({ onAddMerchandize }) {
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/merchandizes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newMerchandize) => {
        setFormData(initialState);
        onAddMerchandize(newMerchandize);
      });
  }
return (
<Container className="py-5 mt-5">
            <Row className="justify-content-center mt-5">
                <Col className={`p-4 rounded 'text-light bg-dark' : 'text-black bg-light'}`}></Col>
                    <div className="p-10">
                        <form className="w-full max-w-sm flex flex-col" onSubmit={handleSubmit} >
                        <div className="md:flex md:justify-center mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="publication-year">
                                        Name
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 
                                    leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="price"
                                    type="text"
                                    placeholder="Enter Name" name="price"
                                    onChange={handleChange}
                                    value={formData.name} />
                                </div>
                            </div>
                            {/* <div className="md:flex md:justify-center mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="title">
                                        Name
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
                                    text-gray-700 leading-tight focus:outline-none 
                                    focus:bg-white focus:border-blue-500"
                                    id="title" type="text" placeholder="Enter Book Title" 
                                    name="title" onChange={handleChange} value={formData.name}/>
                                </div>
                            </div> */}
                            <div className="md:flex md:justify-center mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="title">
                                        Category
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
                                    text-gray-700 leading-tight focus:outline-none 
                                    focus:bg-white focus:border-blue-500"
                                    id="genre" type="text" placeholder="Enter Category" 
                                    name="genre" onChange={handleChange} value={formData.category}/>
                                </div>
                            </div>
                            {/* <div class="md:flex md:justify-center mb-6">
                                <div class="md:w-1/3">
                                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="author">
                                        Author
                                    </label>
                                </div>
                                <div class="md:w-2/3">
                                    < input class="bg-gray-200 appearance-none border-2 border-gray-200 round" id="author" 
                                    type ="text" placeholder="Enter Author" name="author" onChange={handleChange} 
                                    value={formData.Author} />
                                </div>
                            </div> */}
                            <div className="md:flex md:justify-center mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="publication-year">
                                        Price
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 
                                    leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="price"
                                    type="number"
                                    placeholder="Enter Price" name="price"
                                    onChange={handleChange}
                                    value={formData.price} />
                                </div>
                            </div>
                            <div className="md:flex md:justify-center mb-6">
                                <div className="md:w-1/3">
                                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="image">
                                        Image
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 
                                    leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="image"
                                    type="url" placeholder="Upload Image URL" name="image" onChange={handleChange} value={formData.image_url} />
                                </div>
                            </div>
                            <div class="md:flex md:justify-center">
                                <div className="md:w-1/3"></div>
                                <div className="md:w-2/3">
                                    <br/>

                                    <button className="shadow bg-blue-500 hover:bg-green-400 focus:shadow-outline
                                    focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                        Add Merchandize
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
            
        </Row>
    </Container>
);
};


export default MerchantForm;