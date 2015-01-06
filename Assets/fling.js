#pragma strict

private var delta : Vector3 = Vector3.zero;
private var lastPos : Vector3 = Vector3.zero;
private var screenPoint:Vector3;
private var offset:Vector3;

private var oldMouse:Vector3;
private var speed : Vector2;


function OnMouseDown(){
   oldMouse = Input.mousePosition;
   screenPoint = Camera.main.WorldToScreenPoint(gameObject.transform.position);
   offset = gameObject.transform.position - Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z));
}

function OnMouseDrag(){
if ( Input.GetMouseButtonDown(0) ){
        lastPos = Input.mousePosition;
    }
    else if ( Input.GetMouseButton(0) ){
        delta = Input.mousePosition - lastPos;         

        speed.x = delta.x;
        speed.y = delta.y;
        lastPos = Input.mousePosition;
    }
   var curScreenPoint:Vector3 = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z);
   var curPosition:Vector3 = Camera.main.ScreenToWorldPoint(curScreenPoint) + offset;
   transform.position = curPosition;
}

function OnMouseUp(){	
//Debug.Log(speed);
rigidbody2D.AddForce(speed * -20 * -1, ForceMode2D.Force);
}


/*
private var screenPoint:Vector3;
private var offset:Vector3;

private var oldMouse:Vector3;
private var mouseSpeed:Vector3;
var speed : int = .5;

function Start(){
//oldMouse = Vector3.zero;
}

function Update(){
//mouseSpeed = oldMouse - Input.mousePosition;
//oldMouse = Input.mousePosition;
}

function OnMouseDown()
{
   oldMouse = Input.mousePosition;
   screenPoint = Camera.main.WorldToScreenPoint(gameObject.transform.position);
   offset = gameObject.transform.position - Camera.main.ScreenToWorldPoint(new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z));
}


function OnMouseDrag()
{
   var curScreenPoint:Vector3 = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenPoint.z);
   var curPosition:Vector3 = Camera.main.ScreenToWorldPoint(curScreenPoint) + offset;
   transform.position = curPosition;
}

function OnMouseUp(){
 mouseSpeed = oldMouse - Input.mousePosition;
//Debug.Log(speed);
rigidbody2D.AddForce(mouseSpeed * speed * -1 * 10, ForceMode2D.Force);
//rigidbody2D.AddForce(mouseSpeed*Time.deltaTime, ForceMode2D.Force);
}*/