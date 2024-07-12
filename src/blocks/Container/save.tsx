import { useBlockProps } from '@wordpress/block-editor';

const save = () => {
  return <div {...useBlockProps.save()}>container</div>;
};

export default save;
