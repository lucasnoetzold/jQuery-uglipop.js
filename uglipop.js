/*|--uglipop.js--|
|--(A Minimalistic Pure JavaScript Modal )--|
|--Author : flouthoc (gunnerar7@gmail.com)(https://github.com/flouthoc)--|
|--Contributers : Add Your Name Below--|
|-- zhuharev (kirill at zhuharev.ru)(https://github.com/zhuharev)--|
|--Nicolas Dietrich (https://github.com/nidico)--|*/
|--Lucas Noetzold (https://github.com/lucasnoetzold)--|*/

$(function(){
    let
            remove = () => {
                overlay_wrapper.css("display", "none");
                overlay.css("display", "none");
                content_fixed.css("display", "none");
            },
            popbox = $("<div>")
                .css("z-index", "1000"),
            overlay = $("<div>")
                .css({
                    position: "fixed",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    opacity: 0.3,
                    width: "100%",
                    height: "100%",
                    "background-color": "black",
                    display: "none",
                    "z-index": "999"
                }),
            content_fixed = $("<div>")
                .css({
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    opacity: "1",
                    display: "none",
                    "z-index": "1000"
                })
                .append(popbox)
                .appendTo(document.body),
            overlay_wrapper = $("<div>")
                .css({
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    display: "none",
                    "z-index": "999"
                })
                .click(remove)
                .append(overlay)
                .appendTo(document.body);

    $.fn.uglipop = function (config) {
        let content;

        if (config) {
            if (config.class && (typeof config.class === 'string' || config.class instanceof String))
                popbox.addClass(config.class);

            if (config.keepLayout && !config.class)
                popbox.css({
                    position: "relative",
                    height: "300px",
                    width: "300px",
                    "background-color": "white",
                    "opacity": "1"
                });
        }

        if (this instanceof jQuery)
            content = this;
        else if (config) {
            if ((typeof config.content === 'string' || config.content instanceof String) && config.source === 'div')
                content = $("#" + config.content);
            else
                content = config.content;
        }

        popbox.contents().detach();
        popbox.append(content);
        
        overlay_wrapper.css("display", "");
        overlay.css("display", "");
        content_fixed.css("display", "");

    };

    window.uglipop = $.fn.uglipop;
    $(window).keypress(e => {
        //kill pop if button is ESC ;)
        if (e.which === 27);
            remove();
    });

});
