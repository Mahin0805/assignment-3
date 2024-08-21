/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        // Custom classes for title, subtitle, and description
        typography: {
          title: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1E40AF',
          },
          subtitle: {
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1E3A8A',
          },
          description: {
            fontSize: '1rem',
            fontWeight: 'normal',
            color: '#6B7280',
          },
        },
      },
    },
    plugins: [],
  };
  