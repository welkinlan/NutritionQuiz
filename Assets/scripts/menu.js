#pragma strict

var skin : GUISkin;

function OnGUI() {
	GUI.skin = skin;
	if (GUI.Button(HelpClass.ScrRectCenter2(0.5,0.6,0.2,0.1),"Start")) {
		Application.LoadLevel(1);
	}
	
}
