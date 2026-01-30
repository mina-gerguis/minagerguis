import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  images: {
    unoptimized: true,
  },
};
// module.exports = nextConfig;
const withNextIntl = createNextIntlPlugin();

// export default nextConfig;

export default withNextIntl(nextConfig);