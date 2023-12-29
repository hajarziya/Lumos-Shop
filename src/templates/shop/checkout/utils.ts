export function generateTrackingNumber () {
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let trackingNumber = ''

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    trackingNumber += characters.charAt(randomIndex)
  }

  return trackingNumber
}
