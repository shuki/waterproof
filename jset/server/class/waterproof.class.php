<?php

class waterproof
{
	public static function create_readings($db, $id)
	{
		return $db->insert("INSERT IGNORE INTO `reading` (`parent`, `accumulator`)
		select '$id', id
		from accumulator");
	}
}