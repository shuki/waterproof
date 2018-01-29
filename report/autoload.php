<?php
define('JSET_LOCAL_PATH_TO_ROOT', '../');
define('JSET_SERVER_CLASS_PATH', 'jset/server/class/');
define('JSET_POOL_CLASS_PATH', '../jset_pool/class/');

include_once(JSET_LOCAL_PATH_TO_ROOT . JSET_SERVER_CLASS_PATH . "config.class.php");
ini_set("log_errors" , "1");
ini_set("error_log" , config::errorLogFile);
ini_set("display_errors" , "1"); // set to 0 in production
if(defined('E_DEPRECATED'))
	ini_set('error_reporting', E_ALL & ~E_NOTICE & ~E_STRICT & ~E_WARNING & ~E_DEPRECATED);
else
	ini_set('error_reporting', E_ALL & ~E_NOTICE & ~E_STRICT & ~E_WARNING);

function __autoload($class_name) {
	if (is_file(JSET_LOCAL_PATH_TO_ROOT . JSET_SERVER_CLASS_PATH . $class_name . '.class.php'))
		require_once JSET_LOCAL_PATH_TO_ROOT . JSET_SERVER_CLASS_PATH . $class_name . '.class.php';
	else if (is_file(JSET_LOCAL_PATH_TO_ROOT . config::jxset . JSET_SERVER_CLASS_PATH . $class_name . '.class.php'))
		require_once JSET_LOCAL_PATH_TO_ROOT . config::jxset . JSET_SERVER_CLASS_PATH . $class_name . '.class.php';
	else if (is_file(JSET_LOCAL_PATH_TO_ROOT . JSET_POOL_CLASS_PATH . $class_name . '.class.php'))
		require_once JSET_LOCAL_PATH_TO_ROOT . JSET_POOL_CLASS_PATH . $class_name . '.class.php';
}