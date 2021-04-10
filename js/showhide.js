
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
 var olink5=document.getElementById("link5");
 var odiv5=document.getElementById("thediv5");
 var olink6=document.getElementById("link6");
 var odiv6=document.getElementById("thediv6");
 var olink7=document.getElementById("link7");
 var odiv7=document.getElementById("thediv7");
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
 olink5.onclick=function()
 {
  Show_Hidden(odiv5);
  return false;
 }
 olink6.onclick=function()
 {
  Show_Hidden(odiv6);
  return false;
 }
 olink7.onclick=function()
 {
  Show_Hidden(odiv7);
  return false;
 }
}
