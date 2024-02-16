export const getRipplePositionAndSideWidth = (event: React.MouseEvent) => {
  const rippleContainer = event.currentTarget.getBoundingClientRect()

  const sideWidth =
    rippleContainer.width > rippleContainer.height
      ? rippleContainer.width
      : rippleContainer.height

  const x = event.pageX - rippleContainer.x - sideWidth / 2 - window.scrollX
  const y = event.pageY - rippleContainer.y - sideWidth / 2 - window.scrollY

  return {
    x,
    y,
    sideWidth,
  }
}
