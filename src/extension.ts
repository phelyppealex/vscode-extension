import * as vscode from 'vscode'

let statusBarItem: vscode.StatusBarItem

export function activate(context: vscode.ExtensionContext) {
	statusBarItem = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Left,
		10000
	)
	
	context.subscriptions.push(statusBarItem)
	
	updateStatusBar(context)
}

function updateStatusBar(context: vscode.ExtensionContext){
	statusBarItem.text = 'Phelyppe & Ítalo'
	statusBarItem.tooltip = 'Hello World'
	statusBarItem.show()
}

export function deactivate() {}

/*
let disposable = vscode.commands.registerCommand('barradestatus.helloWorld', () => {
	vscode.window.showInformationMessage('Hello World from BarraDeStatus!');
});
*/