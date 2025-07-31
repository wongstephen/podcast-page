export function logError(error: Error): void {
  if (process.env.NODE_ENV === 'development') {
    console.error('Error logged:', error);
  } else {
    console.error('Production error:', error);
    // TODO: Send to logging service
  }
}
