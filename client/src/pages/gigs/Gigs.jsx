/* eslint-disable react/no-unescaped-entities */
import './Gigs.scss';

import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { useLocation } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import GigCard from '../../components/gigCard/GigCard';
import newRequest from '../../utils/newRequest';

const Gigs = () => {
    const [sort, setSort] = useState('sales');
    const [open, setOpen] = useState(false);
    const minRef = useRef();
    const maxRef = useRef();
    const { search } = useLocation();
    
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['gigs'],
        queryFn: () => 
            newRequest
                .get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`)
                .then((res) => res.data),
    });

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    }

    useEffect(() => {
        refetch();
    }, [sort]);

    const apply = () => {
        refetch();
    }

    return (
        <div className="gigs">
            <div className="container">
                <span className="breadcrumbs">
                    FIVERR {'>'} GRPHICS & DESIGN
                </span>
                <h1>AI Artists</h1>
                <p>
                    Explore the boundaries of art and technology with Fiverr's AI artists
                </p>
                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input ref={minRef} type="number" placeholder="min" />
                        <input ref={maxRef} type="number" placeholder="max" />
                        <button onClick={apply}>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortBy">SortBy</span>
                        <span className="sortType">
                            {sort === "sales" ? "Best Selling" : "Newest"}
                        </span>
                        <img src="/img/down.png" alt="" onClick={() => setOpen(!open)} />
                        {open && (
                            <div className="rightMenu">
                                {sort === "sales" ? (
                                    <span onClick={() => reSort("createdAt")}>
                                        Newest
                                    </span>
                                ) : (
                                    <span onClick={() => reSort("sales")}>
                                        Best Selling
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="cards">
                    {isLoading 
                        ? "Loading..." 
                        : error ? "Something went wrong" : data.map((gig) => (
                            <GigCard key={gig._id} item={data} />
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default Gigs;
