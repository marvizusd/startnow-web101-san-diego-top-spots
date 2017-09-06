console.log('Ready');
$(document).ready(function(e) {
    $.ajax({
        type:"GET",
        url:"data.json",
        success: function(data){
            console.log(data);
            for (let i=0;i<data.length;i++){
                var name = data[i].name;
                var desc = data[i].description;
                var locationX = data[i].location[0];
                var locationY = data[i].location[1];
                console.log(name, desc, location);
                $('.spots').append('<tr><td>'+name+'</td><td>'+ desc +'</td><td><a href="https://www.google.com/maps?q='+locationX+','+ locationY + '">' + '<button id="'+ i +'">Show on Map</button></a></td></tr>');
                $('tr>td:last-child').addClass('btn');      
            }
    }    
})
})