let touchstring = document.getElementById("stringcreate");
let touchinteger = document.getElementById("integercreate");
let touchdouble = document.getElementById("doublecreate");
let toucharray = document.getElementById("arraycreate");
let touchif = document.getElementById("ifcreate");
let touchelseif = document.getElementById("elseifcreate");
let touchelse = document.getElementById("elsecreate");
let touchswitch = document.getElementById("switchcreate");
let touchcase = document.getElementById("casecreate");
let touchfor = document.getElementById("forcreate");
let touchwhile = document.getElementById("whilecreate");
let touchclick = document.getElementById("clickcreate");
let touchload = document.getElementById("loadcreate");
let touchmousemove = document.getElementById("mousemovecreate");
let touchscroll = document.getElementById("scrollcreate");
//ブロック
let main = document.getElementById("main");
let gomi = document.getElementById("gomi");
let gomiimg = document.getElementById("gomibako");
let pdf_Butt = document.querySelector("button#pdf");
let brocknumber;
let flag = false;
let index;

//ブロック生成s
    touchstring.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="String";
        brockc.style.backgroundColor="#CD5C5C"
        brockc.setAttribute('class','Stb');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Stb");
                ablemove(brock);
                }
        
        });

    touchinteger.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="integer";
        brockc.style.backgroundColor="#CD5C5C"
        brockc.setAttribute('class','Inb');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Inb");
                ablemove(brock);
                }
    
        });

    touchdouble.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="double";
        brockc.style.backgroundColor="#CD5C5C"
        brockc.setAttribute('class','Dob');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Dob");
                ablemove(brock);
                }
        
        });

    toucharray.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="array";
        brockc.style.backgroundColor="#CD5C5C"
        brockc.setAttribute('class','Arb');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Arb");
                ablemove(brock);
                }
            
        });

    touchif.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="if";
        brockc.style.backgroundColor="#9acd32"
        brockc.setAttribute('class','Ifb');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Ifb");
                ablemove(brock);
                }
                
        });
        
    touchelseif.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="else if";
        brockc.style.backgroundColor="#9acd32"
        brockc.setAttribute('class','Elifb');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Elifb");
                ablemove(brock);
                }
                    
        });
            
    touchelse.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="else";
        brockc.style.backgroundColor="#9acd32"
        brockc.setAttribute('class','Elb');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Elb");
                ablemove(brock);
                }
                            
        });

    touchswitch.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="switch";
        brockc.style.backgroundColor="#9acd32"
        brockc.setAttribute('class','Swb');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Swb");
                ablemove(brock);
                }
                        
        });

    touchcase.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="case";
        brockc.style.backgroundColor="#9acd32"
        brockc.setAttribute('class','Cab');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Cab");
                ablemove(brock);
                }
                        
        });

    touchfor.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="for";
        brockc.style.backgroundColor="#BDB76B"
        brockc.setAttribute('class','Fob');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Fob");
                ablemove(brock);
                }
                            
        });

    touchwhile.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="while";
        brockc.style.backgroundColor="#BDB76B"
        brockc.setAttribute('class','Whb');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Whb");
                ablemove(brock);
                }
                                
        });

    touchclick.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="click";
        brockc.style.backgroundColor="#1e90ff"
        brockc.setAttribute('class','Clb');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Clb");
                ablemove(brock);
                }
                                    
        });

    touchload.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="load";
        brockc.style.backgroundColor="#1e90ff"
        brockc.setAttribute('class','Lob');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Lob");
                ablemove(brock);
                }
                                        
        });

    touchmousemove.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="mousemove";
        brockc.style.backgroundColor="#1e90ff"
        brockc.setAttribute('class','Mob');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Mob");
                ablemove(brock);
                }
                                            
        });

    touchscroll.addEventListener('click',()=>{
        let brockc = document.createElement('div')
        brockc.style.width="50px"
        brockc.style.height="60px"
        brockc.textContent="scroll";
        brockc.style.backgroundColor="#1e90ff"
        brockc.setAttribute('class','Scb');
        brockc.cmanOMat="movearea";
        main.appendChild(brockc);
        flag = true;

        if(flag==true){
            let brock = document.getElementsByClassName("Scb");
                ablemove(brock);
                }
                                                
        });

//ブロック生成e 

//ブロック制御s
    function ablemove(brock){

        $(brock).on('mouseover', function () {
                index = $(brock).index(this);
                brock[index].style.position = "absolute";
                brock[index].style.cursor = "pointer";
                brock[index].style.zIndex = "2";
                brock[index].ondragstart = function(e){
                            
                    return false;
                }
                    brock[index].onmousedown = function(event){
                                
                    document.addEventListener("mousemove",onMouseMove);
                }
                        
                    brock[index].onmouseup = function(event){
                        var x = event.clientX;
                        var y = event.clientY;
                        var width = brock[index].offsetWidth;
                        var height = brock[index].offsetHeight;
                        var gomibakoRect = gomi.getBoundingClientRect();
                            if((x>=gomibakoRect.left && x<=(gomibakoRect.left+gomibakoRect.width)) && 
                                (y>=gomibakoRect.top && y<=(gomibakoRect.top+gomibakoRect.height))){
                                gomibako.src="/img/スクリーンショット-2016-09-18-21.13.58.png";
                                main.removeChild(brock[index]);
                                  }
                                document.removeEventListener("mousemove",onMouseMove);
                            }
                        
                    var onMouseMove = function(event){
                                
                                
                        var x = event.clientX;
                        var y = event.clientY;
                        var width = brock[index].offsetWidth;
                        var height = brock[index].offsetHeight;
                        brock[index].style.top = ((y-(height/2)*2-height*2)) + "px";
                        brock[index].style.left = ((x-(width/2)*2-width*11)) + "px";
                        var gomibakoRect = gomi.getBoundingClientRect();
                            if((x>=gomibakoRect.left && x<=(gomibakoRect.left+gomibakoRect.width)) && (y>=gomibakoRect.top && y<=(gomibakoRect.top+gomibakoRect.height))){
                                gomibako.src="/img/スクリーンショット-2016-09-18-21.13.58のコピー.png";
                                  }
                            else{
                                gomibako.src="/img/スクリーンショット-2016-09-18-21.13.58.png";
                                  }
                            }
                    
                    flag = false;
                      });
                    
                     
                        
                }
//ブロック制御e
    pdf_Butt.addEventListener('click',()=>{

        html2canvas(document.body,{
            onrendered: function(canvas){
              let agr = window.confirm("この内容で保存しますか？");
        if(agr){	
        let dataUrl = canvas.toDataURL();  
        let pdf = new jsPDF();
        let width = pdf.internal.pageSize.width;
        let height = pdf.internal.pageSize.height;
        pdf.addImage(dataUrl, 'PDF', 0, 0,width,0);
        pdf.save('test.pdf')
        
        }
             }
            
          });

    });

