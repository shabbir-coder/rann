"use client";

import { motion } from "framer-motion";

const rooms = [
    {
        id: 1,
        title: "Standard Room",
        price: "$99.00 / night",
        features: ["Free WiFi", "Air Conditioning", "Complimentary Breakfast"],
        img: "assets/animal-lg-1.jpg",
        delay: 0.1,
    },
    {
        id: 2,
        title: "Deluxe Room",
        price: "$149.00 / night",
        features: ["Free WiFi", "Balcony with View", "Room Service Available"],
        img: "assets/animal-lg-2.jpg",
        delay: 0.3,
    },
    {
        id: 3,
        title: "Suite Room",
        price: "$199.00 / night",
        features: ["Luxury Amenities", "Private Lounge Access", "Complimentary Spa Access"],
        img: "assets/animal-lg-3.jpg",
        delay: 0.5,
    },
];

const RoomsSection = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                {/* Header Section */}
                <motion.div
                    className="row g-5 mb-5 align-items-end"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="col-lg-6">
                        <p><span className="text-primary me-2">#</span>Room Selection</p>
                        <h1 className="display-5 mb-0">
                            Choose The Perfect <span className="text-primary">Room</span> For Your Stay
                        </h1>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <a className="btn btn-primary py-3 px-5" href="#">View All Rooms</a>
                    </div>
                </motion.div>

                {/* Room Options */}
                <div className="row g-4">
                    {rooms.map((room) => (
                        <motion.div
                            key={room.id}
                            className="col-lg-4 col-md-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: room.delay }}
                        >
                            <div className="membership-item position-relative">
                                <img className="img-fluid" src={room.img} alt={room.title} />
                                <h1 className="display-1">{`0${room.id}`}</h1>
                                <h4 className="text-white mb-3">{room.title}</h4>
                                <h3 className="text-primary mb-4">{room.price}</h3>
                                {room.features.map((feature, index) => (
                                    <p key={index}>
                                        <i className="fa fa-check text-primary me-3"></i>
                                        {feature}
                                    </p>
                                ))}
                                <a className="btn btn-outline-light px-4 mt-3" href="#">Book Now</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RoomsSection;