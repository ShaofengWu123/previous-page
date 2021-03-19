
function Show_Hidden(obj)
{
 if(obj.style.display=="none")
 {
  obj.style.display='block';
 }
 else
 {
  obj.style.display='none';
 }
}
window.onload=function()
{
 var olink1=document.getElementById("link1");
 var odiv1=document.getElementById("thediv1");
 var olink2=document.getElementById("link2");
 var odiv2=document.getElementById("thediv2");
 var olink3=document.getElementById("link3");
 var odiv3=document.getElementById("thediv3");
 var olink4=document.getElementById("link4");
 var odiv4=document.getElementById("thediv4");
 olink1.onclick=function()
 {
  Show_Hidden(odiv1);
  return false;
 }
 olink2.onclick=function()
 {
  Show_Hidden(odiv2);
  return false;
 }
 olink3.onclick=function()
 {
  Show_Hidden(odiv3);
  return false;
 }
 olink4.onclick=function()
 {
  Show_Hidden(odiv4);
  return false;
 }
}
