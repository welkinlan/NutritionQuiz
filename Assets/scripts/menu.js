#pragma strict

var skin : GUISkin;

function Start () {
}

function Update () {

}

function OnGUI() {
	
	GUI.skin = skin;
	if (GUI.Button(HelpClass.ScrRectCenter2(0.5,0.6,0.3,0.075),"Start")) {
		Application.LoadLevel(1);
	}
	
}
