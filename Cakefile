fs = require "fs"
path = require "path"
child_process = require "child_process"

spawn = (procName, optArray, silent=false) ->
  proc = child_process.spawn procName, optArray
  unless silent
    proc.stdout.on 'data', (data) -> process.stdout.write data
    proc.stderr.on 'data', (data) -> process.stderr.write data
  proc

# visitor will get passed the file path as a parameter
visitDirectory = (directory, visitor) ->
  fs.readdirSync(directory).forEach (filename) ->
    filepath = path.join directory, filename
    if (fs.statSync filepath).isDirectory()
      return visitDirectory filepath, visitor

    return unless (fs.statSync filepath).isFile()
    visitor(filepath)

task "build", "compile all coffeescript files to javascript", ->
  coffee = spawn "coffee", ["-c", __dirname]
  coffee.on 'exit', (returnCode) -> process.exit returnCode

task "clean", "removes any js files which were compiled from coffeescript", ->
  visitDirectory __dirname, (filepath) ->
    return unless (path.extname filepath) == ".js"

    directory = path.dirname filepath

    # Check if there exists a corresponding .coffee file
    try
      coffeeFile = fs.statSync path.join directory, "#{path.basename filepath, ".js"}.coffee"
    catch _
      return

    fs.unlinkSync filepath if coffeeFile.isFile()

task "autobuild", "continually rebuild coffeescript files using coffee --watch", ->
  coffee = spawn "coffee", ["-cw", __dirname]

task "package", "create release zip", ->
  invoke "build"
  fs.mkdir 'releases' if !fs.existsSync 'releases'


  origManifestText = fs.readFileSync "manifest.json"
  manifest = JSON.parse origManifestText

  get_revision = child_process.exec "git log --oneline | wc -l", (error, stdout, stderr) ->
    revnum = stdout.trim()
    if (error != null)
      console.log('exec error: ' + error)
    else
      write_manifest(revnum)
      zip_release = child_process.exec "zip -r 'releases/Syntaxtic_v#{manifest.version}.zip' . -x \\*.coffee \\*.git\\* \\*releases\\* Cakefile README.md node_modules\\* package.json yarn.lock", (error, stdout, stderr) ->
        if (error != null)
          console.log('exec error: ' + error)
        fs.writeFileSync "manifest.json", origManifestText

  write_manifest = (revnum) ->
    manifest.version = '4.0.' + revnum
    fs.writeFileSync "manifest.json", JSON.stringify manifest
