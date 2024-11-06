import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllServiceInquiry = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    const getApiData = async () => {
        try {
            const res = await axios.get("https://www.api.vedicjyotishe.com/api/get-service-inquery");
            setData(res.data.data);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch data.");
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredData = data.filter(item => 
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.orderId.includes(search)
    );

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Service Inquery</h4>
                </div>
            </div>

            <div className="filteration">
                <div className="search">
                    <label htmlFor="search">Search </label>&nbsp;
                    <input
                        type="text"
                        name="search"
                        id="search"
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            <section className="d-table">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            {/* <th scope="col">Order ID</th> */}
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Final Price</th>
                            <th scope="col">Order Status</th>
                            <th scope="col">Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    {/* <td>{item.orderId}</td> */}
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>₹1000</td> {/* Assuming a static final price as no data is provided */}
                                    <td>{item.paymentStatus === "Complete" ? "Completed" : "Pending"}</td>
                                    <td>{item.paymentStatus}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center">No orders found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default AllServiceInquiry;
