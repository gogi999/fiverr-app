import './Messages.scss';

import React from 'react';

import moment from 'moment';
import { Link } from 'react-router-dom';

import {
  QueryClient,
  useMutation,
  useQuery,
} from '@tanstack/react-query';

import getCurrentUser from '../../utils/getCurrentUser';
import newRequest from '../../utils/newRequest';

const Messages = () => {
    const currentUser = getCurrentUser();
    const queryClient = new QueryClient();

    const { isLoading, error, data } = useQuery({
        queryKey: ['conversations'],
        queryFn: () => 
            newRequest
                .get('/conversations')
                .then((res) => res.data),
    });

    const mutation = useMutation({
        mutationFn: (id) => {
            return newRequest.put(`/conversation/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['conversations']);
        }
    });

    const handleRead = (id) => {
        mutation.mutate(id);
    }

    return (
        <div className="messages">
            {isLoading ? "Loading..." : error ? "Something went wrong!" : (
                <div className="container">
                    <div className="title">
                        <h1>Messages</h1>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
                                <th>Last Message</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                            {data.map((c) => (
                                <tr 
                                    className={(currentUser.isSeller && !c.readBySeller) ||
                                        (!currentUser.isSeller && !c.readByBuyer) 
                                            ? "active" : undefined
                                    }
                                    key={c.id}
                                >
                                    <td>{currentUser.isSeller ? c.buyerId : c.sellerId}</td>
                                    <td>
                                        <Link to={`/message/${c.id}`} className="link">
                                            {c?.lastMessage?.substring(0, 100)}...
                                        </Link>
                                    </td>
                                    <td>{moment(c.updatedAt).fromNow()}</td>
                                    <td>
                                        {(currentUser.isSeller && !c.readBySeller) ||
                                            (!currentUser.isSeller && !c.readByBuyer) && (
                                                <button onClick={() => handleRead(c.id)}>
                                                    Mark as Read
                                                </button>
                                        )}
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

export default Messages;
