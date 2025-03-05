export default function generateRandomGradient() {
  const hue1 = Math.floor(Math.random() * 360)
  const hue2 = (hue1 + 30 + Math.floor(Math.random() * 30)) % 360
  return {
    from: `hsl(${hue1}, 70%, 60%)`,
    to: `hsl(${hue2}, 70%, 60%)`,
  }
}
