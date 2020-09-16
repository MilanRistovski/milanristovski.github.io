
    $(document).ready(function() {
        $(".full_info_wrap .tabs ul li").click(function() {
            $(".full_info_wrap .tabs ul li").removeClass("active");
            $(this).addClass("active");

            var details = $(this).attr("data-li");

            $(".full_info_item").hide();
            if (details == "experience") {
                $(".experience").show();
            }
            else if (details == "education") {
                $(".education").show();
            }
            else if (details == "contact") {
                $(".contact").show();
            }
            else {
                console.log("Loading...");
            }
        })
    })
