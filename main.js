$('.custom-error-button').on('click', function() {
    var $button = $(this),
        text = $button.text();
    sendError($button, $button.text);
});

$('.custom-error-form').on('submit', function(evt) {
    evt.preventDefault();
    var $input = $(this).find('input'),
        text = $input.val();
    sendError($input, $input.val);
});

var sendError = function(ctx, setFn) {
    var text = setFn.call(ctx);
    setFn.call(ctx, 'Throwing error...');
    setTimeout(function() {
        setFn.call(ctx, text);
        console.log("Thrown error: ", text);
    }, 300);
    throw new Error(text);
};
