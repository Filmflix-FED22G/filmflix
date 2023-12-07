export default function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/'/g, '') // remove apostrophes
    .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric characters with dashes
    .replace(/^-+|-+$/g, ''); // remove leading and trailing dashes
}
