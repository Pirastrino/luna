// TODO: Move to attributes
const general = {
  customWidth: {
    min: 0,
    max: 1600,
    default: 1200,
  },
  // TODO: needs refactor as default = 100 is for '%' unit
  contentBoxWidth: {
    min: 0,
    max: 1600,
    default: 100,
  },
  minHeight: {
    min: 0,
    max: 1000,
    default: 0,
  },
  equalHeight: {
    default: false,
  },
  tag: {
    options: ['div', 'section', 'article', 'main', 'header', 'footer'],
    default: 'div',
  },
  overflow: {
    options: ['visible', 'hidden', 'scroll', 'auto'],
    default: 'visible',
  },
};

export { general };
