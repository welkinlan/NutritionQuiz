#pragma strict
import System.IO;
var skin : GUISkin;
var userId : String = "";
var idDone : boolean = false;


function OnGUI() {
	GUI.skin = skin;
	
	if (!idDone) { //input user id
		GUI.Label(HelpClass.ScrRectCenter2(0.4,0.4,0.2,0.15), "Please input user id");
		userId = GUI.TextField(HelpClass.ScrRectCenter2(0.5,0.55,0.2,0.12), userId);
		if (userId != "" && GUI.Button(HelpClass.ScrRectCenter2(0.5,0.7,0.2,0.075),"Ok")) {
			InitLog();
			Application.LoadLevel(1);
		}
	} 
}


function InitLog(){
	var t: System.DateTime = System.DateTime.Now;
    var date : String = String.Format("{0:D4}-{1:D2}-{2:D2}-{3:D2}-{4:D2}-{5:D2}", t.Year, t.Month, t.Day, t.Hour, t.Minute, t.Second);
	var fileName : String = userId + "_" + date + ".txt";
	SharedData.ioWriter = new StreamWriter(Application.persistentDataPath + "/" + fileName);
    SharedData.ioWriter.Flush();
	//var FRead = new File.OpenText(filePath + fileName + ".txt");
}
