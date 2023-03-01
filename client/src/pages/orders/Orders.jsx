import './Orders.scss';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import getCurrentUser from '../../utils/getCurrentUser';
import newRequest from '../../utils/newRequest';

const Orders = () => {
    const currentUser = getCurrentUser();

    const { isLoading, error, data } = useQuery({
        queryKey: ['orders'],
        queryFn: () => 
            newRequest
                .get('/orders')
                .then((res) => res.data),
    });

    return (
        <div className="orders">
            {isLoading ? "Loading" : error ? "Something went wrong" : (
                <div className="container">
                    <div className="title">
                        <h1>Orders</h1>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>
                                    {currentUser?.isSeller ? 'Buyer' : 'Seller'}
                                </th>
                                <th>Contact</th>
                            </tr>
                            {data.map((order) => (
                                <tr key={order._id}>
                                    <td>
                                        <img 
                                            className="image"
                                            src={order.img} 
                                            alt="" 
                                        />
                                    </td>
                                    <td>{order.title}</td>
                                    <td>{order.price}</td>
                                    <td>
                                        <img 
                                            className="message"
                                            src="/img/message.png" 
                                            alt="" 
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Orders;
