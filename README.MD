* download vsc zip, nodejs zip
* add nodejs root path to env
* create folder, drag to vsc
* press ctrl + ` to open cmd
* input
    * generate **package.json**
    >
        npm init
    * save package name to **package.json** dev dependency
    >
        npm install typescript -save-dev
    * generate **tsconfig.json**
    >
        ./node_modules/.bin/tsc --init
* press ctrl + , to generate and open **.vscode/setting.json**
* choose "USER SETTINGS"
    * add below text for **macros** extension:
    >
        "macros": {
            "commentAndFormat": [
                "editor.action.commentLine",
                "editor.action.formatDocument"
            ]
        }
* install vsc extension: **macros**
* press ctrl + k, ctrl + s to open Keyboard Shortcuts
    * tpye "workbench.action.openGlobalKeybindingsFile" at Search Keybindings
    * add shortcut ctrl + k, ctrl + f
* press ctrl + k, ctrl + f to open **keybindings.json**
    * add below text for **macros** extension:
    >
        {
            "key": "ctrl+/",
            "command": "macros.commentAndFormat",
            "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly"
        }