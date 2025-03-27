import TableComponent from "./TableComponent";

const ItinerarySection = () => {
  const data = [
    { title: "1 Night / 2 Days", mobile: "1N/2D" },
    { title: "2 Nights / 3 Days", mobile: "2N/3D" },
    { title: "3 Nights / 4 Days", mobile: "3N/4D" },
    { title: "4 Nights / 5 Days", mobile: "4N/5D" },
  ];

  return (
    <div className="container my-5">
      <h4 className="text-2xl font-bold mb-4 border-left">&nbsp;Know your Itinerary</h4>

      {/* Tabs for both Desktop and Mobile */}
      <div
      className="sticky-top-mobile">
        <ul className="priceNav priceNav-tabs border-bottom-0" id="itineraryTabs" role="tablist">
          {data.map((item, index) => (
            <li className="priceNav-item flex-grow-1 text-center" key={index} role="presentation">
              <button
                className={`priceNav-link w-100 ${index === 0 ? "active" : ""}`}
                id={`tab${index + 1}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#tab${index + 1}`}
                type="button"
                role="tab"
                aria-controls={`tab${index + 1}`}
                aria-selected={index === 0 ? "true" : "false"}
              >
                {/* Split the title into two lines for mobile */}
                <span className="d-none d-md-inline">{item.title}
                  <br /><span className="text-small">Package</span>
                </span>
                <span className="d-inline d-md-none">{item.mobile}
                  <br /><span className="text-small">Package</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-content" id="itineraryTabsContent">
        {data.map((item, index) => (
          <div
            key={index}
            className={`tab-pane fade ${index === 0 ? "active show" : ""}`}
            id={`tab${index + 1}`}
            role="tabpanel"
            aria-labelledby={`tab${index + 1}-tab`}
          >
            <TableComponent selectedDate={index + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItinerarySection;