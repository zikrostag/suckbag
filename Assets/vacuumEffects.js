#pragma strict
private var localCount : int = 0;
private var warmCount : int = 0;
var blast : UnityEngine.ParticleSystem;
var warmUp : UnityEngine.ParticleSystem;
var pointBreak : int = 100;
var charge1Break : int = 10;
var charge2Break : int = 80;
var suction : int = 1;
var clogRate : int = 4;

var charge1 : AudioClip;
//var charge2 : AudioClip;
var blastAudio : AudioClip;


function Start () {

}

function Update () {

	var levelPoints : int = PlayerPrefs.GetInt("levelPoints",0);
	var kcount : int = levelPoints/pointBreak;
	var c1Count : int = levelPoints/charge1Break;
	var c2Count : int = levelPoints/charge2Break;

	//Debug.Log(c2Count);

	if (c2Count > warmCount){
		warmUp.Play();
		audio.clip = charge1; 
		audio.loop = true;	
		audio.Play();
		warmCount = c2Count;
		}	

		if (kcount > localCount){
		blast.Play();
		warmUp.Stop();
		audio.clip = charge1; audio.Stop();
		localCount = kcount;
		audio.PlayOneShot(blastAudio);

	}	

	//Debug.Log(kcount);

}