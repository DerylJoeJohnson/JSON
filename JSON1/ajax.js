$(document).ready(function(){
    $("#g").click(function(){
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
            beforeSend:function(){
                $('#img').show();
            },
            success:function(data){
                $('#img').hide(10000);
                //console.log(data);
                //var output= "  ID </th><th> Name </th><th> Username </th><th> street </th><th> suite </th><th> city </th><th> zipcode </th><th> phone </th><th> website </th><th> company name </th></tr> </thead> ";
                var output=" ";
                for( var i in data)
                {
                    
                    output+="<div class='card'> <div class='card-header'>"+  data[i].name      +"</div>";
                    output+="<div class='card-body'> UserName :"+  data[i].username  +"<br>";
                    output+="Address : <br>";
                    output+="Street :"+  data[i].address.street   +"<br>";
                    output+="Suite  :"+  data[i].address.suite   +"<br>";
                    output+="City   :"+  data[i].address.city   +"<br>";
                    output+="Zipcode:"+  data[i].address.zipcode   +"<br>";
                    output+="Phone number : "+  data[i].phone  +"<br>";
                    output+="Website  : "+  data[i].website  +"<br>";
                    output+="Company Name : "+  data[i].company.name   +"<br></div>";
                    output+="<div class='card-footer'><button type='button' class='btn btn-success'>Call me man </button></div></div> "
                }
                
                $(".show").html(output);


            }
        });
    });
});