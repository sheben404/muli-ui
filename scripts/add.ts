import { spawn } from 'child_process'
import path from 'path'
import * as glob from 'glob'
import fs from 'fs-extra'
import chalk from 'chalk'
import handlebars from 'handlebars'
import { fileURLToPath } from 'url'

// abc-xyz => AbcXyz
const varCase = (str: string) => str.replace(/-[a-z]/g, (m) => m[1].toUpperCase()).replace(/^.{1}/, (m) => m.toUpperCase())
const lowCase = (str: string) => str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`).replace(/^-/, '')

;(async () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  const component = process.argv[2]
  const dirName = lowCase(component)
  const componentName = varCase(component)
  const componentPath = `src/components/${dirName}`

  spawn('mkdir', ['-p', path.join(process.cwd(), componentPath)])

  const tplFiles = glob.sync(path.join(__dirname, 'template/*.hbs'))

  tplFiles.forEach(async (filePath) => {
    const content = await fs.readFile(filePath, 'utf-8')
    const template = handlebars.compile(content)
    const result = template({
      dirName,
      componentName,
    })
    const newPath = filePath.replace('scripts/template', componentPath).replace('[component]', dirName).replace('.hbs', '')
    await fs.writeFile(newPath, result)

    console.log(chalk.green(`write ${newPath} success`))
  })
})()
