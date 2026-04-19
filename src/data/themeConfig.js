const defaults = {
  showBlobs: true,
  showFloatingShapes: true,
  showGridPattern: true,
  gradientText: true,
  sectionBar: 'gradient',    // gradient | solid | neon | wavy | thin | bold-red | double-rule | none
  heroDecoration: null,       // null | neo_blocks | synthwave_grid | constructivist_stripe | doodles | editorial_mark
  heroWrapper: null,          // null | win95
  aboutDots: 'circle',       // circle | square | triangle | doodle
  aboutHalo: true,
  aboutPerspective: true,
};

const themes = {
  flat_design: {},

  neobrutalism: {
    showBlobs: false, showFloatingShapes: false, showGridPattern: false,
    gradientText: false, sectionBar: 'solid',
    heroDecoration: 'neo_blocks', aboutDots: 'square', aboutHalo: false,
  },

  glassmorphism: {},

  retro_synthwave: {
    showBlobs: false, showFloatingShapes: false,
    gradientText: false, sectionBar: 'neon',
    heroDecoration: 'synthwave_grid',
  },

  minimalisme: {
    showBlobs: false, showFloatingShapes: false, showGridPattern: false,
    gradientText: false, sectionBar: 'thin',
    aboutHalo: false,
  },

  dialup: {
    showBlobs: false, showFloatingShapes: false, showGridPattern: false,
    gradientText: false, sectionBar: 'solid',
    heroWrapper: 'win95', aboutDots: 'square', aboutHalo: false, aboutPerspective: false,
  },

  constructivism: {
    showBlobs: false, showFloatingShapes: false, showGridPattern: false,
    gradientText: false, sectionBar: 'bold-red',
    heroDecoration: 'constructivist_stripe', aboutDots: 'triangle', aboutHalo: false,
  },

  editorial: {
    showBlobs: false, showFloatingShapes: false, showGridPattern: false,
    gradientText: false, sectionBar: 'double-rule',
    heroDecoration: 'editorial_mark', aboutHalo: false,
  },

  hand_drawn: {
    showBlobs: false, showFloatingShapes: false, showGridPattern: false,
    gradientText: false, sectionBar: 'wavy',
    heroDecoration: 'doodles', aboutDots: 'doodle', aboutHalo: false,
  },

  retro: {
    showBlobs: false, showFloatingShapes: false,
    gradientText: false, sectionBar: 'solid',
  },

  y2k: { sectionBar: 'gradient' },

  parallax: { sectionBar: 'gradient' },

  resonant_stark: {
    showBlobs: false, showFloatingShapes: false, showGridPattern: false,
    gradientText: false, sectionBar: 'thin',
    aboutHalo: false,
  },

  skeuomorphisme: {
    showBlobs: false, showFloatingShapes: false,
    gradientText: false, sectionBar: 'solid',
  },
};

export function getThemeConfig(theme) {
  return { ...defaults, ...(themes[theme] || {}) };
}
