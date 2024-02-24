function getPreferredColorSchema(): 'dark' | 'light' {
  const isDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  if (isDark) return 'dark'
  return 'light'
}

export default getPreferredColorSchema
