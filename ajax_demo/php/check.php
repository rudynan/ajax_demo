<?php	
$username = $_GET['userid'];
$password = $_GET['password'];

$a[]="Anna";
$a[]="Brittany";
$a[]="Cinderella";
$a[]="Diana";
$a[]="Eva";
$a[]="Fiona";
$a[]="Gunda";
$a[]="Hege";
$a[]="Inga";
$a[]="Johanna";
$a[]="Kitty";
$a[]="Linda";
$a[]="Nina";
$a[]="Ophelia";
$a[]="Petunia";
$a[]="Amanda";
$a[]="Raquel";
$a[]="Cindy";
$a[]="Doris";
$a[]="Eve";
$a[]="Evita";
$a[]="Sunniva";
$a[]="Tove";
$a[]="Unni";
$a[]="Violet";
$a[]="Liza";
$a[]="Elizabeth";
$a[]="Ellen";
$a[]="Wenche";
$a[]="Vicky";
if(strlen($username)<6){
echo 1;
}
if(strlen($username)>6){
$feedback = "";
for($i=0;$i<count($a);$i++){
if(strtolower($username)==strtolower(substr($a[i],0,strlen($username))))
if($feedback=$a[$i]){
$response=2;
}else{
$response=3;
}
}
}
if(strlen($password)<6){
echo 4;}



?>