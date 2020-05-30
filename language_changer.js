 function createRequestObject()   
    {  
        try { return new XMLHttpRequest() }  
        catch(e)   
        {  
            try { return new ActiveXObject('Msxml2.XMLHTTP') }  
            catch(e)   
            {  
                try { return new ActiveXObject('Microsoft.XMLHTTP') }  
                catch(e) { return null; }  
            }  
        }  

    }  





async function showContent(link, row, column) {  



let promise1 = new Promise(function(resolve, reject) {

var http = createRequestObject();  
        if( http )   
        {  
            
            http.open('get', '/php/num_rows.php');  

            http.onreadystatechange = function ()   
            {  
                if(http.readyState == 4)   
                {  

                   resolve(http.responseText);  

                }  
            }  
            http.send(null);      
        }  
        else   
        {  
            document.location = '/php/num_rows.php';  
        }  


   });

let num = await promise1;



for (let i = 1; i <= num; i++) {

var loading = document.getElementById('loading'); 

var cont = document.getElementById('base_text_' + i); 

cont.innerHTML = loading.innerHTML; 


let promise2 = new Promise(function(resolve, reject) {

var http = createRequestObject();  
        if( http )   
        {  
            
            http.open('get', link + '?' + 'row=' + row + '&column=' + column);  

            http.onreadystatechange = function ()   
            {  
                if(http.readyState == 4)   
                {  

                    resolve(http.responseText);  

                }  
            }  
            http.send(null);      
        }  
        else   
        {  
            document.location = link;  
        }  


   });

let result = await promise2;



cont.innerHTML = result;

++row;

}


let promise3 = new Promise(function(resolve, reject) {

var http = createRequestObject();  
        if( http )   
        {  
            
            http.open('get', '/php/num_rows.php?tablename=1');  

            http.onreadystatechange = function ()   
            {  
                if(http.readyState == 4)   
                {  

                   resolve(http.responseText);  

                }  
            }  
            http.send(null);      
        }  
        else   
        {  
            document.location = '/php/num_rows.php';  
        }  


   });

let nums = await promise3;
row=0;

for (i = 1; i <= nums; i++) {

var cont = document.getElementById('base_end_text_' + i); 

cont.innerHTML = loading.innerHTML; 


let promise4 = new Promise(function(resolve, reject) {

var http = createRequestObject();  
        if( http )   
        {  
            
            http.open('get', '/php/get_end_text.php' + '?' + 'row=' + row + '&column=' + column);  

            http.onreadystatechange = function ()   
            {  
                if(http.readyState == 4)   
                {  

                    resolve(http.responseText);  

                }  
            }  
            http.send(null);      
        }  
        else   
        {  
            document.location = '/php/get_end_text.php';  
        }  


   });

let results = await promise4;



cont.innerHTML = results;

++row;

}
