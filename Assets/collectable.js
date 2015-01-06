#pragma strict

public var points : int = 40;
public var pointsObject : GameObject;
public var health : int = 20;

//Sucked up sound
var suckedAudio : AudioClip[];
var audioRange : float[] = [.3,.5];

// The target marker.
private var target : Vector3;
private var mousePosition : Vector3;
private var textMesh : TextMesh;

var pointsManager : GameObject;

private var Damage : int;
private var spawnPoint : Vector3;


// Speed in units per sec.
private var speed : float = 4;

private var sucked : byte = 0;


function Start () { 
	 Damage = GameObject.Find("Vacuum").GetComponent(vacuumEffects).suction;
	 

}

function OnTriggerStay2D(other: Collider2D) {
	
	if (other.tag=="Vacuum"){
		
		//Debug.Log("follow" + other.GetComponent(follow).isDragging());
		
		if(other.GetComponent(vacuum).isDragging()){
			
			
			if (health > Damage) {
				health -= Damage;
			}

			if (health <= Damage) {
				sucked = 1;

				//play one of the clips we have
				PlayRandom();
				
				spawnPoint = other.transform.position;
				
				
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
			//if were still big make us smaller still
			transform.localScale -= Vector3(.1,.1,0);  
		}else{
			//if our object is extremely small, destroy it
			destroyInASec();
			this.collider2D.enabled = false;
			this.renderer.enabled = false;
			
			//********************* Dolman's shit code
			var pointsVisual : GameObject = Instantiate(pointsObject, spawnPoint, Quaternion.identity);
				
			if (pointsVisual.GetComponent(TextMesh) != null) {
				textMesh = pointsVisual.GetComponent(TextMesh);
				textMesh.text = points.ToString(); 
			}
			//**********************
			
			
			
		}
		//Debug.Log();
	}
}

function PlayRandom(){ // call this function to play a random sound
    //if (audio.isPlaying) return; // don't play a new sound while the last hasn't finished
     
    var soundClip = suckedAudio[Random.Range(0,suckedAudio.length)];
    audio.pitch = Random.Range(1.5, .7);
    audio.PlayOneShot(soundClip,Random.Range(audioRange[0],audioRange[1]));

 }
 
 function destroyInASec(){
 	sucked=0;
 	pointsManager.GetComponent(PointsManager).addPoints(points);
 	//POC for points persistance, needs to move to points controller.
			
	var totalScore : int = PlayerPrefs.GetInt("totalScore", 0);
	totalScore += points;
			
	//Give the user points
	PlayerPrefs.SetInt("totalScore", totalScore);
			
 	yield WaitForSeconds(1.2);
 	Destroy(this.gameObject);

 }