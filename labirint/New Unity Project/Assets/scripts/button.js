@script RequireComponent(AudioSource);
@script ExecuteInEditMode;
//змінні
var TouchIn:AudioClip;
var TouchOut:AudioClip;
var LevelName:String;
var is_push:boolean=false;
var is_Exit:boolean=false;
var camera1:GameObject;


function OnMouseDown()
{
	audio.PlayOneShot(TouchIn);
}
function OnMouseUp()
{
	audio.PlayOneShot(TouchOut);
	renderer.material.color= Color.green;
	if (is_push) { Application.LoadLevel(1);}
	if (is_Exit) {Application.Quit();}
	
	
}