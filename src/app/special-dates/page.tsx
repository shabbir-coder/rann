"use client";
import HeaderBanner from "@/components/HeaderBanner";
import Head from "next/head";
import React from "react";

const timelineData = [
  {
    year: "2026",
    events: [
      {
        month: "NOVEMBER 2026",
        details: [
          { date: "8th to 14th", event: "Diwali Week" },
          { date: "9th", event: "Dark Moon Stargazing" },
          { date: "22nd to 25th", event: "Full Moon Festival" },
        ],
      },
      {
        month: "DECEMBER 2026",
        details: [
          { date: "8th", event: "Dark Moon Stargazing" },
          { date: "18th Dec to 2nd Jan", event: "Christmas Week" },
          { date: "21st to 24th", event: "Full Moon Festival" },
        ],
      },
    ],
  },
  {
    year: "2027",
    events: [
      {
        month: "JANUARY 2027",
        details: [
          { date: "7th", event: "Dark Moon Stargazing" },
          { date: "20th to 23rd", event: "Full Moon Festival" },
        ],
      },
      {
        month: "FEBRUARY 2027",
        details: [
          { date: "6th", event: "Dark Moon Stargazing" },
          { date: "18th to 21st", event: "Full Moon Festival" },
        ],
      },
    ],
  },
];

const Timeline = () => {

  return (
    <>
      <Head>
        <title>Rannutsav - Packages</title>
      </Head>
      <HeaderBanner
        bgImage="/img/_RC10943.jpg"
        title="Rann Utsav Special Dates"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Special Dates" }]}
      />
      <div className="containerTimeline">
        <div className="headerTimeline">
          <h6 className="text-2xl font-bold mb-4 border-left">
            Mark your calendar for these unforgettable desert experiences
          </h6>
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
                          <div key={detailIndex} className="eventCard">
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