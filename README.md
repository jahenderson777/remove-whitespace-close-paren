# remove-whitespace-close-paren README

A small VS code extension to remove whitespace around the current cursor position and close any open parenthesis or bracket.
Written primarily to aid writing Clojure/ClojureScript code in VS Code with the Calva extension.

## rationale

 In other Clojure IDEs I notice that when you hit ']' the cursor will move to the closing paren/bracket whether it be a ']', '}', or ')'. However in Calva I notice that you have to match the type of bracket (e.g. to close a round parenthesis '(' you have to hit ')').

 ## installation

Windows installation:
Place this folder inside %USERPROFILE%\.vscode\extensions

OSX installation:
Place this folder inside ~\.vscode\extensions

Map ']' in keyboard settings to remove-whitespace-close-paren

