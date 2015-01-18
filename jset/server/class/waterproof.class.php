<?php

class waterproof
{
	public static function create_readings($db, $id)
	{
		$db->query("select * from reading_register where id != ? order by year desc, month desc limit 1", array($id));
		if($row = $db->fetch())
			$db->exec("update reading_register set last_year = ?, last_month = ? where id = ?", array($row->year, $row->month, $id));
		
		return $db->insert("INSERT IGNORE INTO `reading` (`parent`, `accumulator`)
		select '$id', id
		from accumulator");
	}
}