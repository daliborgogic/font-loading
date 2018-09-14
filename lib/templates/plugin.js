import { resolve } from 'path'

export default async () => {
  const fontPath = '<%= options.fontPath %>'
  const parent = document.getElementById('__nuxt')

  parent.style.fontFamily = '<%= options.fontFamily %>'

  if (fontPath) {
    const resolveFont = resolve(__dirname, fontPath)
    const font = new FontFace('<%= options.fontName %>', `url(${resolveFont})`) // eslint-disable-line no-undef

    await font.load()

    document.fonts.add(font)
    parent.style.fontFamily = '<%= options.fontName %>'
  }
}
