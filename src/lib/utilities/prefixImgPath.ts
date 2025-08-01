const basePath =
  process.env.NEXT_PUBLIC_ENV === 'github'
    ? process.env.NEXT_PUBLIC_PAGES_BASE_PATH || ''
    : '';

export function prefixImgPath(path: string): string {
  return `${basePath}${path}`;
}
