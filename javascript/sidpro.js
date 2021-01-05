var num,lum;
var result=0,result2 = "";
var lock = false;

var expre = {"Binary":" Expression:<br/><br>E.g. 110+(11*01.01)/10",
              "Decimal":" Expression:<br/><br>E.g. 67+(78.5*99)/2",
              "Hexadecimal":" Expression:<br/><br>E.g. a9+(a.b*e45)/3"};

//Reset value of input and output
function Reset(){
  document.getElementById('output1').value="";
  document.getElementById('input1').value="";
}


//check value of selectors and convert them
function takevalue(){

  let unit1 = document.getElementById('select1').value;
  let unit2 = document.getElementById('select2').value;
  lum = document.getElementById('input1').value;
  lum = lum.trim();
  num = lum.replace(/ +/g, "");
  let hu;
  //console.log(num);
  if((num.lastIndexOf("-") == 0 || num.lastIndexOf("-") == -1) && ((num.match(/\./g) == null)?0:(num.match(/\./g)).length)<2){
    document.getElementById('output1').style.color="#45A29E";
    if(unit1 == "Binary"){
      var number;
      num = num.toString();
      var regex = /[01\.\-]/g;
      num = num.match(regex).join('');
      number = num;
          switch(unit2){
            case 'Binary':result = num;break;
            case 'Decimal':if(number.indexOf(".") != -1) result2 = ToDecimal(num,2);
                           if(!isNaN(parseInt(num,2)))
                           result=parseInt(num,2).toString(10);break;
            case 'Hexadecimal':if(number.indexOf(".") != -1) result2 = BinToHex(num);
                               if(!isNaN(parseInt(num,2)))
                               result=parseInt(num,2).toString(16);break;
          }
        document.getElementById('input1').value=number;
        document.getElementById('output1').value=result.toString().toUpperCase()+result2;
        result2="";
        result = 0;
    }
    else if(unit1 == "Decimal"){
          var number;
          num = num.toString();
          var regex = /[0-9\.\-]/g;
          num = num.match(regex).join('');
          number = num;
          switch (unit2) {
            case 'Binary':if(number.indexOf(".") != -1) result2 = DecimalToBinary(num);
                          if(!isNaN(parseInt(num,10)))
                          result=parseInt(num,10).toString(2);break;
            case 'Decimal':result = num;break;
            case 'Hexadecimal':if(number.indexOf(".") != -1) result2 = DecimalToHex(num);
                               if(!isNaN(parseInt(num,10)))
                               result=parseInt(num,10).toString(16);break;
          }
            document.getElementById('input1').value=number;
            document.getElementById('output1').value=result.toString().toUpperCase()+result2;
            result2="";
            result = 0;
    }
    else if(unit1 == "Hexadecimal"){
          var number;
          num = num.toString();
          var regex = /[0-9ABCDEFabcdef\.\-]/g;
          num = num.match(regex).join('');
          number = num;
          switch (unit2) {
            case 'Binary': if(number.indexOf(".") != -1) result2 = HexToBin(num);
                           if(!isNaN(parseInt(num,16)))
                           result=parseInt(num,16).toString(2);break;
            case 'Decimal':if(number.indexOf(".") != -1) result2 = ToDecimal(num,16);
                           if(!isNaN(parseInt(num,16)))
                           result=parseInt(num,16).toString(10);break;
            case 'Hexadecimal':result = num;break;
          }
          document.getElementById('input1').value=number;
          document.getElementById('output1').value=result.toString().toUpperCase()+result2;
          result2="";
          result = 0;
      }
    }else{
      document.getElementById('output1').style.color="red";
      document.getElementById('output1').value="!Invalid input";
    }
}


