import { BlockAttribute } from '@wordpress/blocks';

export type Attribute = BlockAttribute<unknown> & {
  enum?: string[] | number[];
};
