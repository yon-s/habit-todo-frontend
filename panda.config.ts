import { width } from "@fortawesome/free-solid-svg-icons/fa0"
import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Files to exclude
  exclude: [],

  // Where to look for your css declarations
  include: ["./components/**/*.{ts,tsx,js,jsx}", "./app/**/*.{ts,tsx,js,jsx}"],

  // The output directory for your css system
  outdir: "styled-system",

  // Whether to use css reset
  preflight: true,

  theme: {
    extend: {
      tokens: {
        colors: {
          accent: { value: '#4299E1' },
          contentsBg: { value: '{colors.slate.100}' },
          gray400: { value: '{colors.slate.400}' },
          text: { value: '{colors.slate.800}' },
        },
        shadows:{
          toggle: {value: '0px 3px 8px rgba(30,41,59,0.15)'}
        },
        sizes: {
          maxWidth: { value: '768px'  }
        },
        spacing: {
          bodySide: { value: '28px' }
        },
      }
    }
  }
})
