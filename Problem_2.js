
var validate_email = function(email)
{
	var isAt = false;
	var isdot = false;

	for( i in email )
	{
		if( email[i] == '@')
		{
			isAt=true;
		}

		if( email[i] == '.')
		{
			isdot=true;
		}
	}

	if( isAt && isdot)
		return true;
	else
		return false;
}
validate_email("nikhilgautam94@gmail.com")