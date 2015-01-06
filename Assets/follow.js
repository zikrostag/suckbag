#pragma strict

// The target marker.
private var target : Vector3;

// Speed in units per sec.
public var speed : float = 20;

//for other scrits to know if we're being dragged or not
private var dragging : int = 0;

function OnMouseDown () {
	
	var originalColour = renderer.material.color;
 	
 	renderer.material.color = new Color(originalColour.g, originalColour.g, originalColour.b, .2);
 	
 	
 	//start dragging
 	dragging = 1;
}

function OnMouseDrag(){
	
	target = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	
	target.z = 0;
	
	// The step size is equal to speed times frame time.
	var step = speed * Time.deltaTime;
	
	// Move our position a step closer to the target.
	transform.position = Vector3.MoveTowards(transform.position, target, speed * Time.deltaTime);     
	
	//Debug.Log(target);

}
	
function OnMouseUp () {
	
	renderer.material.color = new Color(1, 1, 1, 1);
	
	//end dragging
	dragging = 0;

}

function isDragging(){
	if(dragging==1){
		return 1;
	}else{
		return 0;
	}
}