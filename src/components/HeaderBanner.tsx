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
      className="container-fluid py-5 mb-5"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="display-4 text-white mb-3"
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
