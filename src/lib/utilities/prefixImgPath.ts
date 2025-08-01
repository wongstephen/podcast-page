const basePath = process.env.PAGES_BASE_PATH || '';

export function prefixImgPath(path: string): string {
  return `${basePath}${path}`;
}
