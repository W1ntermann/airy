import type { NextConfig } from "next";

const nextConfig = {
  images: {
      domains: [], // залиши пустим, якщо використовуєш локальні файли
      unoptimized: false, // для локальних файлів можна false
  },
}

export default nextConfig;
