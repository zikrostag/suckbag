#pragma strict
// The target marker.
var target : Vector3;

//Things for points
private var mousePosition : Vector3;
var points : int = 40;
var pointsObject : GameObject;
private var textMesh : TextMesh;


//Sucked up sound
var suckedAudio : AudioClip;

// Speed in units per sec.
private var speed : float = 4;

private var sucked : byte = 0;


function Start () { 
	
}

function OnTriggerEnter2D(other: Collider2D) {
	
	if (other.tag=="Vacuum"){
		
		//Debug.Log("follow" + other.GetComponent(follow).isDragging());
		
		if(other.GetComponent(follow).isDragging()){
		
			sucked = 1;
			
			audio.PlayOneShot(suckedAudio);
			
			var spawnPoint : Vector3 = other.transform.position;
			
			var pointsVisual : GameObject = Instantiate(pointsObject, spawnPoint, Quaternion.identity);
			
			if (pointsVisual.GetComponent(TextMesh) != null) {
				textMesh = pointsVisual.GetComponent(TextMesh);
				textMesh.text = points.ToString(); 
			}
		}
	}
}

function Update () {
	if(sucked==1){
		target = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		
		target.z = 0;
		
		// The step size is equal to speed times frame time.
		var step = speed * Time.deltaTime;
		
		// Move our position a step closer to the target.
		transform.position = Vector3.MoveTowards(transform.position, target, speed * Time.deltaTime);
		
		//animate the gui point display
		mousePosition.y += 1;
		
		if(transform.localScale.x > 0.09){
			//if we're still big make us smaller still
			transform.localScale -= Vector3(.1,.1,0);  
		}else{
			//if our object is extremely small, destroy it
			Destroy(this.gameObject);
		}
		//Debug.Log();
	}
}