

function yampi(){
    if(document.getElementById('nivel').value==0){
        document.getElementById('relacion').disabled=true
        document.getElementById('relacion').value=""
        document.getElementById('cantidad').disabled=true
        document.getElementById('cantidad').value=""
        document.getElementById('s').disabled=false
        // document.getElementById('s').style.display="none"
        document.getElementById('nb').disabled=false
        document.getElementById('sa').disabled=false
        document.getElementById('anadirNb').disabled=false
        document.getElementById('limpiar1').disabled=false
        
    }else if(document.getElementById('nivel').value==1){
        document.getElementById('relacion').disabled=true
        document.getElementById('relacion').value=""
        document.getElementById('cantidad').disabled=false
        document.getElementById('s').disabled=true
        document.getElementById('s').value=""
        document.getElementById('nb').disabled=true
        document.getElementById('nb').value=""
        document.getElementById('sa').disabled=true
        document.getElementById('sa').value=""
        document.getElementById('anadirNb').disabled=true
        document.getElementById('limpiar1').disabled=true
    }else if(document.getElementById('nivel').value>1){
        document.getElementById('relacion').disabled=false
        document.getElementById('cantidad').disabled=false
        document.getElementById('s').disabled=true
        document.getElementById('s').value=""
        document.getElementById('nb').disabled=true
        document.getElementById('nb').value=""
        document.getElementById('sa').disabled=true
        document.getElementById('sa').value=""
        document.getElementById('anadirNb').disabled=true
        document.getElementById('limpiar1').disabled=true
        
    }
}


function fcreator(nivel,cod,nb,d,ss,nn,eop){
    this.nivel=nivel;
    this.nb=nb;
    this.d=d;
    this.ss=ss;
    this.nn=nn;
    this.eop=eop
}

function crear(){
    let nombre=document.getElementById('codigo').value
    window[nombre] = new fcreator
}


const x= 3


var pulcito={
    cod:"",
    sem:0
}
function okidoki(){
    pulcito.cod=document.getElementById('codigo').value
    pulcito.sem=Number(document.getElementById('s').value)
}


function karhem(){
    let nombre=document.getElementById('codigo').value
    let d0= Number(document.getElementById('d').value)
    let d1= Number(document.getElementById('ss').value)
    let cantidad=Number(document.getElementById('cantidad').value)
    window[nombre].nb=[]
    window[nombre].d=[]
    window[nombre].ss=[]
    window[nombre].nn=[]
    window[nombre].eop=[]
    window[nombre].d[0]=d0
    window[nombre].nivel=document.getElementById('nivel').value
    
    
    if(window[nombre].nivel==0){
        okidoki()
        
        for(let i=0; i<x + pulcito.sem;i++){
        window[nombre].ss[i]=d1
        window[nombre].nb[i]=0
        window[nombre].nn[i]=0
        window[nombre].eop[i]=0
    }
    }else if (window[nombre].nivel==1){
        let david=pulcito.cod
        for(let i=0;i<x + pulcito.sem;i++){
            window[nombre].ss[i]=d1
            window[nombre].nb[i]=(window[david].eop[i])*cantidad
            window[nombre].nn[i]=0
            window[nombre].eop[i]=0 
        }
    
    }else if (window[nombre].nivel>1){
        let sheyla=document.getElementById('relacion').value
        for(let i=0;i<x + pulcito.sem;i++){
            window[nombre].ss[i]=d1
            window[nombre].nb[i]=window[sheyla].eop[i]*cantidad
            window[nombre].nn[i]=0
            window[nombre].eop[i]=0 
        }
    }
    
    sipiriri(nombre)
}



function karhem1(){
    let nombre=document.getElementById('codigo').value
    let d=Number(document.getElementById('nb').value)
    let semana=Number(document.getElementById('sa').value)
    window[nombre].nb[semana+2]=d
    sipiriri(nombre)
}