//change other element based on selector
function convert(){
  Reset();
  let unit1 = document.getElementById('select1').value;
  let unit2 = document.getElementById('select2').value;
  if(unit1 != unit2){
    //document.getElementById('title').innerHTML= unit1+" to "+unit2+" converter";
    document.getElementById('h1').innerHTML= unit1+" to "+unit2+" converter and CALCULATOR";
    document.getElementById('lable1').innerHTML= "Enter "+unit1+" number:";
    document.getElementById('lable2').innerHTML= unit2+" number:";

    switch (unit1) {
      case 'Binary':document.getElementById('sub1').innerHTML="2";break;
      case 'Decimal':document.getElementById('sub1').innerHTML="10";break;
      case 'Hexadecimal':document.getElementById('sub1').innerHTML="16";break;
    }
    switch (unit2) {
      case 'Binary':document.getElementById('sub2').innerHTML="2";break;
      case 'Decimal':document.getElementById('sub2').innerHTML="10";break;
      case 'Hexadecimal':document.getElementById('sub2').innerHTML="16";break;
    }
  }
}


//here change theam
function Change() {
    document.getElementById('div1').classList.toggle("lbgcolor2");
    document.getElementById('h1').classList.toggle("ltextcolor1");
    document.getElementById('div2').classList.toggle("ltextcolor1");
    document.getElementById('select1').classList.toggle("ltextcolor2");
    document.getElementById('select1').classList.toggle("lbgcolor1");
    document.getElementById('div3').classList.toggle("ltextcolor1");
    document.getElementById('select2').classList.toggle("ltextcolor2");
    document.getElementById('select2').classList.toggle("lbgcolor1");
    document.getElementById('div4').classList.toggle("ltextcolor1");
    document.getElementById('input1').classList.toggle("ltextcolor2");
    document.getElementById('input1').classList.toggle("lbgcolor1");
    document.getElementById('div5').classList.toggle("ltextcolor1");
    document.getElementById('output1').classList.toggle("ltextcolor2");
    document.getElementById('output1').classList.toggle("lbgcolor1");
    document.getElementById('btn1').classList.toggle("ltextcolor1");
    document.getElementById('btn2').classList.toggle("ltextcolor1");
    document.getElementById('btn3').classList.toggle("ltextcolor1");
    document.getElementById('btn1').classList.toggle("lbordercolor1");
    document.getElementById('btn2').classList.toggle("lbordercolor1");
    document.getElementById('btn3').classList.toggle("lbordercolor1");
    document.getElementById('body1').classList.toggle("lbgcolor1");
}


//swape values of selectors only
function Swape(){
  let x = document.getElementById('select1');
  let y = document.getElementById('select2');
  let temp = x.value;
  x.value = y.value;
  y. value = temp;
  Reset();
  convert();
}


//bound input based on selector values

function Onpress(e){
  let pressedkey=(window.event)?event.charCode:e.which;
  if(pressedkey == 13){
    takevalue();
    return true;
  }
  else{
          let unit1 = document.getElementById('select1').value;
          switch (unit1) {
            case 'Binary':  if( pressedkey == 48 || pressedkey == 49 ||
                            pressedkey == 46 || pressedkey == 45 )return true;
                            else{ return false; }
                            break;
            case 'Decimal':  if( (pressedkey > 47 && pressedkey < 58) ||
                             pressedkey == 46 || pressedkey == 45 ) return true;
                             else{ return false; }
                             break;
            case 'Hexadecimal':  if( (pressedkey > 47 && pressedkey < 58) ||
                                  (pressedkey > 96 && pressedkey < 103) ||
                                  (pressedkey > 64 && pressedkey < 71) ||
                                  pressedkey == 46 || pressedkey == 45 )return true;
                                 else{ return false; }
                                 break;
          }
      }
}


// convert any -> decimal
function ToDecimal(val,n){
  //var binToDic = [2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072];
    var number = val.toString();          //to string
    var inDex = number.indexOf(".");      //search for .
    var fraction = number.slice(inDex+1); //slice out after . string
    var leng = fraction.length;           //find length
    if(leng == 0) return "";
    number = parseInt(fraction);          //extract int value
    var numberA = fraction.split("");     //spilt into string array
    val = 0;
    for(let i=0;i<leng;i++){
        if(numberA[i] != "0"){
            let temp = numberA[i];
            let devide = parseInt(temp,n);
            let devided = Math.pow(n,i+1);
            val += (devide/devided);
        }
    }
    number = val.toString();
    val = number.slice(1);
    return val;
}


