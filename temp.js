function convertToFarenheit()
{
        celsiustemp = document.getElementById("temperature").value;
        farenheittemp = (celsiustemp * 9/5) + 32;
        document.getElementById("result").innerHTML = farenheittemp.toFixed(2) + " °F";
}

function convertToCelsius() 
{ 
        farenheittemp = document.getElementById("temperature").value;
        celsiustemp = (farenheittemp - 32) * 5/9;
        document.getElementById("result").innerHTML = celsiustemp.toFixed(2) + " °C";
}
