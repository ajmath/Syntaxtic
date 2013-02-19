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

  origManifestText = fs.readFileSync "manifest.json"
  manifest = JSON.parse origManifestText

  fs.mkdir 'releases'
  git_log = spawn 'git', ['log', '--oneline'], true
  wc = spawn 'wc', ['-l'], true

  git_log.stdout.on 'data', (data) ->
    wc.stdin.write(data)
    wc.stdin.end()

  git_log.on 'exit', (code) ->
    console.log 'git log exited'
    if code != 0
      console.log 'git log exited with code ' + code
    wc.stdin.end()

  wc.stdout.on 'revnum', (revnum) ->
    console.log 'Revnum:', revnum
    write_manifest(revnum)

  wc.on 'exit', (code) ->
    if code != 0
      console.log 'wc exited with code ' + code

  write_manifest = (revnum) ->
    manifest.version = '3.0.' + revnum
    fs.writeFileSync "releases/manifest.json", JSON.stringify manifest
    copy_js_files()

  copy_js_files = () ->
    visitDirectory __dirname, (filepath) ->
      return unless (path.extname filepath) == ".js"

      directory = path.dirname filepath

  # wc.stderr.on 'data', (data) ->
  #   console.log 'wc stderr:', data

  # git_log.stderr.on 'data', (data) ->
  #   console.log 'git log stderr:', data
# zip -b . releases/Syntaxtic_v`./.getVersion.sh`.zip -r `ls | grep -v releases`
# crxmake.on "exit", -> fs.writeFileSync "manifest.json", origManifestText
