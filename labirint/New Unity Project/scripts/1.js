/*var projecile : Rigidbody;
var speed = 20;

function Update(){
if (Input.GetButtonDown("Firel"));
{
var instantiatedProjectile : Rigidbody = Instantiate( projectile, transform.position, transform.rotation);
instantiatedProjectile.velocity = transform.TransformDirection(Vector3( 0, 0, speed));
Physics.IgnoreCollision( instantiatedProjectile.collider, transform.root.collider);
}
}
*/
var projectile : Rigidbody;
var speed = 10.0;

function Fireprojecile(){
    var projectileClone : Rigidbody = Instantiate(projectile, transform.position, transform.rotation);
	projectileClone.velocity = transform.TransformDirection(Vector3( 0, 0, speed));
	Physics.IgnoreCollision( projectileClone.collider, transform.root.collider);
}

// Calls the fire method when holding down ctrl or mouse
function Update () {
    if (Input.GetButtonDown("Fire1")) {
        Fireprojecile();
    }
}