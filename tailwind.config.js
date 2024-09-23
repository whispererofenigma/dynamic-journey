/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './frontend/**/*.html',  // Adjust this path to match your HTML file structure
    './frontend/**/*.js', 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blog': "url('/frontend/public/images/blog.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      
    },
  },
  plugins: [],
}

