#pragma strict

var target : Transform;
var smoothTime = 0.6;

private var thisTransform : Transform;
private var velocity : Vector2;

private var theScreenWidth : int;
private var theScreenHeight : int;
private var moveSpeed : int;

public var Boundary : int = 500; // distance from edge scrolling starts

private var mooveSpeedDivision : int = 20;


function Start()
{
	thisTransform = transform;
	theScreenWidth = Screen.width;
    theScreenHeight = Screen.height;
}

function Update() 
{
	//thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, target.position.x, velocity.x, smoothTime);
	//thisTransform.position.y = Mathf.SmoothDamp( thisTransform.position.y, target.position.y, velocity.y, smoothTime);

	if (Input.mousePosition.x > theScreenWidth - Boundary && Input.mousePosition.x < theScreenWidth)
     {
     	moveSpeed = (Input.mousePosition.x - (theScreenWidth - Boundary));
        transform.position.x += (moveSpeed/mooveSpeedDivision) * Time.deltaTime; // move on +X axis
     }
 
     if (Input.mousePosition.x < 0 + Boundary && Input.mousePosition.x > 0)
     {
     	moveSpeed = (Boundary - Input.mousePosition.x);
        transform.position.x -= (moveSpeed/mooveSpeedDivision) * Time.deltaTime; // move on -X axis
     }
 
     if (Input.mousePosition.y > theScreenHeight - Boundary && Input.mousePosition.y < theScreenHeight)
     {
        moveSpeed = (Input.mousePosition.y - (theScreenHeight - Boundary));
        transform.position.y += (moveSpeed/mooveSpeedDivision) * Time.deltaTime; // move on +y axis
     }
 
     if (Input.mousePosition.y < 0 + Boundary && Input.mousePosition.y > 0)
     {
     	moveSpeed = (Boundary - Input.mousePosition.y);
     	transform.position.y -= (moveSpeed/mooveSpeedDivision) * Time.deltaTime; // move on -y axis
     }
}
/*
function OnGUI() 
{
	GUI.Box( Rect( (Screen.width / 2) - 140, 5, 280, 25 ), "Mouse Position = " + Input.mousePosition );
	GUI.Box( Rect( (Screen.width / 2) - 70, Screen.height - 30, 140, 25 ), "Mouse X = " + Input.mousePosition.x );
	GUI.Box( Rect( 5, (Screen.height / 2) - 12, 140, 25 ), "Mouse Y = " + Input.mousePosition.y );
}
*/