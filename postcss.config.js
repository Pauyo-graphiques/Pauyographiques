// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Optionnel : ajout d'un minifier pour production
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
};
