// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "remove-whitespace-close-paren" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.remove-whitespace-close-paren', function () {
		// The code you place here will be executed every time your command is executed

		const editor = vscode.window.activeTextEditor        
		
		const cursorPosition = editor.selection.end;
		const startPosition = new vscode.Position(0,0);
		const rangeToCursor = new vscode.Range(startPosition, cursorPosition);
		const rangeFromCursor = new vscode.Range(cursorPosition, editor.document.positionAt(editor.document.getText().length -1));
		
		editor.edit((editBuilder) => {
			const originalStart = editor.document.getText(rangeToCursor);
			const start = originalStart.trimRight();			
			const rangeToCursorToEdit = new vscode.Range(editor.document.positionAt(start.length), cursorPosition);
			editBuilder.replace(rangeToCursorToEdit, "");
			const originalEnd = editor.document.getText(rangeFromCursor)
			const end = originalEnd.trimLeft();
			const rangeFromCursorToEdit = new vscode.Range(cursorPosition, editor.document.positionAt(originalStart.length + (originalEnd.length - end.length)));
			const nextChar = end.substring(0,1);
			
			editBuilder.replace(rangeFromCursorToEdit, "");

			if (nextChar == ")" || nextChar == "]" || nextChar == "}" || nextChar == "") {
				vscode.commands.executeCommand('cursorRight');
			}
		})     
	});
	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
