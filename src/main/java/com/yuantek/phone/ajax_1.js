//需要引入jQuery
$(function(){
    
    $("#testJSON").click(function(){
        
        var url = this.href; // this为鼠标点击的dom对象
        var args = {};
        $.post(url,args,function(data){
            
            for(var i = 0; i<data.length ; i++) {
                var id = data[i].id;
                var lastName = data[i].lastName;
                
                alert(id + " : " + lastName);
            }
        });
    });
});