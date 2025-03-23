"use client";
import { useEffect, useRef } from "react";
import itineraryData from "../app/data"; // Import data

interface ItineraryTableProps {
  selectedDate: number | 0;
}

interface Note {
  type: "note";
  content: string;
}

interface Event {
  type: "event";
  time: string;
  description: string;
  note?: string; // Optional note property
}

type ScheduleItem = Note | Event;

interface Alternative {
  schedule: ScheduleItem[];
}

interface ItineraryDay {
  day: string;
  schedule: ScheduleItem[];
  alternative?: Alternative; // Optional alternative events
}

interface ItineraryPackage {
  package: string;
  itinerary: ItineraryDay[];
}

const typedItineraryData: ItineraryPackage[] = itineraryData as ItineraryPackage[];

const TableComponent = ({ selectedDate }: ItineraryTableProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(selectedDate);
    const handleScroll = () => {
      if (timelineRef.current) {
        // Handle scroll logic if needed
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedDate]);

  const itinerary = typedItineraryData.find((pkg) => pkg.package === String(selectedDate));

  return (
    <div className="my-5" ref={timelineRef}>
      <div className="row">
        <div className="col-md-12">
          {itinerary ? (
            itinerary.itinerary.map((day, index) => (
              <div key={index} className="itinerary-day">
                <h2>{day.day}</h2>
  
                {/* Render Schedule in Order */}
                {day.schedule.map((item, i) =>
                  item.type === "note" ? (
                    <div key={i} className="note">
                      <h6>• {item.content}</h6>
                    </div>
                  ) : (
                    <table key={i} className="table itinerary-table">
                      <tbody>
                        <tr>
                          <td className="time-col">{item.time}</td>
                          <td className="event-col">
                            {item.description}
                            {item.note && <span className="text-muted ms-2">( {item.note} )</span>}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )
                )}
  
                {/* Render Alternative Events (if available) */}
                {day.alternative && (
                  <>
                    <div className="alternative-heading">Or</div>
                    <table className="table itinerary-table">
                      <tbody>
                        {day.alternative.schedule.map((item, i) =>
                          item.type === "note" ? (
                            <tr key={i}>
                              <td colSpan={2} className="time-col">{item.content}</td>
                            </tr>
                          ) : (
                            <tr key={i}>
                              <td className="time-col">{item.time}</td>
                              <td className="event-col">
                                {item.description}
                                {item.note && <span className="text-muted ms-2">( {item.note} )</span>}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </>
                )}
              </div>
            ))
          ) : (
            <p className="text-danger">No itinerary found for the selected package.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
