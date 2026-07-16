"use client";

import { motion } from "framer-motion";
import PackageCards from "./ProductsCards";

const packagesList = [
    {
        id: 1,
        image: '/img/pr1.jpg',
        name: '1 Night / 2 days',
        places: 'Dhordo',
        itinerary: 'Lunch, Activities, Sunset point, Cultural Shows, Yoga ',
        price: '₹6,300/pp',
    },
    {
        id: 2,
        image: '/img/pr3.jpg',
        name: '2 Night / 3 days',
        places: 'Dhordo, Kala Dungar',
        itinerary: 'All of Day 1 and Kala Dungar and sightseeing',
        price: '₹12,600/pp',
    },
    {
        id: 3,
        image: '/img/pr7.jpg',
        name: '3 Night / 4 days',
        places: 'Dhordo, Kala Dungar, Dholavira',
        itinerary: 'All of Day 1, 2 and Dholavira (Road to heaven) ',
        price: '₹18,900/pp',
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
                        <p><span className="text-primary me-2">#</span>Package Selection</p>
                        <h1 className="display-5 mb-0">
                            Choose The Perfect <span className="text-primary">Package</span> For Your Stay
                        </h1>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <a className="btn btn-primary py-3 px-5" href="/packages">View All</a>
                    </div>
                </motion.div>

                {/* Package Cards */}
                <PackageCards packages={packagesList} />
            </div>
        </div>
    );
};

export default RoomsSection;