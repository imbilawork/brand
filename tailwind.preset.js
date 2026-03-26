/**
 * Imbila.AI Tailwind CSS Preset v3.0
 * Import in your tailwind.config.js:
 *   presets: [require('./agentbrand/tailwind.preset.js')]
 */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        honey: {
          DEFAULT: '#EDAF42',
          light:   '#F5C96E',
          dark:    '#C8922F',
          deep:    '#A67720',
          wash:    '#FAE0A5',
        },
        black: {
          DEFAULT: '#0A0A0A',
          rich:    '#111111',
          soft:    '#1A1A1A',
        },
        grey: {
          50:  '#F5F5F5',
          100: '#EEEEEE',
          200: '#DDDDDD',
          300: '#BBBBBB',
          400: '#999999',
          500: '#777777',
          600: '#555555',
          700: '#3D3D3D',
          800: '#2A2A2A',
          900: '#1F1E1E',
        },
        white: '#FAFAFA',
        success: '#3A9E6B',
        warning: '#E8A838',
        error:   '#D94F4F',
        info:    '#4A90B8',
      },
      borderRadius: {
        sm:   '6px',
        md:   '10px',
        lg:   '16px',
        pill: '100px',
      },
      maxWidth: {
        page: '1120px',
        prose: '64ch',
      },
      spacing: {
        'page':         '40px',
        'page-mobile':  '20px',
        'section':      '100px',
        'section-mobile': '64px',
        'nav':          '56px',
      },
      fontSize: {
        'display': ['clamp(40px, 5vw, 56px)', { lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: '800' }],
        'h2':      ['clamp(28px, 3.5vw, 36px)', { lineHeight: '1.12', letterSpacing: '-0.025em', fontWeight: '700' }],
        'h3':      ['11px', { lineHeight: '1.3', letterSpacing: '0.14em', fontWeight: '700' }],
        'h4':      ['18px', { lineHeight: '1.3', fontWeight: '600' }],
        'body':    ['16px', { lineHeight: '1.7', fontWeight: '400' }],
        'small':   ['13px', { lineHeight: '1.5', fontWeight: '500' }],
        'label':   ['10px', { lineHeight: '1.3', letterSpacing: '0.2em', fontWeight: '700' }],
      },
    },
  },
};
