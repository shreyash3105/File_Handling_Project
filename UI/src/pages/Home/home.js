import React, {useContext} from 'react';
import UserNavbar from '../../components/nav';
import UserContext from '../../Context';
import {Carousel} from 'react-bootstrap';
const UserHome = () => {
    const {value,setValue}=useContext(UserContext)
    return (
        <div>
            <UserNavbar />
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/1150x500/?file, office"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/1150x500/?file, office"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://source.unsplash.com/1150x500/?file, office"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
        
    );
};

export default UserHome;