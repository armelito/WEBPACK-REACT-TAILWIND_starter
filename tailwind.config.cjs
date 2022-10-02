module.exports =
{
  content: 
  [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: 
  {
    fontFamily: 
    {
      displayExtraBold: ['HelveticaNowDisplay-ExtraBold'],
      displayBold: ['HelveticaNowDisplay-Bold'],
      displayMedium: ['HelveticaNowDisplay-Medium'],
      bodySemiBold: ['Mulish-SemiBold'],
      bodyMedium: ['Mulish-Medium'],
      bodyRegular: ['Mulish-Regular'],
    },
    extend: 
    {               
      colors: 
      {
        background:
        {
          light: '#F7F7FE',
          dark: '#27283F',
        },
        grey: 
        {
          '100': '#14141F',
          '90': '#27283F',
          '80': '#3A3C5F',
          '70': '#4E507F',
          '60': '#61649E',
          '50': '#7D80B5',
          '40': '#9EA0C7',
          '30': '#BABCDE',
          '20': '#D9DEF2',
          '10': '#FFFFFF',
        },
        primary: 
        {
          'darker': '#27283F',
          'dark': '#31368C',
          'default': '#3E47FA',
          'light': '#7A80FA',
          'disable': '#C2C5FF',
          'lighter': '#E0E2FF',
        },  
        secondary: 
        {
          'darker': '#E57162',
          'dark': '#FE7E6D',
          'default': '#FFA69A',
          'light': '#FDD7CB',
          'disable': '#FFF1EA',
          'lighter': '#FFFAF7',
        },
        accent:
        { 
          purple:
          {
            'default': '#775FFC',
            'light': '#A89AFF',
            'ligther': '#E7E8FF',
          },
          sky:
          {
            'default': '#00DEE7',
            'light': '#A1FCFF',
            'ligther': '#E5FEFF',
          },
          green:
          {
            'default': '#70DF9E',
            'light': '#A5E7C0',
            'ligther': '#ECFFF4',
          },
          yellow:
          {
            'default': '#FFCC77',
            'light': '#FFDDA5',
            'ligther': '#FFFDEA',
          },
          orange:
          {
            'default': '#FE7E6D',
            'light': '#FFA69A',
            'ligther': '#FFEFE7',
          },
          red:
          {
            'default': '#FE6470',
            'light': '#FF9AA2',
            'ligther': '#FFE0E2',
          },
        },
        success:
        {
          'default': '#2B4C4C',
          'default': '#39D98A',
          'disable': '#86F1BC',
          'light': '#C8FFE3',
          'lighter': '#E9FFF4',
        },
        warning:
        {
          'default': '#3D2F41',
          'default': '#FF6161',
          'disable': '#FF8D8D',
          'light': '#FFC7C7',
          'lighter': '#FFF2F2',
        },
        error:
        {
          'default': '#413D2F',
          'default': '#FFC961',
          'disable': '#FFD688',
          'light': '#FFE7BB7',
          'lighter': '#FFF7E9',
        },
      },
      fontSize: 
      {
        14: '14px',
      },
      backgroundColor: 
      {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: 
      {
        1: '1px',
      },
      borderColor: 
      {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: 
      {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: 
      {
        80: '80px',
      },
      minHeight: 
      {
        590: '590px',
      },
      backgroundImage: 
      {
        'hero-pattern':
          "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
    },
  },
  plugins: 
  [
    require('flowbite/plugin')
  ],
}