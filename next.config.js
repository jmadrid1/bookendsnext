/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['imdb-api.com', 'm.media-amazon.com'],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'bookgrey': '#121212',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
}
