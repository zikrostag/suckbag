// Attach this script to a camera and it will paint black pixels in 3D 
	// on whatever the user clicks. Make sure the mesh you want to paint 
	// on has a mesh collider attached.
	function Update () {
	    // Only when we press the mouse
	    if (!Input.GetMouseButton (0))
	        return;
	    // Only if we hit something, do we continue
	    
	    var ray : Ray = camera.ScreenPointToRay (Input.mousePosition);
		
		
		Physics.Raycast(ray);
		
	    Debug.DrawRay (Vector3(ray.origin.x, ray.origin.y, -5), Vector3.zero, Color.green, 5, true);
	    //Debug.DrawLine(Vector3(ray.origin.x, ray.origin.y, -5), ray.direction, Color.red, 2, true);
	    Debug.Log("ray Shit: " + ray);
	    Debug.Log("ray origin: " + ray.origin);
	    
	    var hit : RaycastHit;
	    if (!Physics.Raycast (ray, hit)){
	        
	        Debug.DrawRay (ray.origin, ray.direction * 100, Color.yellow);
	        
	        
	        Debug.Log("no me hit");
	        
	        return;
	        }
	    // Just in case, also make sure the collider also has a renderer
	    // material and texture. Also we should ignore primitive colliders.
	    var renderer : Renderer = hit.collider.renderer;
	   	var meshCollider = hit.collider as MeshCollider;
	    
	    if (renderer == null || renderer.sharedMaterial == null ||
	        renderer.sharedMaterial.mainTexture == null)
	        
	        Debug.Log("Me no like what hit");
	        return;
	 
	    // Now draw a pixel where we hit the object
	    var tex : Texture2D = renderer.material.mainTexture;
	    var pixelUV = hit.textureCoord;
	    pixelUV.x *= tex.width;
	    pixelUV.y *= tex.height;
	    
	    tex.SetPixel(pixelUV.x, pixelUV.y, Color.black);
	 
	    tex.Apply();
	}