function sipiriri(nombre){
    for(let i=0;i<x + pulcito.sem;i++){
        
        let a=window[nombre].d[i]-window[nombre].nb[i]
        if(a<0){
            window[nombre].d[i+1]=0
        }else{window[nombre].d[i+1]=a}

        
        if(window[nombre].d[i]>0){
           let b=window[nombre].nb[i]-window[nombre].d[i]+window[nombre].ss[i]
            if(b<=0){
                window[nombre].nn[i]=0 
            }else{window[nombre].nn[i]=b}
        }else{window[nombre].nn[i]=window[nombre].nb[i]}
    }
    for(let i=0;i<x + pulcito.sem ;i++){
        
        let c=Number(document.getElementById('lt').value)
        
        if( (i+c) >= (x + pulcito.sem)){
            window[nombre].eop[i]=0
        }else{
            window[nombre].eop[i]=window[nombre].nn[i+c]
        }
    }
    crearTbl(nombre)
    for(let i=0;i<3 ;i++){
        
               
        if( window[nombre].eop[i] !== 0){
            javascript:alert(`La EOP de "${nombre}" no puede ser ${window[nombre].eop[i]} en la semana "${i-2}". Nivel de seguridad mal estructurado`)
            
        }
    }
}

function crearT(nombre){
    var col = pulcito.sem+2;
    var filas = 6;
    var total = window[nombre].nb.reduce(function(a, b){return a + b})
    var real = window[nombre].nn.reduce(function(a, b){return a + b})
    var relacion=document.getElementById('relacion').value
    var tabla="<table id='tabla"+nombre+"'><caption> NIVEL: "+ window[nombre].nivel +" <br> R: "+ relacion +"</caption>";
    
    for(i=0;i<filas;i++){
        tabla+="<tr>";
        for(j=-1;j<col+1;j++){

            let title=Object.entries(window[nombre])
            tabla+="<td>"
            if (j==-1){
                if (i==0){
                    tabla+=nombre
                }else{
                    tabla+=title[i][0]
                }
                
            }else{
                if(i==0){
                    tabla+=j-2
                }else{
                    tabla+=title[i][1][j]  
                }
            
             }
            tabla+="</td>"
        }
        tabla+="</tr>";
    }
    tabla+="</table><table id='tabla"+nombre+"1'><tr><td>PEDIDO TOTAL</td><td>"+total+"</td></tr><tr><td>DEMANDA REAL</td><td>"+real+"</td></tr></table>";
    document.getElementById("resultado").insertAdjacentHTML("beforeend",tabla);
}


function limpiarFormulario() {
    document.getElementById("nivel").value="";
    document.getElementById("codigo").value="";
    document.getElementById("d").value="";
    document.getElementById("ss").value="";
    document.getElementById("lt").value="";
    document.getElementById("s").value="";
    document.getElementById("relacion").value="";
    document.getElementById("cantidad").value="";
}
function limpiarFormulario1() {
    document.getElementById("nb").value="";
    document.getElementById("sa").value="";
    
}
function crearTbl(nombre){
    let tblname="tabla"+nombre
    let tblname1="tabla"+nombre+"1"
    table = (document.getElementById(tblname));	
	table1 = (document.getElementById(tblname1));	
	if (!table){
		crearT(nombre)
	} else {
        
        padre = table.parentNode;
       
        padre.removeChild(table);
        padre1 = table1.parentNode;
        padre1.removeChild(table1);
        crearT(nombre)
	}
}
  


function modal(){
    let modal=`<div id="miModal" >
      <div class="modal-contenido">
        <button onclick="cerrar()" >X</button>
        <h1 style="text-align:center">APLICACIÓN WEB "MRP"</h1>
        <h2>Carpintería y Mueblería "LÓPEZ"</h2>
        <p>Fabricación de muebles en madera <br> Puertas, Ventanas, Juegos de dormitorio, Sala, Cocina y Otros</p>
        <p>Av. La Esperanza N°614 - El Tambo - Huancayo</p>
      </div>  
    </div>`
    document.getElementById("resultado").insertAdjacentHTML("afterend",modal);
}
function cerrar(){
    let close="miModal"
    c = (document.getElementById(close));	
    padre = c.parentNode;
       
    padre.removeChild(c);
    
}