/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Opsional: Mengaktifkan strict mode di React
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1', // Host dari Laravel backend
        port: '8000', // Port Laravel (misal: 8000 jika Laravel dijalankan di localhost:8000)
        pathname: '/storage/**', // Path yang mengizinkan Next.js untuk mengambil gambar dari storage Laravel
      },
    ],
  },
};

export default nextConfig;
