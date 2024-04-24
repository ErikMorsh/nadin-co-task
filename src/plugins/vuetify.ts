// Vuetify
// For mdi Icons you have to install @mdi/font package first and add this import here
import "@mdi/font/css/materialdesignicons.css";

// import '@/styles/main.scss'
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  defaults: {
    // TODO: maybe more costomizaiton on VSelect component
    // VSelectSmall: {
    //   style: [{ width: "100px" }],
    //   class: [],
    // },
  },

  components,
  directives,
  display: {
    mobileBreakpoint: "sm",
    thresholds: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2560,
    },
  },
  theme: {
    defaultTheme: "light",
    // variations: {
    //     colors: ['primary'],
    //     lighten: 4,
    //     darken: 4,
    // },
    themes: {
      light: {
        dark: false,
        colors: {
          BandW: "#000000",
          backgroundPrimary: "#F4F6F8",
          backgroundSecondary: "#FFFFFF",
          backgroundCardPrimary: "#F7F9F9",
          backgroundCardSecondary: "#ECFDE6",
          backgroundLinkPrimary: "#A2CFFF",
          faintedText: "#777",
          _barPrimary: "#2962FF",
          _barSecondary: "#90CAF9",
          success: "#228200",
          info: "#158DE3",
          danger: "#E42222",
          warning: "#FFD43A",
        },
      },
      dark: {
        colors: {
          BandW: "#FEFEFE",
          backgroundSecondary: "#1f262f",
          backgroundCardPrimary: "#111827",
          backgroundCardSecondary: "#0f172a",
          backgroundLinkPrimary: "#0f3258",
          _barPrimary: "#2962FF",
          _barSecondary: "#90CAF9",
        },
      },
    },
  },
});

export default vuetify;
