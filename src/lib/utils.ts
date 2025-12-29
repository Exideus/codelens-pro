/**
 * Format a number as currency
 */
export function formatCurrency(num: number): string {
  if (num >= 1000000) {
    return '$' + (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return '$' + Math.round(num).toLocaleString()
  }
  return '$' + num
}

/**
 * Combine class names, filtering out falsy values
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
