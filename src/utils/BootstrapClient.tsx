"use client"; // Ensures this runs only on the client side

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null; // This component only runs the effect, so it doesn't render anything
}
