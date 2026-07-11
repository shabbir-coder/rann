"use client"
import React from "react";
import { motion } from "framer-motion";
import { useEnquiry } from './EnquiryContext';

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

// For each night-column, figures out which consecutive room-type rows share the
// same "extra mattress" rate so the cell can be rendered once with a rowSpan,
// instead of repeating the same number on every row.
interface Span {
  render: boolean;
  span: number;
}

function computeExtraMattressSpans(data: TariffItem[]): Span[][] {
  const nightsCount = data[0]?.prices.length ?? 0;
  const spans: Span[][] = data.map(() =>
    Array.from({ length: nightsCount }, () => ({ render: true, span: 1 }))
  );

  for (let col = 0; col < nightsCount; col++) {
    let row = 0;
    while (row < data.length) {
      let span = 1;
      while (
        row + span < data.length &&
        data[row + span].prices[col]?.extraMattress === data[row].prices[col]?.extraMattress
      ) {
        span++;
      }
      spans[row][col] = { render: true, span };
      for (let k = 1; k < span; k++) {
        spans[row + k][col] = { render: false, span: 0 };
      }
      row += span;
    }
  }

  return spans;
}

const PriceTable = ({ tariffData, selectedNight, onSelect }: PriceTableProps) => {
  const { openModal } = useEnquiry();

  const handleNightClick = (nightIndex: number) => {
    onSelect(nightIndex);
  };

  return (
    <div className="container mx-auto px-4">
      {tariffData.map((tariff, index) => {
        const extraMattressSpans = computeExtraMattressSpans(tariff.data);
        const nightsCount = tariff.data[0]?.prices.length ?? 3;

        return (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            key={index}
            className="mb-10 py-4"
          >
            <h4 className="text-2xl font-bold mb-4 border-left">{tariff.title}</h4>
            <div className="table-container">
              <table className="custom-table">
                <caption className="sr-only">{tariff.title}</caption>
                <thead>
                  <tr>
                    <th>Room Type</th>
                    {Array.from({ length: nightsCount }, (_, i) => (
                      <th key={i} colSpan={2} className="nights-title">
                        {i + 1} Night{i + 1 > 1 ? "s" : ""}
                      </th>
                    ))}
                  </tr>
                  <tr>
                    <td className="fw-regular">
                      Rates (INR) Per Person On <strong className="fw-bold">*Twin Sharing Basis</strong>
                    </td>
                    {Array.from({ length: nightsCount }, (_, i) => (
                      <React.Fragment key={`column-${i}`}>
                        <th className="fw-regular">
                          Rate <br />(Per Person)
                        </th>
                        <th className="fw-regular">Extra Mattress</th>
                      </React.Fragment>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tariff.data.map((item, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{item.roomType}</td>
                      {item.prices.map((price, j) => {
                        const isSelected = selectedNight === price.nights;
                        const span = extraMattressSpans[i][j];

                        return (
                          <React.Fragment key={j}>
                            <td
                              className={isSelected ? "selected-column" : ""}
                              onClick={() => handleNightClick(price.nights)}
                            >
                              ₹{price.rate.toLocaleString("en-IN")}
                            </td>
                            {span.render && (
                              <td
                                rowSpan={span.span}
                                className={isSelected ? "selected-column" : ""}
                                onClick={() => handleNightClick(price.nights)}
                              >
                                ₹{price.extraMattress.toLocaleString("en-IN")}
                              </td>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="action-buttons">
              <button onClick={openModal} className="btn btn-primary">
                Enquire Now
              </button>
              <a href="tel:+919876543210" className="btn btn-outline-primary">
                Call Now
              </a>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PriceTable;