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
})
