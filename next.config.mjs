import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve("src");
    return config;
  },
  output: "export",
};

export default nextConfig;
