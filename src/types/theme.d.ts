import '@mui/material/styles/createPalette';
declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    otherColor?: PaletteColorOptions;
  }
  interface Palette {
    otherColor: PaletteColor;
  }
}
