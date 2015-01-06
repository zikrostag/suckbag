var dirt : GameObject;
var gold : GameObject;
var goldCount : int = 20;
var count : int;

function Start () {
	makeDirty(count,dirt,Vector3(16,9,3));
	makeDirty(goldCount, gold, Vector3(16,9,3));
}


 
 function makeDirty(NumObjects, wichobject, area) {
	 for(var i = 0; i < NumObjects ; i++){
	 	position = Vector3(Random.value * area.x - 8 , Random.value * area.y - 4.5, 3);
	 	Instantiate(wichobject, position, Quaternion.Euler(0.0, 0.0, Random.Range(0.0, 360.0)));
	 }
}