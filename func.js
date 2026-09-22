function checkStatus(code)
{
    if(code===100){
        return"correct Info";
    }else if (code===200){
        return"Ok";

    }else if(code===300)
{
    return"Redirection";
}
    else if(code===400)
    
    return"client Error";
    else
    { return'Check for other'
    }
}