import { BlockEditProps, BlockSaveProps } from '@wordpress/blocks';
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
  backgroundType: {
    type: 'string',
    enum: ['color', 'gradient'] as const,
    default: 'color',
  },
  backgroundColor: {
    type: 'string',
    default: 'none',
  },
  textColor: {
    type: 'string',
    default: 'black',
  },
  linkColor: {
    type: 'string',
    default: 'blue',
  },
  linkColorHover: {
    type: 'string',
    default: 'blue',
  },
  display: {
    type: 'string',
    enum: ['flex', 'grid'] as const,
    default: 'flex',
  },
  flexDirection: {
    type: 'string',
    enum: ['row', 'row-reverse', 'column', 'column-reverse'] as const,
    default: 'row',
  },
  flexWrap: {
    type: 'string',
    enum: ['nowrap', 'wrap', 'wrap-reverse'] as const,
    default: 'nowrap',
  },
  justifyContent: {
    type: 'string',
    enum: [
      'normal',
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
    ] as const,
    default: 'normal',
  },
  alignContent: {
    type: 'string',
    enum: [
      'normal',
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
      'baseline',
      'stretch',
    ] as const,
    default: 'normal',
  },
  alignItems: {
    type: 'string',
    enum: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'] as const,
    default: 'flex-start',
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
  backgroundType: BlockAttributes['backgroundType']['enum'][number];
  backgroundColor: BlockAttributes['backgroundColor']['default'];
  textColor: BlockAttributes['textColor']['default'];
  linkColor: BlockAttributes['linkColor']['default'];
  linkColorHover: BlockAttributes['linkColorHover']['default'];
  display: BlockAttributes['display']['enum'][number];
  flexDirection: BlockAttributes['flexDirection']['enum'][number];
  flexWrap: BlockAttributes['flexWrap']['enum'][number];
  justifyContent: BlockAttributes['justifyContent']['enum'][number];
  alignContent: BlockAttributes['alignContent']['enum'][number];
  alignItems: BlockAttributes['alignItems']['enum'][number];
};

type Colors = Pick<
  Attributes,
  'backgroundColor' | 'textColor' | 'linkColor' | 'linkColorHover'
>;

// TODO: Extract types to types.ts

export type ColorAttributes = keyof Colors;

export type EditProps = BlockEditProps<Attributes>;

export type SaveProps = BlockSaveProps<Attributes>;

export default attributes;
