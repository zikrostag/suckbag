#pragma strict
// The target marker.
public var target : GameObject;



// Speed in units per sec.
private var speed : float = 2;
var run : boolean = false;
var randomRun : float;


function Start () { 
	var run : boolean = false;
}

function OnTriggerEnter2D(other: Collider2D) {
	
	if (other.tag=="SuckEffect"){
		
		if(other.GetComponent(isDragging).isDragging()){
			run = true;
			randomRun = Random.Range(-2,2);
		}
	}
}


function Update () {
	if(run==true){
		// The step size is equal to speed times frame time.
		
		var distance = Vector3.Distance(transform.position, target.transform.position);
		
		if(distance > 4 + randomRun) run = false; 
		
		// Move our position a step closer to the target.
		transform.position = Vector2.MoveTowards(transform.position, Vector2(target.transform.position.x + Random.Range(-1,1),target.transform.position.y + randomRun + Random.Range(-1,1)), ((speed - (distance/2) + randomRun) * Time.deltaTime) * -1);
		
	}
		//Debug.Log();
}
