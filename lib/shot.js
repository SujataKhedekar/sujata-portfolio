// Locally pre-rendered screenshot of each live site (instant, no external dependency).
// Captured into /public/assets/shots/<host-with-dashes>.webp
export const shot = (url) =>
  `/assets/shots/${url
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "")
    .replace(/\./g, "-")}.webp`;

export const hostOf = (url) =>
  url.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
