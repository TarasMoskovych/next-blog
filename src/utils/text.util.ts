export const toHashtag = (values: string[]): string => {
  return `#${values[0]
    .toLowerCase()
    .replace(/[^a-z ]/g, '')
    .replace(/[ ]/g, '-')}`;
};
