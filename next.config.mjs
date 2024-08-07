/** @type {import('next').NextConfig} */
import { createContentlayerPlugin } from "next-contentlayer";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

export default withContentlayer(nextConfig);
