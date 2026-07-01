import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Autorise les images distantes utilisées comme placeholders.
    // Remplace par ton propre CDN / dossier public une fois les vraies photos ajoutées.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
