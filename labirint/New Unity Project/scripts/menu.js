@script RequireComponent(AudioSource);
@script ExecuteInEditMode;
//змінні
var TouchIn:AudioClip;
var TouchOut:AudioClip;
var LevelName:String;
var is_NewGame:boolean=false;
var is_Exit:boolean=false;
var camera1:GameObject;
var camera2:GameObject;

function Start()
{
	camera2.active=false;	
}
function OnMouseDown()
{
	audio.PlayOneShot(TouchIn);
}
function OnMouseUp()
{
	audio.PlayOneShot(TouchOut);
	if (is_NewGame) {Application.LoadLevel(1);}
	if (is_Exit) {Application.Quit();}
	
}
