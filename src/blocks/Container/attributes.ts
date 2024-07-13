import { Attribute } from 'src/types';
import { general } from './settings';

export const attributes = {
  containerWidth: {
    type: 'string',
    enum: ['full_width', 'boxed', 'custom'] as const,
    default: 'full',
  },
  customWidth: {
    type: 'number',
    default: general.customWidth.default,
  },
  customWidthUnit: {
    type: 'string',
    enum: ['px', '%', 'vw'] as const,
    default: 'px',
  },
  contentWidth: {
    type: 'string',
    enum: ['full_width', 'boxed'] as const,
    default: 'boxed',
  },
  contentBoxWidth: {
    type: 'number',
    default: general.customWidth.default,
  },
  contentBoxWidthUnit: {
    type: 'string',
    enum: ['px', '%', 'vw'] as const,
    default: '%',
  },
  minHeight: {
    type: 'number',
    default: general.minHeight.default,
  },
  minHeightUnit: {
    type: 'string',
    enum: ['px', 'vh'] as const,
    default: 'px',
  },
  overflowX: {
    type: 'string',
    enum: ['visible', 'hidden', 'scroll', 'auto'] as const,
    default: 'visible',
  },
  overflowY: {
    type: 'string',
    enum: ['visible', 'hidden', 'scroll', 'auto'] as const,
    default: 'visible',
  },
  htmlTag: {
    type: 'string',
    enum: [
      'div',
      'section',
      'article',
      'main',
      'header',
      'footer',
      'nav',
    ] as const,
    default: 'div',
  },
  layoutType: {
    type: 'string',
    enum: ['flex', 'grid'] as const,
    default: 'flex',
  },
} satisfies { [key: string]: Attribute };

type BlockAttributes = typeof attributes;

export type Attributes = {
  containerWidth: BlockAttributes['containerWidth']['enum'][number];
  customWidth: BlockAttributes['customWidth']['default'];
  customWidthUnit: BlockAttributes['customWidthUnit']['enum'][number];
  contentWidth: BlockAttributes['contentWidth']['enum'][number];
  contentBoxWidth: BlockAttributes['contentBoxWidth']['default'];
  contentBoxWidthUnit: BlockAttributes['contentBoxWidthUnit']['enum'][number];
  minHeight: BlockAttributes['minHeight']['default'];
  minHeightUnit: BlockAttributes['minHeightUnit']['enum'][number];
  overflowX: BlockAttributes['overflowX']['enum'][number];
  overflowY: BlockAttributes['overflowY']['enum'][number];
  htmlTag: BlockAttributes['htmlTag']['enum'][number];
  layoutType: BlockAttributes['layoutType']['enum'][number];
};

export default attributes;
