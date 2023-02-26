/* eslint-disable react/no-unescaped-entities */
import './Gigs.scss';

import React, { useState } from 'react';

import GigCard from '../../components/gigCard/GigCard';
import { gigs } from '../../data';

const Gigs = () => {
    const [sort, setSort] = useState('sales');
    const [open, setOpen] = useState(false);

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
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
                        <input type="number" placeholder="min" />
                        <input type="number" placeholder="max" />
                        <button>Apply</button>
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
                    {gigs.map((gig) => (
                        <GigCard key={gig.id} item={gigs} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gigs;
