import { useBlockProps } from '@wordpress/block-editor';

type SaveProps = {
  fallbackCurrentYear?: string;
  showStartingYear?: boolean;
  startingYear?: string;
};

export default ({
  fallbackCurrentYear,
  showStartingYear,
  startingYear,
}: SaveProps) => {
  // If there is no fallbackCurrentYear, which could happen if the block
  // is loaded from a template/pattern, return null. In this case, block
  // rendering will be handled by the render.php file.
  if (!fallbackCurrentYear) {
    return null;
  }

  let displayDate;

  // Display the starting year as well if supplied by the user.
  if (showStartingYear && startingYear) {
    displayDate = startingYear + '-' + fallbackCurrentYear;
  } else {
    displayDate = fallbackCurrentYear;
  }

  return <p {...useBlockProps.save()}>© {displayDate}</p>;
};
