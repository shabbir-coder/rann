"use client";

import { motion } from "framer-motion";

interface HeaderBannerProps {
  bgImage: string; // Background image URL
  title: string; // Main heading
  breadcrumbs: { label: string; href?: string }[]; // Breadcrumb data
}

export default function HeaderBanner({ bgImage, title, breadcrumbs }: HeaderBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="container-fluid py-5 mb-5 position-relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black opacity overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>
      <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="display-2 text-white mb-3"
        >
          {title}
        </motion.h1>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            {breadcrumbs.map((crumb, index) => (
              <li
                key={index}
                className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? "text-primary active" : ""}`}
              >
                {crumb.href ? (
                  <a className="text-white" href={crumb.href}>
                    {crumb.label}
                  </a>
                ) : (
                  crumb.label
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </motion.div>
  );
}
