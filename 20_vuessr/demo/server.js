const Vue = require('vue')
const fs = require('fs')
const path = require('path')
const server = require('express')
const { createBundleRenderer } = require('vue-server-renderer');

const app = express()

const templatePath = path.resolve(__dirname, './src/index.template.html')
const template = fs.readFileSync(templatePath, 'utf-8')

app.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`
    })
    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <title>Hello</title>
                    <meta charset="utf-8">
                </head>
                <body>${html}</body>
            </html>
        `)
    })
})
app.listen(3000)