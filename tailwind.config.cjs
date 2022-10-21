const plugin = require('tailwindcss/plugin')

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
    screens: 
    {
      'phone': {'max': '500px'},
      'tablet': {'min': '500px', 'max': '1024px'},
      'laptop': {'min': '1024px', 'max': '1920px'},
      'wide': {'min': '1920px'},
    },
    spacing: 
    {
      '0': '0px',
      '0.5': '0.125rem',
      '1': '0.25rem',
      '1.5': '0.375rem',
      '2': '0.5rem',
      '2.5': '0.625rem',
      '3': '0.75rem',
      '3.5': '0.875rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '14': '3.5rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      '52': '13rem',
      '56': '14rem',
      '60': '15rem',
      '64': '16rem',
      '72': '18rem',
      '80': '20rem',
      '96': '24rem',
    },
    fontFamily: 
    {
      displayExtraBold: ['HelveticaNowDisplay-ExtraBold'],
      displayBold: ['HelveticaNowDisplay-Bold'],
      displayMedium: ['HelveticaNowDisplay-Medium'],
      bodySemiBold: ['Mulish-SemiBold'],
      bodyMedium: ['Mulish-Medium'],
      bodyRegular: ['Mulish-Regular'],
    },
    backgroundColor: theme => theme('colors'),
    backgroundSize: 
    {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: theme => theme('colors'),
    borderRadius: 
    {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
    },
    borderWidth: 
    {
      default: '1.5px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '8': '8px',
    },
    cursor: 
    {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    divideColor: theme => theme('borderColor'),
    divideOpacity: theme => theme('borderOpacity'),
    divideWidth: theme => theme('borderWidth'),
    flex: 
    {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: 
    {
      '0': '0',
      default: '1',
    },
    flexShrink: 
    {
      '0': '0',
      default: '1',
    },
    fontWeight: 
    {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    height: theme => 
    ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    margin: (theme, { negative }) => 
    ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    maxHeight: 
    {
      full: '100%',
      screen: '100vh',
    },
    maxWidth: (theme, { breakpoints }) => 
    ({
      none: 'none',
      full: '100%',
      'screen': '100vw',
      ...theme('spacing'),
      ...breakpoints(theme('screens')),
    }),
    minHeight: 
    {
      '0': '0',
      full: '100%',
      screen: '100vh',
    },
    minWidth: 
    {
      '0': '0',
      full: '100%',
      'screen': '100vw',
    },
    objectPosition: 
    {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: 
    {
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1',
    },
    order: 
    {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
    },
    padding: theme => theme('spacing'),
    placeholderColor: theme => theme('colors'),
    placeholderOpacity: theme => theme('opacity'),
    space: (theme, { negative }) => 
    ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    stroke: {
      current: 'currentColor',
    },
    strokeWidth: {
      '0': '0',
      '1': '1',
      '2': '2',
    },
    textColor: theme => theme('colors'),
    textOpacity: theme => theme('opacity'),
    width: theme => 
    ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
    }),
    zIndex: 
    {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
    },
    gap: theme => theme('spacing'),
    transformOrigin: 
    {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    scale: 
    {
      '0': '0',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
    },
    rotate:
    {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '0': '0',
      '45': '45deg',
      '90': '90deg',
      '180': '180deg',
    },
    translate: (theme, { negative }) => 
    ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '-full': '-100%',
      '-1/2': '-50%',
      '1/2': '50%',
      full: '100%',
    }),
    skew: 
    {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '0': '0',
      '3': '3deg',
      '6': '6deg',
      '12': '12deg',
    },
    transitionProperty: 
    {
      none: 'none',
      all: 'all',
      default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: 
    {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    transitionDuration: 
    {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },
    transitionDelay: 
    {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },
    extend: 
    {
      fontSize: 
      {
        'h1': '3.75rem',
        'h2': '3rem',
        'h3': '2.25rem',
        'h4': '1.875rem',
        'h5': '1.5rem',
        'h6': '1.25rem',
        '18': '1.125rem',
        '16': '1rem',
        '14': '0.875rem',
        '12': '0.75rem',
        '10': '0.625rem',
        '8': '0.5rem',
      },
      lineHeight: 
      {
        'h1': '140%',
        'h2': '140%',
        'h3': '140%',
        'h4': '140%',
        'h5': '150%',
        'h6': '160%',
        'subtitle': '160%',
        'body-large': '160%',
        'body': '175%',
        'button-large': '170%',
        'button': '160%',
      }, 
      letterSpacing: 
      {
        'h1': '-0.025em',
        'h2': '-0.015em',
        'h3': '-0.010em',
        'h4': '-0.005em',
        'h5': '0em',
        'h6': '0em',
        'subtitle': '0.005em',
        'body-large': '0.01em',
        'body': '0.015em',
        'body-small': '0.020em',
        'button-large': '0.050em',
        'button': '0.045em',
        'button-small': '0.040em',
      },              
      colors: 
      {
        background:
        {
          light: '#F7F7FE',
          dark: '#27283F',
        },
        dark: 
        {
          '1': '#161522',
          '2': '#28293D',
          '3': '#4B4D73',
          '4': '#8A8DBA',
          '5': '#C0C2DE',
        },
        light: 
        {
          '5': '#C7C7E5',
          '4': '#E5E5F6',
          '3': '#EDEDF8',
          '2': '#F7F7FC',
          '1': '#FFFFFF',
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
      borderRadius: 
      {
        none: '0',
        '2': '0.125rem',
        '4': '0.25rem',
        '6': '0.375rem',
        '8': '0.5rem',
        '10': '0.625rem',
        '12': '0.75rem',
        full: '9999px',
      },
    },
    variants:
    {
      accessibility: ['responsive', 'focus'],
      alignContent: ['responsive'],
      alignItems: ['responsive'],
      alignSelf: ['responsive'],
      appearance: ['responsive'],
      backgroundAttachment: ['responsive'],
      backgroundColor: ['responsive', 'hover', 'focus'],
      backgroundOpacity: ['responsive', 'hover', 'focus'],
      backgroundPosition: ['responsive'],
      backgroundRepeat: ['responsive'],
      backgroundSize: ['responsive'],
      borderCollapse: ['responsive'],
      borderColor: ['responsive', 'hover', 'focus'],
      borderOpacity: ['responsive', 'hover', 'focus'],
      borderRadius: ['responsive'],
      borderStyle: ['responsive'],
      borderWidth: ['responsive'],
      boxShadow: ['responsive', 'hover', 'focus'],
      boxSizing: ['responsive'],
      cursor: ['responsive'],
      display: ['responsive'],
      divideColor: ['responsive'],
      divideOpacity: ['responsive'],
      divideWidth: ['responsive'],
      fill: ['responsive'],
      flex: ['responsive'],
      flexDirection: ['responsive'],
      flexGrow: ['responsive'],
      flexShrink: ['responsive'],
      flexWrap: ['responsive'],
      float: ['responsive'],
      clear: ['responsive'],
      fontFamily: ['responsive'],
      fontSize: ['responsive'],
      fontSmoothing: ['responsive'],
      fontStyle: ['responsive'],
      fontWeight: ['responsive', 'hover', 'focus'],
      height: ['responsive'],
      inset: ['responsive'],
      justifyContent: ['responsive'],
      letterSpacing: ['responsive'],
      lineHeight: ['responsive'],
      listStylePosition: ['responsive'],
      listStyleType: ['responsive'],
      margin: ['responsive'],
      maxHeight: ['responsive'],
      maxWidth: ['responsive'],
      minHeight: ['responsive'],
      minWidth: ['responsive'],
      objectFit: ['responsive'],
      objectPosition: ['responsive'],
      opacity: ['responsive', 'hover', 'focus'],
      order: ['responsive'],
      outline: ['responsive', 'focus'],
      overflow: ['responsive'],
      padding: ['responsive'],
      placeholderColor: ['responsive', 'focus'],
      placeholderOpacity: ['responsive', 'focus'],
      pointerEvents: ['responsive'],
      position: ['responsive'],
      resize: ['responsive'],
      space: ['responsive'],
      stroke: ['responsive'],
      strokeWidth: ['responsive'],
      tableLayout: ['responsive'],
      textAlign: ['responsive'],
      textColor: ['responsive', 'hover', 'focus'],
      textOpacity: ['responsive', 'hover', 'focus'],
      textDecoration: ['responsive', 'hover', 'focus'],
      textTransform: ['responsive'],
      userSelect: ['responsive'],
      verticalAlign: ['responsive'],
      visibility: ['responsive'],
      whitespace: ['responsive'],
      width: ['responsive'],
      wordBreak: ['responsive'],
      zIndex: ['responsive'],
      gap: ['responsive'],
      gridAutoFlow: ['responsive'],
      gridTemplateColumns: ['responsive'],
      gridColumn: ['responsive'],
      gridColumnStart: ['responsive'],
      gridColumnEnd: ['responsive'],
      gridTemplateRows: ['responsive'],
      gridRow: ['responsive'],
      gridRowStart: ['responsive'],
      gridRowEnd: ['responsive'],
      transform: ['responsive'],
      transformOrigin: ['responsive'],
      scale: ['responsive', 'hover', 'focus'],
      rotate: ['responsive', 'hover', 'focus'],
      translate: ['responsive', 'hover', 'focus'],
      skew: ['responsive', 'hover', 'focus'],
      transitionProperty: ['responsive'],
      transitionTimingFunction: ['responsive'],
      transitionDuration: ['responsive'],
      transitionDelay: ['responsive'],
    }
  },
  plugins: 
  [
    require('flowbite/plugin'),
    plugin(function ({ addUtilities, matchUtilities, theme }) 
    {
      addUtilities({
        '.ratio-sidebar-desktop': 
        {
          width: 'calc(100vw / 1440 * 296)',
        },
        '.ratio-dashboard-desktop': 
        {
          width: 'calc(100vw / 1440 * 1144)',
        },
        '.ratio-sidebar-collapsed': 
        {
          width: 'calc(100vw / 1440 * 75)',
        },
        '.ratio-dashboard-collapsed': 
        {
          width: 'calc(100vw / 1440 * 1365)',
        },
      })
      matchUtilities(
        {
          'w-ratio': (value) => ({
            width: `calc(${theme('width.screen')} / 1440 * ${value})`
          }),
        },
        { values: theme('width') }
      )
    })
  ],
  corePlugins: 
  {
    preflight: false,
  }
}