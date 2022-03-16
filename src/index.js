const puppeteer = require('puppeteer')

const path = require('path')
const fs = require('fs')

/**
 * Opens a browser, outputs html to image as result.
 */
async function run(html, target) {
    const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox", "--window-size=1280x720"] })

    const page = await browser.newPage()

    await page.setContent(html)

    const pageContent = await page.$(target)

    const image = await pageContent.screenshot({ omitBackground: true })

    await page.close()
    await browser.close()

    return image
}

console.log('Loading HTML...')

const html = fs.readFileSync(path.resolve(__dirname, '..', 'assets', 'index.html')).toString()

console.log('HTML code loaded')
console.log('Opening browser and printing target element...')

run(html, '#content').then((image) => {
    console.log('Got image from HTML\nSaving to Disk...')

    const fileName = Date.now() + '.png'

    fs.writeFileSync(path.resolve(__dirname, '..', 'output', fileName), image)
    console.log('Image saved in output folder!', fileName)
})