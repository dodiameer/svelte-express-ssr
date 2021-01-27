//@ts-nocheck

require("svelte/register")
const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")

const routeMap = {
  "/": require("./App.svelte").default
}

const staticPath = path.resolve(__dirname, "..", "public")
app.use("/static", express.static(staticPath))

app.get("/", (req, res) => {
  const { html, css, head } = routeMap["/"].render({
    name: req.query.name ?? "world"
  })

  const htmlFile = fs.readFileSync(path.join(staticPath, "index.html")).toString()

  const renderedFile = htmlFile
    .replace("{{ head }}", head)
    .replace("{{ css }}", css.code)
    .replace("{{ html }}", html)

  return res.send(renderedFile)
})

app.listen(4000, () => console.log("Listening on http://127.0.0.1:4000"))