// convert decimal to binary
function DecimalToBinary(val){
  var number = val.toString();          //to string
  var inDex = number.indexOf(".");      //search for .
  var fraction = number.slice(inDex+1); //slice out after . string
  var leng = fraction.length;           //find length
  if(leng == 0) return "";
  fraction = number.slice(inDex);
  number = Number(fraction);
  fraction = ".";
    for(let i=0;i<21;i++){
        number *= 2;
            if(number == 1){
              fraction+= "1";
                break;
            }
            else if(number < 1){
              fraction+= "0";
            }
            else{
              number-=1;
              fraction+= "1";
            }
      }
  return fraction;
}


// convert decimal to hexadecimal or Binary
function DecimalToHex(val){
  var number = val.toString();          //to string
  var inDex = number.indexOf(".");      //search for .
  var fraction = number.slice(inDex+1); //slice out after . string
  var leng = fraction.length;           //find length
  if(leng == 0) return "";
  let temp;
  fraction = number.slice(inDex);
  number = Number(fraction);
  fraction = ".";
    for(let i=0;i<21;i++){
        number *= 16;
            if(number == 0){
                break;
            }
            else {
              temp = number;
              leng = parseInt(number);
              temp-=leng;
              number = temp.toFixed(5);
              fraction+= leng.toString(16);
            }
      }
  return fraction.toUpperCase();
}



function BinToHex(val){
  var number = val.toString();          //to string
  var inDex = number.indexOf(".");      //search for .
  number = number.slice(inDex+1); //slice out after . string
  var leng = number.length;           //find length
  var fraction = 0;
  if(leng == 0) return "";
  fraction = ".";
  var temp,i=0;
  if(leng > 3){
  for(i=0;i<leng;i+=4){
      if((leng - i) < 4) break;
      temp = number[i]+number[i+1]+number[i+2]+number[i+3];
      fraction += parseInt(temp,2).toString(16);
    }
  }
    if(i < leng){
      temp = leng - i;
      switch(temp){
        case 1:temp = number[leng-1] + "0" + "0" + "0";
               fraction += parseInt(temp,2).toString(16);
               break;
        case 2:temp = number[leng-2] + number[leng-1] + "0" + "0" ;
               fraction += parseInt(temp,2).toString(16);
               break;
        case 3:temp = number[leng-3] + number[leng-2] + number[leng-1] + "0";
               fraction += parseInt(temp,2).toString(16);
               break;
      }
  }
  leng = fraction.length;
  i = leng - 1;
  while(1){
    if(fraction[i] == 0) i--;
    else break;
  }
  fraction = fraction.slice(0,i+1);
  return fraction.toUpperCase();
}



function HexToBin(val){
  var number = val.toString();          //to string
  var inDex = number.indexOf(".");      //search for .
  number = number.slice(inDex+1); //slice out after . string
  var leng = number.length;
  var fraction = 0,i;           //find length
  if(leng == 0) return fraction;
  fraction = ".";
  for(i=0;i<leng;i++){
    let temp = number[i];
    switch(temp){
      case "0":fraction+="0000";break;
      case "1":fraction+="0001";break;
      case "2":fraction+="0010";break;
      case "3":fraction+="0011";break;
      case "4":fraction+="0100";break;
      case "5":fraction+="0101";break;
      case "6":fraction+="0110";break;
      case "7":fraction+="0111";break;
      case "8":fraction+="1000";break;
      case "9":fraction+="1001";break;
      case "A":
      case "a":
      fraction+="1010";break;
      case "B":
      case "b":
      fraction+="1011";break;
      case "C":
      case "c":
      fraction+="1100";break;
      case "D":
      case "d":
      fraction+="1101";break;
      case "E":
      case "e":
      fraction+="1110";break;
      case "F":
      case "f":
      fraction+="1111";break;
    }
  }
  i=4*leng;
  while(1){
    if(fraction[i] == 0) i--;
    else break;
  }
  fraction = fraction.slice(0,i+1);
  return fraction;
}

/* CALCULATOR */
function ResetCal(){
  document.getElementById('input2').value="";
  document.getElementById('output2').value="";
}

