import './Orders.scss';

import React from 'react';

const Orders = () => {
    const currentUser = {
        id: 1,
        username: 'Jane Doe',
        isSeller: true,
    }

    return (
        <div className="orders">
            <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>
                            {currentUser?.isSeller ? 'Buyer' : 'Seller'}
                        </th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>
                            <img 
                                className="image"
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                                alt="" 
                            />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img 
                                className="message"
                                src="/img/message.png" 
                                alt="" 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img 
                                className="image"
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                                alt="" 
                            />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img 
                                className="message"
                                src="/img/message.png" 
                                alt="" 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img 
                                className="image"
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                                alt="" 
                            />
                        </td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td>
                            <img 
                                className="message"
                                src="/img/message.png" 
                                alt="" 
                            />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Orders;
