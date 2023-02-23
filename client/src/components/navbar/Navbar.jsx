import './Navbar.scss';

import React, {
  useEffect,
  useState,
} from 'react';

// import { Link } from 'react-router-dom';
import JaneDoe from '../../../public/img/JaneDoe.png';

const Navbar = () => {
    const [active, setActive] = useState(false);

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive);

        return () => {
            window.removeEventListener('scroll', isActive);
        }
    }, []);

    const currentUser = {
        id: 1,
        username: 'Jane Doe',
        isSeller: true,
    }

    return (
        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    {/* <Link to="/"> */}
                        <span className="text">fiverr</span>
                    {/* </Link> */}
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user">
                            <img src={JaneDoe} alt="" />
                            <span>{currentUser?.username}</span>
                            <div className="options">
                                {currentUser.isSeller && (
                                    <>
                                        <span>Gigs</span>
                                        <span>Add New Gig</span>
                                    </>
                                )}
                                <span>Orders</span>
                                <span>Messages</span>
                                <span>Logout</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {active && (
                <>
                    <hr />
                    <div className="menu">
                        <span>Test 1</span>
                        <span>Test 2</span>
                    </div>
                </>
            )}
        </div>
    );
}

export default Navbar;
