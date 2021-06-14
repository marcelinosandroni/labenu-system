export const theme = {
  primary: '#fe7e02',
  secondary: '#f9b24e',
  textPrimary: '#323b3f',
  textSecondary: '#fff',
  backgroundPrimary: '#fff',
  backgroundSecondary: '#e3e8eb',
  cardPrimary: '#45525b',
  cardSecondary: '#bccbd5',
  typography: {
    title: '5rem',
    subtitle1: '3rem',
    subtitle2: '1.8rem',
    subtitle3: '1.2rem',
    body1: '1rem',
    body2: '0.8rem',
    button: '1.8rem',
    caption: '0.6rem'
  },
  space(size: number) {
    return this.rem(size * 8)
  },
  rem: (pixel: number) => `${pixel / 16}rem`
}
