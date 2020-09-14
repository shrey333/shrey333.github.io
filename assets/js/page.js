$('document').ready(function(){
    let cnt = 0, sa = 0, hos = 0, gro = 0;
    $('#hair-saloon-btn').on('click', function(){
        if(cnt === 0){
            $('#que').empty();
            $('<h3 class="text-capitalize text-center">Your current queue</h3>').appendTo('#que');
            cnt++;
        }
        if(sa === 0){
            ++sa;
            $('<div class="text-center border" style="border-radius:5px;padding:10px;margin:10px;">Hair Saloon Est. time : 15 minutes</div>').appendTo('#que');
        }
        else{
            $('<div class="war" style="color:red;"><p>You are already waiting in queue.</p></div>').appendTo('#que');
            setTimeout(function(){
                $('.war').fadeOut('normal');
            }, 2000);
        }
    });
    $('#grocery-btn').on('click', function(){
        if(cnt === 0){
            $('#que').empty();
            $('<h3 class="text-capitalize text-center">Your current queue</h3>').appendTo('#que');
            cnt++;
        }
        if(gro === 0){
            ++gro;
            $('<div class="text-center border" style="border-radius:5px;padding:10px;margin:10px;">Grocery Est. time : 10 minutes</div>').appendTo('#que');
        }
        else{
            $('<div class="war" style="color:red;"><p>You are already waiting in queue.</p></div>').appendTo('#que');
            setTimeout(function(){
                $('.war').fadeOut('normal');
            }, 2000);
        }
    });
    $('#hospital-btn').on('click', function(){
        if(cnt === 0){
            $('#que').empty();
            $('<h3 class="text-capitalize text-center">Your current queue</h3>').appendTo('#que');
            cnt++;
        }
        if(hos === 0){
            ++hos;
            $('<div class="text-center border" style="border-radius:5px;padding:10px;margin:10px;">Hospital Est. time : 60 minutes</div>').appendTo('#que');
        }
        else{
            $('<div class="war" style="color:red;"><p>You are already waiting in queue.</p></div>').appendTo('#que');
            setTimeout(function(){
                $('.war').fadeOut('normal');
            }, 2000);
        } 
    });
});