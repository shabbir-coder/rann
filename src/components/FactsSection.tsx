"use client";

import CountUp from 'react-countup';
import { motion } from "framer-motion";

const stats = [
    { id: 1, icon: 'fa-paw', label: "Days of Celebration", count: 100 },
    { id: 2, icon: 'fa-users', label: "Total Visitors", count: 12345 },
    { id: 3, icon: 'fa-certificate', label: "Total Membership", count: 12345 },
    { id: 4, icon: 'fa-shield-alt', label: "Save Wild Life", count: 12345 },
  ];

const FactsSection = () => { 
    return(
        <div
        className="container-xxl bg-primary facts my-5 py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-4">
            {stats.map((stat, index)=>(
                <motion.div
                key={stat.id}
                className="col-md-6 col-lg-3 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
            >
                    <i className="fa {stat.icon} fa-3x text-primary mb-3"></i>
                    <h1 className="text-white mb-2" data-toggle="counter-up">
                    <CountUp  
                        start={10}
                        end={stat.count}   
                        duration={2} 
                        separator=","
                    />
                    </h1>
                    
                    <p className="text-white mb-0">{stat.label}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default FactsSection;