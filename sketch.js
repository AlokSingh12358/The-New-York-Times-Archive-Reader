var find;
var ye1;
var imag;
var mon1;
var dat1;
var ye2;
var mon2;
var dat2;
var what;
var time1="";
var time2="";
var apimain;
var dataf;
var secname;
var link;
var head;
var para;
var sourc;
var load;
var clo;
var ti1;
var ti2;
function setup() 
{
  find=select('#find');
  find.mousePressed(findf);
  ye1=select('#ye1');
  mon1=select('#mon1');
  dat1=select('#dat1');
  ye2=select('#ye2');
  mon2=select('#mon2');
  dat2=select('#dat2');
  what=select('#what');
  clo=select('#clo');
  imag=select('#imag');
  ti1=select('#time1');
  ti2=select('#time2');
}

function findf()
{
  apimain="https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=3c3c72b5efc449209d64ec7d8a9187f8";
  time1="";
  time2="";
  time1+=ye1.value()+""+mon1.value()+""+dat1.value();
  time2+=ye2.value()+""+mon2.value()+""+dat2.value();
  if(what.value()!=="")
  {
     if(time1!=="" && time2!=="")
     apimain=apimain+"&begin_date="+time1+"&end_date="+time2+"&q="+what.value();
     else if(time1!=="")
     apimain=apimain+"&begin_date="+time1+"&q="+what.value();
     else if(time2!=="")
     apimain=apimain+"&end_date="+time2+"&q="+what.value();
     else
     apimain=apimain+"&q="+what.value();
  }
  else
  {
     if(time1!=="" && time2!=="")
     apimain=apimain+"&begin_date="+time1+"&end_date="+time2;
     else if(time1!=="")
     apimain=apimain+"&begin_date="+time1;
     else if(time2!=="")
     apimain=apimain+"&end_date="+time2;
  }
  load=createElement('h1','Loading...');
  load.style('text-align','center');
  loadJSON(apimain,gotdata);
  
  
}

function gotdata(dataf)
{
  if(dataf)
  {
    load.remove();
    for(var i=0;i<dataf.response.docs.length;i++)
    {
       
       createElement('hr');
       head=createElement('h1',dataf.response.docs[i].headline.main);               //Headline
       head.style('text-align','center');
       secname=createElement('h3',"Section-"+dataf.response.docs[i].section_name);  //Men Fashion
       secname.style('text-align','center');
       para=createElement('p',dataf.response.docs[i].lead_paragraph);               //para
       para.style('text-align','center');
       link=createA(dataf.response.docs[i].web_url,"Link To The Article");          //Full Article Link
       link.style('position','relative');
       link.style('left','45%');
       createP('','');
       createElement('hr');
    }
  }
  clo.style('background','linear-gradient(to top, white, black)');
  imag.remove();
  ti1.style('color','white');
  ti2.style('color','white');
  ti1.style('text-shadow','0px 0px BlanchedAlmond');
  ti2.style('text-shadow','0px 0px BlanchedAlmond');
}
