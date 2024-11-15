function validateForm()
{
    var name=document.forms["form"]["name"].value;  
    if(name==null || x=="" )
    {
        alert("name can't be left blank");
        return false;
    }

    var surname=document.forms["form"]["surname"].value;
    if(surname==null || y=="")
    {
        alert("last name is mandatory");
        return false;
    }
    var email=document.forms["form"]["email"].value;
    if(email==null || y=="")
    {
        alert("last name is mandatory");
        return false;
    }
    var message=document.forms["form"]["message"].value;
    if(message==null || y=="")
    {
        alert("last name is mandatory");
        return false;
    }
    else
    {
        return true;
    }

}