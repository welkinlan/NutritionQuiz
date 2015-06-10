#pragma strict
var skin : GUISkin;
var selected : boolean = false;

function Start () {
}

function Update () {

}

function OnGUI(){
	GUI.skin = skin;
	if (selected) {
		if (GUI.Button(HelpClass.ScrRectCenter2(0.5,0.8,0.3,0.075),"Ok")) {
			Application.LoadLevel(0);
		}
	}
}