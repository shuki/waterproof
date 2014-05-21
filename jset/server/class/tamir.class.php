<?php

class tamir
{
	public static function create_plan_cares($db, $id, $issues)
	{
		if(!$issues)
			return 0;
		
		$i = 0;
		$issues_array = explode(',', $issues);
		foreach($issues_array as $issue){
			$db->query('select count(*) as result from plan_care where parent_sub = ? and issue = ?', array($id, $issue));
			if(!$db->fetch()->result){
				$db->insert('INSERT INTO `plan_care` (`parent_sub`,`issue`) VALUES (?,?)', array($id, $issue));
				$i++;
			}
		}
		
		return $i;
	}
}