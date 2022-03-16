$(document).ready(function(){
    $.ajax({
        method:'GET',
        url:'resource.json',
        dataType:'json'
    }).done(function(data){
        // console.log(data);
        var logo="";
        var title="";
        $.map(data, function(resource,i){
            // $('.resource').append('<h2>'+resource.title+'</h2>');
            // let $logo = resource.logo;
            // let $title = resource.title;
            // console.log($logo);
            // console.log($title);
            
            // title+='<div class="title">';
            // title+='<h2>'+resource.title+'</h2>';
            // title+="</div>"
            $(".card-view-section").append(' <div class="resource"><div class="img-bg"><img src="'+resource.logo+'" alt="orange"></div><div class="title"><h2>'+resource.title+'</h2></div></div>');
            console.log(title);
        })
        
})
})