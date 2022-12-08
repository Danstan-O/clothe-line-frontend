import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
import locations from '../assets/locations.png'

const Contact = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setFirstName('');
        setLastName('');
        setMessage("");
        setPhoneNumber("");

    }
    // const data = {
    //   firstName: firstName,
    //   secondName:lastName,
    //   phoneNumber: phoneNumber,
    //   message:message
    // };



    //     const { register, handleSubmit } = useForm();
    //   const onSubmit = async data =>  console.log(data);
    return (
        <div class="ml-8 space-x-0 " >
            <div class="grid md:grid-cols-2  ">
                <div>
                    <form class="w-full max-w-lg" onSubmit={handleSubmit}>
                        <div class="flex flex-wrap mx-3 mb-4">
                            <div class="w-full md:w-1/2 px-2 mb-2 md:mb-0">
                                <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mx-3 mb-2" for="grid-first-name">First Name</label>
                                <input class="appearance-none block w-full  border border-blue-500 rounded py-2 px-2 mb-1 leading-tight focus:outline-none focus:bg-white"
                                    type="text" placeholder="Jane" value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} />

                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                                <label class="block uppercase tracking-wide text-white-700 text-xs font-bold mb-2" for="grid-last-name">Last Name</label>
                                <input class="appearance-none block w-full  border border-blue-500 rounded py-2 px-2 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    type="text" placeholder="Doe" value={lastName}
                                    onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div class="flex flex-wrap  mb-2">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold  mx-3 mb-2" for="grid-phone-number">Phone Number</label>
                                <input class="appearance-none block w-full   border border-blue-200 rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                    value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="tel" placeholder="07xx-xxx-xxx" />

                            </div>
                        </div>
                        {/* <div class="flex flex-wrap -mx-3 mb-6"> */}
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password"> Message </label>
                            <textarea class="form-control
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                       border border-blue-200
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                type="text" rows="5" columns="20" value={message}
                                onChange={(e) => setMessage(e.target.value)} > </textarea>
                        </div>
                        <div className="submit-btn py-4">
                            <button className='border py-2 text-white bg-indigo-500 w-full'>Send Message</button>
                        </div>
                    </form>
                </div>
                <div class="mt-8  object-fill py-1 px-4">
                    <img class=" " src={locations} alt="Location" />
                </div>
            </div>
        </div>
    );
}

export default Contact;