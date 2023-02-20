Qualtrics.SurveyEngine.addOnload(function()
{
	var q = jQuery("#"+this.questionId);
	$('NextButton').disabled = true;
	q.find(".InputText").on("blur", function(e) 
	{
   		var darr = this.value.split("/");
		if(darr.length == 3)
		{
			try
			{
				var today = new Date();
				var dd = String(today.getDate());
				var mm = String(today.getMonth()+1);
				var y1 = today.getFullYear();
				var yr = parseInt(darr[2]);
				var mnth = parseInt(darr[0]) - 1;
				//var mnth1 = mnth+1;
				var dy = parseInt(darr[1]);
				var dt = new Date(yr,mnth,dy);
				if(dt.getUTCMonth() != mnth || dt.getUTCFullYear() != yr || dt.getUTCDate() != dy)
				{
					alert("Please enter a valid date");
					$('NextButton').disabled = true;
				}
				else if(dt.getUTCDay() == 6 || dt.getUTCDay() == 0)
				{
					alert("Tests may not be scheduled on weekends, please enter another date to continue.");
					$('NextButton').disabled = true;
				}
				else if ((mnth>=5 && dy>=16 && yr>=y1))
				{
					alert("Please select valid date within the semester to continue.")
					$('NextButton').disabled = true;
				}
				else if (mnth+1<mm) 
				{
					alert("Tests cannot be scheduled in the past.");
					$('NextButton').disabled = true;
				}
				else if(mnth+1==mm)
				{
					if(dy<dd)
					{
						alert("Tests cannot be scheduled in the past.");
						$('NextButton').disabled = true;
					}
				}
				else
				{
					$('NextButton').disabled = false;
				}
			}
			catch(error)
			{
				alert("Please enter a valid date.");
				$('NextButton').disabled = true;
			}
		}
		else
		{
			alert("Please enter a valid date.");
			$('NextButton').disabled = true;
		}
});
});

Qualtrics.SurveyEngine.addOnReady(function()
{
	/*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});