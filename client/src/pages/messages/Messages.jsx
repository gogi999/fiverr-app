import './Messages.scss';

import React from 'react';

import { Link } from 'react-router-dom';

const Messages = () => {
    const currentUser = {
        id: 1,
        username: 'Jane Doe',
        isSeller: true,
    }

    const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio modi expedita voluptatum ipsum, animi odio vero beatae perferendis, nisi earum possimus sit nihil enim ducimus eos magni minus hic!';

    return (
        <div className="messages">
            <div className="container">
                <div className="title">
                    <h1>Messages</h1>
                </div>
                <table>
                    <tr>
                        <th>Buyer</th>
                        <th>Last Message</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    <tr className="active">
                        <td>
                            Jane Doe
                        </td>
                        <td>
                            <Link to="/message/123" className="link">
                                {message.substring(0, 100)}...
                            </Link>
                        </td>
                        <td>1 day ago</td>
                        <td>
                            <button>Mark as Read</button>
                        </td>
                    </tr>
                    <tr className="active">
                        <td>
                            Jane Doe
                        </td>
                        <td>
                            <Link to="/message/123" className="link">
                                {message.substring(0, 100)}...
                            </Link>
                        </td>
                        <td>1 day ago</td>
                        <td>
                            <button>Mark as Read</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Jane Doe
                        </td>
                        <td>
                            <Link to="/message/123" className="link">
                                {message.substring(0, 100)}...
                            </Link>    
                        </td>
                        <td>1 day ago</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Messages;
