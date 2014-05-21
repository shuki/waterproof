<?php
//if(!isset($_GET['z']) || $_GET['z'] != '28dde9f5-b308-11e3-ab96-60eb695d014e')
//	die();

/*
 * jxset
 * Copyright (c) 2010 - 2013, Shuki Shukrun (shukrun.shuki at gmail.com).
 * Dual licensed under the MIT and GPL licenses
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
 include_once("autoload.php");
 jset_page::create(config::jxset, 'he', '', true);
?>
<!--script src="../../jxset/jset/i18n/grid.locale-he.js" type="text/javascript"></script-->

<head>
<title>מערכת קריאת מוני מים</title>
<script src="js/index.js" type="text/javascript"></script>
<script src="js/unit.js" type="text/javascript"></script>
</head>

<body dir="rtl">
	<table id="unit"></table>
</body>
</html>