/*Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output : 
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"*/

function colors(x)
{
  var str = "";
  
  for(var i=0; i<x.length; i++)
  {
    if(i===(x.length-1))
    {
      str += x[i];
    }
    else
    {
      str += (x[i] + "+");
    }
  }
  
  return str;
}

var myColor = ["Red", "Green", "White", "Black"];
console.log(colors(myColor));