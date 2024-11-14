import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const Update = () => {
    const { id } = useParams();
    console.log(id);
    
    const initialState = { 
        name: '',
        price: ''
         
    };
    const [formData, setFormData] = useState(initialState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios
            .put(`http://localhost:7000/products/${id}`, formData);
            if (res.data) {
                console.log(res.data);
                setFormData(res.data.updatedProduct);
                toast.success("Novel updated successfully");
            }
        } catch (error) {
            console.error("Error updating the novel:", error);
        }
    };

    useEffect(() => {
        const GetById = async () => {
            try {
                const res = await axios.get(`http://localhost:7000/products/${id}`);
                setFormData(res.data);
            } catch (error) {
                console.error("Error fetching novel data:", error);
            }
        };
        GetById();
    }, [id]);

    return (
        <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
            <h1 className="text-2xl">Update Component</h1>
            <form onSubmit={handleSubmit} onReset={() => setFormData(initialState)} className="flex flex-col gap-5">
                <input 
                    type="text" 
                    value={formData.name}
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}  
                    className="p-3 border border-gray-400 outline-none rounded"
                /> 
                <input 
                    type="number" 
                    value={formData.price}
                    placeholder="Price"
                    name="price"
                    onChange={handleChange}
                    className="p-3 border border-gray-400 outline-none rounded"
                />
                
                <div className="w-full flex gap-4">
                    <button className="w-1/2 px-3 py-1.5 rounded text-white bg-blue-400 hover:opacity-85" type="reset">
                        Reset
                    </button>
                    <button className="w-1/2 px-3 py-1.5 rounded text-white bg-blue-400 hover:opacity-85" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;
