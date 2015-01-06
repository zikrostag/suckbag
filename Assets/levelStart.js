var dirt1 : GameObject;
var dirt2 : GameObject;
var dirt3 : GameObject;

var dirt1Count : int = 100;
var dirt2Count : int = 20;
var dirt3Count : int = 5;

private var spreadArea : Vector3 = Vector3(16,9,3);

function Start () {
	makeDirty(dirt1Count, dirt1, spreadArea);
	makeDirty(dirt2Count, dirt2, spreadArea);
	makeDirty(dirt3Count, dirt3, spreadArea);
}

function resume() {
	//We have a saved level, load that bitch
	LevelSerializer.LoadNow(LevelSerializer.SavedGames[LevelSerializer.PlayerName][0].Data);
}

function makeDirty(NumObjects, wichobject, area) {
	 for(var i = 0; i < NumObjects ; i++){
	 	position = Vector3(Random.value * area.x - 10 , Random.value * area.y - 5, 3);
	 	Instantiate(wichobject, position, Quaternion.Euler(0.0, 0.0, Random.Range(0.0, 360.0)));
	 }
}