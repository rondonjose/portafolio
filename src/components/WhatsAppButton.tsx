"use client";

import React from "react";

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/573160475368"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq("track", "Lead");
        }
      }}
      style={{
        position: "fixed",
        top: "50%",
        right: "20px",
        transform: "translateY(-50%)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 16px",
        backgroundColor: "#25D366",
        borderRadius: "50px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "bold",
        textDecoration: "none",
        gap: "8px",
        transition: "background-color 0.3s ease, transform 0.2s ease",
        zIndex: 1000,
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = "#1DA851";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = "#25D366";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <span>Contáctame por</span>
        <span>WhatsApp</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        width="20"
        height="20"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.74 5.499 2.03 7.83L0 32l8.37-2.03A15.91 15.91 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.44c-2.59 0-5.03-.67-7.17-1.84l-.51-.3-4.97 1.2 1.2-4.97-.3-.51A13.44 13.44 0 012.56 16c0-7.41 6.03-13.44 13.44-13.44 7.41 0 13.44 6.03 13.44 13.44 0 7.41-6.03 13.44-13.44 13.44zm7.17-9.67c-.39-.2-2.3-1.14-2.66-1.27-.36-.13-.62-.2-.88.2-.26.39-1.02 1.27-1.25 1.53-.23.26-.46.29-.85.1-.39-.2-1.65-.61-3.15-1.94-1.16-1.03-1.94-2.3-2.17-2.69-.23-.39-.02-.6.17-.79.18-.18.39-.46.59-.69.2-.23.26-.39.39-.65.13-.26.07-.49-.03-.69-.1-.2-.88-2.14-1.21-2.94-.32-.78-.65-.67-.88-.68-.23-.01-.49-.01-.75-.01-.26 0-.69.1-1.05.49-.36.39-1.38 1.35-1.38 3.29 0 1.93 1.41 3.8 1.61 4.07.2.26 2.8 4.27 6.8 5.99.95.41 1.69.65 2.27.83.95.3 1.82.26 2.5.16.76-.11 2.3-.94 2.63-1.85.33-.91.33-1.69.23-1.85-.1-.16-.36-.26-.75-.46z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;