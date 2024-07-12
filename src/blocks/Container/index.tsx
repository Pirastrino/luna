import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import metadata from './block.json';
import { Lucide } from '../icons';

registerBlockType(metadata.name, {
  editorStyle: 'file:../../index.css',
  title: metadata.title,
  category: metadata.category,
  attributes: attributes,
  icon: Lucide.LayoutTemplate,
  edit: Edit,
  save,
});
