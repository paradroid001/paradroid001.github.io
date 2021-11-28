(function($) {

    var colours = ["#ff499e", "#d264b6", "#a480cf", "#779be7", "#49b6ff"];
    var skills = $('.skill');

	skills.each(function()
    {
        var $skill = $(this);
        $skill.find("p").each(function() 
        {
            $bar = $(this);
            var amount = $bar.text();
            var colour = colours[Math.floor(Math.random() * colours.length)];
            console.log(amount);
            $skill.css("background-color", colour);
            $skill.css("width", amount);
        });
    });
    


})(jQuery);