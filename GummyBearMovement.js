#pragma strict

static var speed : float;
var isLanded : boolean = false;
var currentRotation : float;

function Start(){

//speed = 2;

}



 
 

function Update () {

	if(isLanded){
		rigidbody2D.velocity.x = speed;
	}
	
	
	Debug.Log(speed);
//	
//	if (greenBoolean==true){
//	rigidbody2D.velocity.x = speed;
//	}
}

function OnCollisionEnter2D(coll : Collision2D){


//if (gummybear is blue){

//if(this part of the hexagon is blue for a ){

	if(coll.gameObject.tag == "Floor"){
	
		isLanded = true;
	}
//	}
//	
//	}
	else if(coll.gameObject.tag == "Wall"){
	
	speed = -speed;
	
	}
	
	else if(coll.gameObject.tag == "Player"){
	
	GameController.Score();
	Destroy(gameObject);
	
	}



}

 //limting the rotation/angle it rotates.
// function FixedUpdate(){
//  
// currentRotation = rigidbody.transform.eulerAngles.z;
// Debug.Log(currentRotation);
// 
//   if(currentRotation < -100)
//     rigidbody.transform.eulerAngles.z = -100;
//   else if(currentRotation > 100)
//     rigidbody.transform.eulerAngles.z = 100; 
// }



















//#pragma strict
//
//var speed : float;
//var isLanded : boolean = false;
//var currentRotation : float;
//
//function Start(){
//
//speeds = Random.Range(2, 10);
//
//}
//
//
//
// 
// 
//
//function Update () {
//
//	if(isLanded){
//		rigidbody2D.velocity.x = speed;
//	}
//}
//
//function OnCollisionEnter2D(coll : Collision2D){
//
//
////if (gummybear is blue){
//
////if(this part of the hexagon is blue for a ){
//
//	if(coll.gameObject.tag == "Floor"){
//	
//		isLanded = true;
//	}
////	}
////	
////	}
//	else if(coll.gameObject.tag == "Wall"){
//	
//	speed = -speed;
//	
//	}
//	
//	else if(coll.gameObject.tag == "Player"){
//	
//	GameController.Score();
//	Destroy(gameObject);
//	
//	}
//
//
//
//}
//
// //limting the rotation/angle it rotates.
//// function FixedUpdate(){
////  
//// currentRotation = rigidbody.transform.eulerAngles.z;
//// Debug.Log(currentRotation);
//// 
////   if(currentRotation < -100)
////     rigidbody.transform.eulerAngles.z = -100;
////   else if(currentRotation > 100)
////     rigidbody.transform.eulerAngles.z = 100; 
//// }