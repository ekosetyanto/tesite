<?php
//dependency import
require 'properties.php';
require 'lib/Slim/Slim.php';
require 'security/Security.php';

//init Slim Framework
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->add(new \Security($app));
require 'security/Login.php';
require 'security/ManageUser.php';

//resources
	//db tesite_db
		require('./resource/tesite_db/custom/UserCustom.php');
		require('./resource/tesite_db/User.php');
		require('./resource/tesite_db/custom/insiteCustom.php');
		require('./resource/tesite_db/insite.php');
	

$app->run();


?>
