import Typography from 'typography'
import fairyGateTheme from 'typography-theme-fairy-gates'
import kirkhamTheme from 'typography-theme-kirkham'

const fairyTypography = new Typography(fairyGateTheme)
const kirkhamTypography = new Typography(kirkhamTheme)

export const { scale, thythm, options } = fairyTypography
export const { rhythm } = kirkhamTypography
export default kirkhamTypography