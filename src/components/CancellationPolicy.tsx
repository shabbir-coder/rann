import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="container cancellation-policy">
      <h4 className="text-2xl font-bold mb-4 border-left">Cancellation & Refund Policy</h4>
      <ul className="policy-list">
        <li>
          90% Refund if cancelled more than or equal to 30 days prior to the scheduled arrival date.
        </li>
        <li>
          60% Refund if cancelled more than or equal to 15 days prior to the scheduled arrival date but less than 30 days to the scheduled arrival date.
        </li>
        <li>
          No Refund, if cancelled less than 15 days prior to the scheduled arrival.
        </li>
        <li>
          In case of any date change ₹3000/- Per Tent + 18% (GST) will be charged, in addition to rate difference charges if any.
        </li>
        <li>
          Booking can be made/processed under one main guest’s name, and that guest should be travelling. In the absence of the named guest, name change charges of ₹1500 + 18% (GST) will be applicable.
        </li>
        <li>
          Rates are exclusive of applicable taxes.
        </li>
        <li>
          GST shall be charged as per applicable.
        </li>
        <li>
          In case of triple occupancy, any person above 6 yrs. of age will be charged as an extra person (with mattress).
        </li>
      </ul>
      <p className="policy-note">
        <strong>Note:</strong> Organiser reserves all rights to make any changes without prior notice.
      </p>
    </div>
  );
};

export default CancellationPolicy;