function convertCal(){
  ResetCal();
  var calval = document.getElementById('select3');
  let label3 = document.getElementById('lable3');
  var sub3 = document.getElementById('sub3');
  var sub4 = document.getElementById('sub4');
  let unit1 = calval.value;
  label3.innerHTML= "Enter "+unit1+expre[unit1];
  switch (unit1) {
    case 'Binary':sub3.innerHTML="2";sub4.innerHTML="2";
      break;
    case 'Decimal':sub3.innerHTML="10";sub4.innerHTML="10";
      break;
    case 'Hexadecimal':sub3.innerHTML="16";sub4.innerHTML="16";
      break;
    default:
  }
}

function solve(){
  let unit1 = document.getElementById('select3').value;
  let exp = document.getElementById('input2').value;
  let output = document.getElementById('output2');
  output.style.color="#66FCF1";
  exp = exp.trim();
  let bash = /\.\.|\*\*\*|\/\/|\+\+|%%|\-\-/g;
  if(bash.test(exp)){
    output.style.color="red";
    output.value="!Invalid input";
    return;
  }
  if(exp != ""){
    let expression = exp.replace(/ +/g, "");
    expression = expression.replace(/\.\./g,".");
    exp = expression;
    var solved;
    switch (unit1) {
      case 'Binary':let bregx = /[a-zA-Z2-9]/g;
                    if(bregx.test(expression)){
                      output.style.color="red";
                      output.value="!Invalid input";
                    }else{

                        bregx = /([\.\d]+)/g;
                        //console.log(expression.match(bregx));
                        expression = expression.replace(bregx,(matchs)=>{
                                      result="";
                                      result2="";
                                      if(matchs.indexOf(".") != -1) result2 = ToDecimal(matchs,2);
                                       if(!isNaN(parseInt(matchs,2)))
                                       result=parseInt(matchs,2).toString(10);
                                      return (result.toString().toUpperCase()+result2); });
                      try{
                        bregx = eval(expression);
                        bregx = bregx.toString();
                        result="";
                        result2="";
                        if(bregx.indexOf(".") != -1) result2 = DecimalToBinary(bregx);
                        if(!isNaN(parseInt(bregx,10)))
                                      result=parseInt(bregx,10).toString(2);

                        output.value = result.toString().toUpperCase()+result2;
                        document.getElementById('input2').value = exp;
                      }catch(e){
                        output.style.color="red";
                        output.value="!Invalid input";
                      }
                    }
        break;
      case 'Decimal':let dregx = /[a-zA-Z]/g;
                    if(dregx.test(expression)){
                      output.style.color="red";
                      output.value="!Invalid input";
                    }else{
                      try{
                        dregx = /([\.\d]+)/g;
                        expression=expression.replace(dregx,(match)=>{
                          return match.replace(/^0+/g,"");
                        });
                        //console.log(expression);
                        solved = eval(expression);
                        output.value=solved;
                        document.getElementById('input2').value = expression;
                      }catch(e){

                        output.style.color="red";
                        output.value="!Invalid input";
                      }
                    }
        break;
      case 'Hexadecimal':let hregx = /[g-zG-Z]/g;
                        if(hregx.test(expression)){
                          output.style.color="red";
                          output.value="!Invalid input";
                        }else{

                            hregx = /([\.0-9a-fA-F]+)/g;
                            //console.log(expression.match(bregx));
                            expression = expression.replace(hregx,(matchs)=>{
                                          result="";
                                          result2="";
                                          if(matchs.indexOf(".") != -1) result2 = ToDecimal(matchs,16);
                                          if(!isNaN(parseInt(matchs,16)))
                                                         result=parseInt(matchs,16).toString(10);

                                          return (result.toString().toUpperCase()+result2); });
                          try{
                            console.log(expression)
                            hregx = eval(expression);
                            hregx = hregx.toString();
                            result="";
                            result2="";
                            if(hregx.indexOf(".") != -1) result2 = DecimalToHex(hregx);
                            if(!isNaN(parseInt(hregx,10)))
                                               result=parseInt(hregx,10).toString(16);

                            output.value = result.toString().toUpperCase()+result2;
                            document.getElementById('input2').value = exp;
                          }catch(e){
                            output.style.color="red";
                            output.value="!Invalid input";
                          }
                        }
        break;
      default:
    }
    result="";
    result2="";
  }
}

//bound key Enter
function OnpressCal(e){
  let pressedkey=(window.event)?event.charCode:e.which;
  if(pressedkey == 13){
    solve();
    return true;
  }
}
