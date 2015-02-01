<style>
	body{
		direction: rtl;
		/*font-family:"Times New Roman",Georgia,Serif;*/
		font-size: 18px;
		/*font-weight:200;*/
		font:"Arial Narrow";
		margin: 10px;
	}
	
	.dateblock {
		float:left;
		text-align: left;
	}
	
	.signatureblock {
		float:left;
		text-align: right;
		margin: 0 0 0 100px;
	}
	
	p.subject {
		text-align: center;
		text-decoration:none;
		font-weight:bold;
	}
	span.subject {
		text-decoration:underline;
	}
	
	@media print{
		h1{
			display:none
		}
	}
	
	p.footer {
		page-break-after:always;
	}
	
	table.data{
		border: 0;
		padding: 4px;
		border-collapse:collapse;
	}

	.data tr{
		 background-color: #ffffff;
	}
	
	td.header {
	    background-color: #f7f7f7;
	    border: 1px solid black;
	    border-collapse: collapse;
	    padding: 4px 4px 4px 30px;
	    /*font-weight: bold;*/
	}
	
	td.detail {
	    padding: 4px 10px 4px 20px;
	    /*font-weight: bold;*/
	}
	
	td.separator {
		border: 0;
	}
	
	tr.separator {
		border: 0;
	}
	
	span.total {
		font-size: 20px;
		font-weight: bold;
	}
</style>

{foreach from=$data key=k item=row}
{*foreach from=$row key=k item=item*}
<!--div class="dateblock">
{$aggregate[0]->now}
<br>
{$hebrew_now}
</div-->
<p>
	<br />
	<br />
	<br />
	<br />
</p>

<p>
	<table class="data">
		<tr class="separator">
			<td colspan="2" class="separator">
				<p class="subject"><span class="subject"> חיוב עבור צריכת מים
				לחודש {$aggregate[0]->month_name} {$aggregate[0]->year} 
				<br />
				</span>
				</p>
			</td>
		</tr>
		<tr class="separator">
			<td class="separator">
			</td>
			<td class="separator">
			</td>
		</tr>
		<tr>
			<td class="header">
				שם
			</td>
			<td class="detail">
				{$row->name}
			</td>
		</tr>
		<tr>
			<td class="header">
				מספר נפשות
			</td>
			<td class="detail">
				{$row->total_number}
			</td>
		</tr>
		<tr class="separator">
			<td class="separator">
			</td>
			<td class="separator">
			</td>
		</tr>
		<tr>
			<td class="header">
				קריאה תחילת תקופה מונה 1
			</td>
			<td class="detail">
				{$row->last_amount1}
			</td>
		</tr>
		<tr>
			<td class="header">
				קריאה סוף תקופה מונה 1
			</td>
			<td class="detail">
				{$row->amount1}
			</td>
		</tr>
		<tr>
			<td class="header">
				סה"כ שימוש מונה 1
			</td>
			<td class="detail">
				{$row->usage1}
			</td>
		</tr>
		<tr>
			<td class="header">
				קריאה תחילת תקופה מונה 2
			</td>
			<td class="detail">
				{$row->last_amount2}
			</td>
		</tr>
		<tr>
			<td class="header">
				קריאה סוף תקופה מונה 2
			</td>
			<td class="detail">
				{$row->amount2}
			</td>
		</tr>
		<tr>
			<td class="header">
				סה"כ שימוש מונה 2
			</td>
			<td class="detail">
				{$row->usage2}
			</td>
		</tr>
		<tr>
			<td class="header">
				סה"כ שימוש
			</td>
			<td class="detail">
				{$row->total_usage}
			</td>
		</tr>
		<tr class="separator">
			<td class="separator">
			</td>
			<td class="separator">
			</td>
		</tr>
		<tr>
			<td class="header">
				חיוב תעריף מוזל (עד {$row->person_allowance_cheap_rate_round} קוב לנפש) מחיר {$row->cheap_rate_vat} ₪
			</td>
			<td class="detail">
				{$row->cheap_usage_cost} ₪
			</td>
		</tr>
		<tr>
			<td class="header">
				חיוב תעריף יקר (מעל {$row->person_allowance_cheap_rate_round} קוב לנפש) מחיר {$row->expensive_rate_vat} ₪
			</td>
			<td class="detail">
				{$row->expensive_usage_cost} ₪
			</td>
		</tr>
		<tr>
			<td class="header">
				אגרת ביוב מחיר {$row->surage_rate_vat} ₪
			</td>
			<td class="detail">
				{$row->surage_cost} ₪
			</td>
		</tr>
		<tr>
			<td class="header">
				סה"כ חיוב
			</td>
			<td class="detail">
				<span class="total">
				{$row->total_cost} ₪
				</span>
			</td>
		</tr>
	</table>
</p>
<p class="footer">
</p>

{foreachelse}
	<p>No Data</p>
{/foreach}

