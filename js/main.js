




$(document).ready(function (){
    $("input").keypress(function(e){
        if(e.keyCode == 13 && $(".add_task").val() !=''){
            var task = $('<div class="task"></div>').text($(".add_task").val());
            var del = $('<i class="fa-solid fa-trash-can text-danger"></i>').click(function(){
                var hid = $(this).parent();
                hid.fadeToggle(function(){
                hid.hide();
                })
            })
            var done = $('<i class="fa-solid fa-check text-success"></i>').click(function(){
                var hid = $(this).parent();
                    $('.comp-task').append(hid);
                    $(this).hide();
            })
            task.append(del, done);
            $('.incom-task').append(task);
            $('.add_task').val('');
        }
    })
});


