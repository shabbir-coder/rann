"use client";
import HeaderBanner from "@/components/HeaderBanner";
import Head from "next/head";
import React from "react";

const timelineData = [
  {
    year: "2025",
    events: [
      {
        month: "NOVEMBER 2025",
        details: [
          { date: "14th to 16th", event: "Full Moon Festival"},
          { date: "30th", event: "Dark Moon Stargazing"},
        ],
      },
      {
        month: "DECEMBER 2025",
        details: [
          { date: "14th to 16th", event: "Full Moon Festival"},
          { date: "20th to 31st", event: "Christmas Week"},
          { date: "30th", event: "Dark Moon Stargazing"},
        ],
      },
    ],
  },
  {
    year: "2026",
    events: [
      {
        month: "JANUARY 2026",
        details: [
          { date: "12th to 14th", event: "Full Moon Festival"},
          { date: "29th", event: "Dark Moon Stargazing"},
        ],
      },
      {
        month: "FEBRUARY 2026",
        details: [
          { date: "11th to 13th", event: "Full Moon Festival"},
          { date: "28th", event: "Dark Moon Stargazing"},
        ],
      },
    ],
  },
];

const Timeline = () => {

  return (
    <>
        <Head>
            <title>Tours and Travels - Packages</title>
        </Head>
        <HeaderBanner
        bgImage="/img/_RC10943.jpg" // Change to your image path
        title="Rann Utsav Special Dates"
        breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Special Dates" }
        ]}
        />
        <div className="containerTimeline">
        <div className="headerTimeline">
            <h6 className="text-2xl font-bold mb-4 border-left">Mark your calendar for these unforgettable desert experiences</h6>
        </div>
        
        <div className="timeline">
            {timelineData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="yearBlock">
                <div className="yearMarker">
                <div className="yearCircle"></div>
                <h2 className="year">{yearData.year}</h2>
                </div>
                
                <div className="eventsContainer">
                {yearData.events.map((monthData, monthIndex) => (
                    <div key={monthIndex} className="monthBlock">
                    <h3 className="month">{monthData.month}</h3>
                    
                    <div className="eventsList">
                        {monthData.details.map((detail, detailIndex) => {
                        return (
                            <div 
                            key={detailIndex} 
                            className="eventCard"
                            >
                            <div className="eventHeader">
                                <span className="eventDate">{detail.date}</span>
                                <span className="eventName">{detail.event}</span>
                            </div>
                            </div>
                        );
                        })}
                    </div>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
        </div>
    </>
  );
};

export default Timeline;