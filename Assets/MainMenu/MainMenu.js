#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {
    // Make a background box
    GUI.Box (Rect (10,10,100,90), "Menu");

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed

	if (GUI.Button (Rect (20,40,80,20), "Main")) {
	
			var levelName : String = Application.loadedLevelName;
			
			LevelSerializer.SaveGame(levelName);
			
			Application.LoadLevel ("MainMenu");
	   	}
	if (GUI.Button (Rect (20,70,80,20), "Gold")) {
	        Application.LoadLevel ("Gold");
	    }
	if (GUI.Button (Rect (20,90,80,20), "Room1")) {
	        Application.LoadLevel ("Room1");
	    }
	    
	if (GUI.Button (Rect (20,100,80,20), "Resume")) {
	        Camera.mainCamera.GetComponent(levelStart).resume();
	    }
	
	    
	    
	//display the total score
	GUI.Label (Rect (20,120,80,20), PlayerPrefs.GetInt("totalScore",0).ToString());
	
    // Make the second button.
    //if (GUI.Button (Rect (20,70,80,20), "Level 2")) {
    //    Application.LoadLevel (2);
    //}
   
}