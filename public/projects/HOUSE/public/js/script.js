$(document).ready(function() {
    var scroll_pos = 0;
    var animation_begin_pos = 0;
    var animation_end_pos = 3500;
    var beginning_color = new $.Color("rgb(34,203,255)"); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
    var ending_color = new $.Color("rgb(226,5,53)"); //what color we want to use in the end
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if (
            scroll_pos >= animation_begin_pos &&
            scroll_pos <= animation_end_pos
        ) {
            // console.log( 'scrolling and animating' );
            //we want to calculate the relevant transitional rgb value
            var percentScrolled =
                scroll_pos / (animation_end_pos - animation_begin_pos);
            var newRed =
                beginning_color.red() +
                (ending_color.red() - beginning_color.red()) * percentScrolled;
            var newGreen =
                beginning_color.green() +
                (ending_color.green() - beginning_color.green()) *
                    percentScrolled;
            var newBlue =
                beginning_color.blue() +
                (ending_color.blue() - beginning_color.blue()) *
                    percentScrolled;
            var newColor = new $.Color(newRed, newGreen, newBlue);
            //console.log( newColor.red(), newColor.green(), newColor.blue() );
            $("body").animate({ backgroundColor: newColor }, 0);
        } else if (scroll_pos > animation_end_pos) {
            $("body").animate({ backgroundColor: ending_color }, 0);
        } else if (scroll_pos < animation_begin_pos) {
            $("body").animate({ backgroundColor: beginning_color }, 0);
        } else {
        }
    });
});
