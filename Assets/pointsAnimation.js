#pragma strict

function Start () {
	transform.position.y += 1;
}

function Update () {
	transform.position.y += .05;
	destroy();
}
function destroy (){

	yield WaitForSeconds(.3);
	Destroy(this.gameObject);

}