<?php 
/*
 * jxset
 * Copyright (c) 2010 - 2013, Shuki Shukrun (shukrun.shuki at gmail.com).
 * Dual licensed under the MIT and GPL licenses
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
 include_once("autoload.php");
 $dir_pre = config::jxset;
 $jset_payment = jset_payment::process();
 jset_session::create();
 jset_page::create(config::jxset, 'he', '', true);
 $user_group = $_SESSION['jset_user_group'];
?>
<link rel="stylesheet" type="text/css" media="screen" href="css/index.css" />
<script src="<?php echo $dir_pre ?>jset/i18n/jset.locale-he.js" type="text/javascript"></script>
<script src="<?php echo $dir_pre ?>jset/i18n/grid.locale-he.js" type="text/javascript"></script>
<title>מערכת קריאת מוני מים</title>
<script type="text/javascript">
	<?php echo jset_permission::get_user_attributes_js(); ?>
</script>
<script src="js/defaults.js" type="text/javascript"></script>
<script src="js/unit.js" type="text/javascript"></script>
<script src="js/accumulator.js" type="text/javascript"></script>
<script src="js/reading_register.js" type="text/javascript"></script>
<script src="js/summary.js" type="text/javascript"></script>
<script src="js/misc.js" type="text/javascript"></script>
<script src="js/report.js" type="text/javascript"></script>
<script src="js/index.js" type="text/javascript"></script>
<?php jset_payment::alert_script(); ?>
</head>
<body>
	<div> <a href="login.php?signout"><img src="<?php echo $dir_pre ?>jset/img/power-black.png" title="צא"></a> <a href="<?php echo config::password_page; ?>"><?php echo $_SESSION['jset_user_login']; ?></a> שלום</div>
	<?php if(!$user_group){ ?>
		
		<div style="direction:rtl; text-align:right">  יש להגדיר קבוצת הרשאה למשתמש <?php echo $_SESSION['jset_user_login']; ?> בכדי להשתמש במערכת. </div>

	<?php 
		die;
	}	?>
	<div id="tabs">
		<ul>
			<?php if($user_group != 4){ ?><li><a href="#tabs-0">בית</a></li><?php } ?>
			<?php if($user_group != 4){ ?><li><a href="#tabs-1">יחידות</a></li><?php } ?>
			<?php if($user_group != 4){ ?><li><a href="#tabs-2">מונים</a></li><?php } ?>
			<?php if($user_group != 4){ ?><li><a href="#tabs-3">קריאות</a></li><?php } ?>
			<?php if($user_group != 4){ ?><!--li><a href="#tabs-4">סיכומים</a></li--><?php } ?>
			<?php if($user_group != 4){ ?><li><a href="#tabs-5">משתנים</a></li><?php } ?>
			<?php if($user_group != 4){ ?><li><a href="#tabs-9">דוחות</a></li><?php } ?>
			<?php if($user_group != 4){jset_payment::payment_li($jset_payment);} ?>
			</ul>
		<div style="width:100%; margin-top:10px; text-align: center" id="tabs-0">
			<h1 style="color:green;">מערכת קריאת מוני מים</h1>
			<h2 style="color:blue;">קיבוץ חפץ חיים</h2>
			<img src="<?php echo $dir_pre ?>jset/img/jxset.jpg"/>
			<div>תמיכה: <a href="mailto:shukrun.shuki@gmail.com?Subject=מערכת%20קריאת%20מוני%20 מים" target="_blank">shukrun.shuki@gmail.com</a></div>
		</div>
		<div id="tabs-1">
			<table id="unit" border="1"></table>
		</div>
		<div id="tabs-2">
			<table id="accumulator" border="1"></table>
		</div>
		<div id="tabs-3">
			<table id="reading_master_table" style="width:98%">
				<tr>
					<td style="vertical-align:top">
						<table id="reading_register" border="1"></table>
					</td>
				</tr>
				<tr><td></td></tr>
				<tr>	
					<td style="vertical-align:top">
						<table id="reading_item" border="1"></table>
					</td>
				</tr>
			</table>
		</div>
		<div id="tabs-4">
			<table id="summary" border="1"></table>
		</div>
		<div id="tabs-5">
			<table id="misc" border="1"></table>
		</div>
		<div id="tabs-9">
			<table id="report" border="1"></table>
		</div>
		<?php jset_payment::payment_div($jset_payment); ?>
	</div>
</body>
</html>