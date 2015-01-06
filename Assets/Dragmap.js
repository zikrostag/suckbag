#pragma strict

var dragSpeed = 1;
var mainView : GameObject;
private var dragOrigin : Vector3;
private var currentPosition : Vector3;
private var moveSpeed : int = 1;


function OnMouseDown()
{
	
	dragOrigin = Vector3(Input.mousePosition.x, Input.mousePosition.y, 10);

}

function OnMouseDrag()
{

	currentPosition = Vector3(Input.mousePosition.x, Input.mousePosition.y, 10);

	var move : Vector3 =  Vector3(currentPosition.x - dragOrigin.x, currentPosition.y - dragOrigin.y,0);
	move = (move * -1);

	mainView.transform.Translate(move * Time.deltaTime, Space.World);
	
	dragOrigin = currentPosition;
	
}
 
 