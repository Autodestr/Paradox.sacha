import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      darkGrey: '#0E0E0E',
      darkestGrey: '#151515',
      blackGrey: '#1A1A1A',
      grey: '#646464',
      lightBlack: '#2B2B2B',
      lightestBlack: '#282828',
      darkBlackGray: '#202325',
      lightDarkGrey: '#9e9e9e',
      lightWhite: '#E6E6E6',
      darkWhite: '#CCCCCC',
      lightGrey: '#727272',
      darknessGrey: '#828282',
      lightestGrey: '#7A7A7A',
      whiteGrey: '#9B9B9B', //#A0A0A0
      whiteGreyLight: '#A3A3A3',
      red: '#FF0000',
      redLight: '#F06A5C',
      green: '#00FF00',
      lightGreen: '#00FF47',
      yellow: '#FFB900',
      lightBlue: '#B2C3FF',
      blue: '#406AFF',
      lightYellow: '#FFE195',
    },
    keyFrames: {
      wiggle: {
        '0%': {
          transform: 'rotate(0deg)'
          },
        '100%': {
        transform: 'rotate(-360deg)'
        }
        }
      },
    fontSize: {
      s: '8px ',
    },
    fontFamily: {
      Lato: ['Lato'],
    },
    maxWidth: {
      modalAuth: '400px',
      table: '996px',
      modalSession: '800px',
    },
    boxShadow: {
      bitokShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.5)',
    },
  },
})
