"use client"
import React from "react";
import { motion } from "framer-motion";

interface Price {
    nights: number;
    rate: number;
    extraMattress: number;
  }
  
  interface TariffItem {
    roomType: string;
    prices: Price[];
  }
  
  interface TariffData {
    title: string;
    data: TariffItem[];
  }
  
  interface PriceTableProps {
    tariffData: TariffData[];
    selectedNight: number | null;
    onSelect: (nightIndex: number) => void;
  }
  

const PriceTable = ({ tariffData ,selectedNight , onSelect}: PriceTableProps)=>{

    const handleNightClick = (nightIndex: number) => {
        onSelect(nightIndex)
    };
    return (
        <div className="container mx-auto px-4">
      {tariffData.map((tariff, index) => (
        <motion.div
        initial={{opacity: 0, y:50}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2 }}

        key={index} className="mb-10 py-4">
          <h4 className="text-2xl font-bold mb-4 border-left">{tariff.title}</h4>
          <div className="table-container">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Room Type</th>
                  {Array.from({ length: 4 }, (_, i) => (
                    <th
                      key={i}
                      colSpan={2}
                      className="nights-title"
                    >
                      {i + 1} Night{i + 1 > 1 ? "s" : ""}
                    </th>
                  ))}
                </tr>
                <tr>
                <td  className="fw-regular">Rates (INR) Per Person On <strong className="fw-bold">*Twin Sharing Basis</strong></td>
                  {Array.from({ length: 4 }, (_, i) => (
                    <React.Fragment key={`column-${i}`}>
                      <th className="fw-regular">
                        Rate <br />(Per Person)
                      </th>
                      <th className="fw-regular">
                        Extra Mattress
                      </th>
                    </React.Fragment>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tariff.data.map((item, i) => (
                  <tr key={i}>
                    <td className="font-semibold">{item.roomType}</td>
                    {item.prices && item.prices.map((price, j) => (
                    <React.Fragment key={j}>
                      <td className={selectedNight === price.nights ? "selected-column" : ""}
                      onClick={() => handleNightClick(price.nights)}>
                        ₹{price.rate.toLocaleString('en-IN')}
                      </td>
                      <td 
                        className={selectedNight === price.nights ? "selected-column" : ""}
                        onClick={() => handleNightClick(price.nights)}>
                        ₹{price.extraMattress.toLocaleString('en-IN')}
                      </td>
                      </React.Fragment>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="action-buttons">
            <button>Book Now</button>
            <button>Call Now</button>
          </div>
        </motion.div>
      ))}
    </div>
    )
}

export default PriceTable;