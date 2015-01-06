#pragma strict

private var multiple : int = 1;
private var myParticles : ParticleSystem;
public var points : int = 40;
public var pointsObject : GameObject;
public var Health : int = 40;


function Start () {
	myParticles = GetComponent(ParticleSystem);
}

function Update () {

	if (transform.localScale.x > .01)
	{
		//Reduce the bar size
		transform.localScale += Vector3(-.01,0,0);
	}else{
		//reduce the multiplier size is small
		if(multiple != 1){
			//don't let it hit 0
			changeMultiple(-1);
		}
		
	}
	
	if (transform.localScale.x > 10){
		//size is big, up multiplier
		changeMultiple(1);
	}
	
	
}

function changeMultiple(x : int){
	
	multiple += x;
	
	//gameObject.particleEmitter.particleSystem.Play();
	myParticles.Play();
	
	
	
	if(multiple == 1){
		renderer.material.color = Color.green;
		resetBar(x);
	}
	//level 2
	if(multiple == 2){
		renderer.material.color = Color.yellow;
		resetBar(x);
	}
	if(multiple == 3){
		renderer.material.color = Color.magenta;
		resetBar(x);
	}
	if(multiple == 4){
		renderer.material.color = Color.red;
		resetBar(x);
	}
}

private function resetBar(x : int){
	if (x > 0){
		transform.localScale = Vector3(1,.5,0);
	}else{
		transform.localScale = Vector3(10,.5,0);
	}
}

public function getMultiple(){
	return multiple;
}

public function addPoints(points : float){
	
	var transformPoints : float = points/100;
	
	transform.localScale += Vector3(transformPoints,0,0);
}