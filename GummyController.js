#pragma strict

//var lastTime : float=0;
//
//var timeCounter: int = 10;

//so that these can pop up in gamecontroller heircheay
var blueBear : GameObject;
var greenBear : GameObject;
var yellowBear: GameObject;
var purpleBear: GameObject;
var orangeBear: GameObject;
var redBear: GameObject;
var YELLOWBear: GameObject;


static var blueBearBoolean : boolean = false;
static var greenBearBoolean: boolean= false;
static var yellowBearBoolean: boolean = false;
static var purpleBearBoolean: boolean = false;
static var orangeBearBoolean: boolean = false;
static var redBearBoolean: boolean = false;
static var YELLOWBearBoolean: boolean = false;




var skin : GUISkin;

//static var damageAudio: AudioSource; //staticfunctions need to use static variables.
var respawnAudio: AudioSource;

static var score : float=0;
static var deadBear : boolean = false;
static var gummytimer : float=5.0;



function Start () {
//ERIN>> where I am loading the instructions page, it's suppose to be mispelled...

//Application.LoadLevel("gummyinstrcutions");
//ERIN>> I want to eventaully load the game scene below
//yield WaitForSeconds (0.1);
//Application.LoadLevel

//if (Input.GetKeyDown('1')){
//Application.LoadLevel("Main");
////}

var audioSources = GetComponents(AudioSource);

//arranged in order it was created in inspector
//damageAudio=AudioSource[0];
//respawnAudio=AudioSource[1];




}//END OF START FUNCTION

function Update () {


//timer
gummytimer -=Time.deltaTime;
 if (gummytimer <=0){
 gummytimer=0;
 }

if(deadBear == true){
	//if dead bear hits the floor, deadbear==tru
	//once deadbear=tru, make dead bear = false
	deadBear = false;
	//make a new bear
	spawnBear();//
	
	}
	

	

}//end of update up here

//make new bears here
function spawnBear(){




var randomNumber= (Random.Range(1,7));
	
	//displaye
	Debug.Log(randomNumber);

	if(randomNumber ==1){

	Instantiate(purpleBear, Vector3(0, 10, 0), Quaternion.identity);
//	Debug.Log("PurpleTrue");
	 blueBearBoolean = false;
	greenBearBoolean = false;
	yellowBearBoolean = false;
	purpleBearBoolean = true;
	orangeBearBoolean = false;
	redBearBoolean = false;
	
	}
	
	if (randomNumber==2){
	
	Instantiate(redBear, Vector3(0, 10, 0), Quaternion.identity);
	 blueBearBoolean = false;
	greenBearBoolean = false;
	yellowBearBoolean = false;
	purpleBearBoolean = false;
	orangeBearBoolean = false;
	redBearBoolean = true;
	}
	
	if (randomNumber == 3){
	
	Instantiate(greenBear, Vector3(0, 10, 0), Quaternion.identity);
	 blueBearBoolean = false;
	greenBearBoolean = true;
	yellowBearBoolean = false;
	purpleBearBoolean = false;
	orangeBearBoolean = false;
	redBearBoolean = false;
	}
	
	if (randomNumber == 4){
	
	Instantiate(yellowBear, Vector3(0, 10, 0), Quaternion.identity);
	blueBearBoolean = false;
	greenBearBoolean = false;
	yellowBearBoolean = true;
	purpleBearBoolean = false;
	orangeBearBoolean = false;
	redBearBoolean = false;
	}
	
	if (randomNumber == 5){
	
	Instantiate(blueBear, Vector3(0, 10, 0), Quaternion.identity);
	 blueBearBoolean = true;
	greenBearBoolean = false;
	yellowBearBoolean = false;
	purpleBearBoolean = false;
	orangeBearBoolean = false;
	redBearBoolean = false;
	}
	
	if (randomNumber == 6){
	
	Instantiate(orangeBear, Vector3(0, 10, 0), Quaternion.identity);
	 blueBearBoolean = false;
	greenBearBoolean = false;
	yellowBearBoolean = false;
	purpleBearBoolean = false;
	orangeBearBoolean = true;
	redBearBoolean = false;
	}
	
	if (randomNumber == 7){
	Instantiate(YELLOWBear, Vector3(0, 10, 0), Quaternion.identity);
	 blueBearBoolean = false;
	greenBearBoolean = false;
	yellowBearBoolean = false;
	purpleBearBoolean = false;
	orangeBearBoolean = false;
	redBearBoolean = false;
	YELLOWBearBoolean = true;
	
	}
	
	
	

		

//	
//	if(!respawnAudio.isPlaying){




//	
//	respawnAudio.Play();
//}

}
//}//end of function down here
function OnGUI(){
//just count how many gummy bears are correct within in 20 seconds
GUI.skin = skin;
GUI.Label (new Rect (100, 170, 100, 100), "score: " + score);
GUI.Label (new Rect (100, 50, 200, 300), "Match the words inside the Gummy Bears to its corresponding color in the hexagon dial below. Match 15 correctly and you win!");
//for timer display
GUI.Box(new Rect(10,10,50,20),""+gummytimer.ToString("0"));
}


static function Score(){

	score +=1;
	
	if (score==15){
	Application.LoadLevel("gummywinscreen");
	}

}

static function Fail(){
score--;

if (gummytimer==0 && score<=0){

Application.LoadLevel("gameoverscreen");
//yield WaitForSeconds(10);
//ERIN! ADD THE MAIN MENU SCREEN FOR BOTH OF OUR GAMES HERE
//Application.LoadLevel("gummyinstrcutions");
}
}




