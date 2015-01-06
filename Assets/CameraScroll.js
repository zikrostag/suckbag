#pragma strict
 
 public var Boundary : int = 50; // distance from edge scrolling starts
 public var speed : int = 5;
 
 private var theScreenWidth : int;
 private var theScreenHeight : int;
 
 function Start() 
 {
     theScreenWidth = Screen.width;
     theScreenHeight = Screen.height;
 }
 
 function Update() 
 {
     if (Input.mousePosition.x > theScreenWidth - Boundary)
     {
        transform.position.x += speed * Time.deltaTime; // move on +X axis
     }
 
     if (Input.mousePosition.x < 0 + Boundary)
     {
        transform.position.x -= speed * Time.deltaTime; // move on -X axis
     }
 
     if (Input.mousePosition.y > theScreenHeight - Boundary)
     {
        transform.position.z += speed * Time.deltaTime; // move on +Z axis
     }
 
     if (Input.mousePosition.y < 0 + Boundary)
     {
        transform.position.z -= speed * Time.deltaTime; // move on -Z axis
     }
 
 }   
 
