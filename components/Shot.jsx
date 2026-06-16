"use client";

import { useState } from "react";
import { shot, hostOf } from "@/lib/shot";

/**
 * Renders a container element that lazy-loads a pre-rendered site screenshot,
 * showing a shimmer while loading and a tasteful gradient + domain label on error.
 * `as` lets the same loader be a <div>, <a>, or <span> to match each section's markup.
 */
export default function Shot({
  as: Tag = "div",
  site,
  alt = "",
  light = false,
  className = "",
  children,
  ...rest
}) {
  const [status, setStatus] = useState("loading"); // loading | loaded | error

  const classes = [
    className,
    status === "loading" ? "shot-loading" : "",
    light && status === "loading" ? "shot-light" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const errorStyle =
    status === "error"
      ? { background: "linear-gradient(135deg,#023047,#06141d)" }
      : undefined;

  return (
    <Tag className={classes} style={errorStyle} {...rest}>
      {status !== "error" && (
        <img
          src={shot(site)}
          alt={alt}
          loading="eager"
          decoding="async"
          draggable={false}
          style={{ opacity: status === "loaded" ? 1 : 0, transition: "opacity 0.5s ease" }}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
      {status === "error" && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.7)",
            fontWeight: 700,
            letterSpacing: ".05em",
            textTransform: "uppercase",
            fontSize: "13px",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          {hostOf(site)}
        </span>
      )}
      {children}
    </Tag>
  );
}
