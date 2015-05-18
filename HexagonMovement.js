//use swtich statement sarah(email)
//encapsulate in in one fucntion (what are the different reqs that have to be met) if correct- gives a point, 
//if else incorrect, set everything false,
// make arguments for each color



#pragma strict

var moveLeft : KeyCode;
var moveRight : KeyCode;
var jump : KeyCode;
var speed : float = 10;

var zRotation : float = 5.0;

var purpleBoolean: boolean = false;
var redBoolean: boolean = false;
var greenBoolean: boolean = false;
var yellowBoolean: boolean = false;
var blueBoolean: boolean = false;
var orangeBoolean: boolean = false;
var YELLOWBoolean: boolean = false;


var laserAudio: AudioSource;
laserAudio = GetComponent(AudioSource);





function Update ()
{





if (Input.GetKeyDown ('1')){
//myVector = new Vector3(new_x,new_y,new_z);
//new_z=-2.9575;
//transform.LookAt(transform.position + transform.right);
zRotation += Input.GetAxis("Vertical");
		transform.eulerAngles = Vector3(10, zRotation, 0);
		transform.Rotate(0, 0, -60);
		
purpleBoolean = true;
redBoolean= false;
greenBoolean= false;
yellowBoolean = true;
blueBoolean = false;
orangeBoolean = false;

//Debug.Log("purple");

if ((yellowBoolean==true || purpleBoolean==true) && (GummyController.purpleBearBoolean==true || GummyController.yellowBearBoolean==true)){
Debug.Log("CORRECT1");
purpleBoolean=false;
GummyController.Score();
}else{
Debug.Log("INCORRECT1");
GummyController.Fail();
}


}// end of input 1


//if music is ot playing, play the fucking music
if (!laserAudio.isPlaying){
laserAudio.Play(); 
}



if (Input.GetKeyDown ('2')){
zRotation += Input.GetAxis("Vertical");
		transform.eulerAngles = Vector3(10, zRotation, 0);
purpleBoolean = false;
redBoolean= false;
greenBoolean= false;
yellowBoolean = false;
blueBoolean = false;
orangeBoolean = false;
YELLOWBoolean= true;
Debug.Log("YELLOWBear");
if (YELLOWBoolean == true && GummyController.YELLOWBearBoolean == true){
GummyController.Score();
	Debug.Log("CORRECT2");
	YELLOWBoolean = false;
	
}else{
Debug.Log("INCORRECT2");
GummyController.Fail();
}


}
if (Input.GetKeyDown ('3')){
zRotation += Input.GetAxis("Vertical");
		transform.eulerAngles = Vector3(10, zRotation, 0);
		transform.Rotate(0, 0, 60);
		
purpleBoolean = false;
redBoolean= false;
greenBoolean= false;
yellowBoolean = false;
blueBoolean = true;
orangeBoolean = true;

//Debug.Log("green");
if ((blueBoolean==true || orangeBoolean==true) && (GummyController.blueBearBoolean==true || GummyController.orangeBearBoolean==true)){
Debug.Log("CORRECT3");
GummyController.Score();
blueBoolean=false;
orangeBoolean=false;
}else{
Debug.Log("INCORRECT3");
GummyController.Fail();
}


 //transform.rotation = Quaternion.FromToRotation (Vector3.up, transform.forward);
}
if (Input.GetKeyDown ('4')){
zRotation += Input.GetAxis("Vertical");
		transform.eulerAngles = Vector3(10, zRotation, 0);
transform.Rotate(0, 0, 120);
purpleBoolean = true;
redBoolean= false;
greenBoolean= false;
yellowBoolean = false;
blueBoolean = false;
orangeBoolean = false;

//Debug.Log("yellow");
if (purpleBoolean==true && GummyController.purpleBearBoolean==true){
Debug.Log("CORRECT4");
GummyController.Score();
purpleBoolean=false;
}else{
Debug.Log("INCORRECT4");
GummyController.Fail();
}

}
if (Input.GetKeyDown ('5')){
zRotation += Input.GetAxis("Vertical");
		transform.eulerAngles = Vector3(10, zRotation, 0);
transform.Rotate(0, 0, 180);

purpleBoolean = false;
redBoolean= true;
greenBoolean= true;
yellowBoolean = false;
blueBoolean = false;
orangeBoolean = false;
//Debug.Log("blue");
if ((greenBoolean==true || redBoolean==true) && (GummyController.redBearBoolean==true || GummyController.greenBearBoolean==true)){
Debug.Log("CORRECT5");
GummyController.Score();
greenBoolean=false;
redBoolean=false;
}else{
Debug.Log("INCORRECT5");
GummyController.Fail();
}
}
if (Input.GetKeyDown ('6')){
zRotation += Input.GetAxis("Vertical");
		transform.eulerAngles = Vector3(10, zRotation, 0);
transform.Rotate(0, 0, 240);
purpleBoolean = false;
redBoolean= false;
greenBoolean= false;
yellowBoolean = false;
blueBoolean = false;
orangeBoolean = false;

Debug.Log("orange");
if(orangeBoolean==true && GummyController.orangeBearBoolean==true){
Debug.Log("CORRECT6");
GummyController.Score();
orangeBoolean=false;
}else{
Debug.Log("INCORRECT6");GummyController.Fail();
}
}



}//END OF UPDATE


