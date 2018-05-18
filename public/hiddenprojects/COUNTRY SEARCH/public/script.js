(function() {
    $("#results").hide();
    var results = $("#results");

    var xhr;
    var xhhr;
    var val;
    var q;
    var input = $("input");
    var city;
    var countryCode;

    function findCountryInfo(choice) {
        $("#information").empty();
        $.ajax({
            url: "/countries.json",
            method: "GET",
            success: function(countries) {
                for (var i = 0; i < countries.length; i++) {
                    if (choice == countries[i].name.common) {
                        var lt = countries[i].latlng[0];
                        var lg = countries[i].latlng[1];
                        function initMap() {
                            var myLatLng = { lat: lt, lng: lg };

                            // Create a map object and specify the DOM element for display.
                            var map = new google.maps.Map(
                                document.getElementById("map"),
                                {
                                    center: myLatLng,
                                    zoom: 3
                                }
                            );

                            // Create a marker and set its position.
                            var marker = new google.maps.Marker({
                                map: map,
                                position: myLatLng,
                                title: "Hello World!"
                            });
                        }
                        // Create a map object and specify the DOM element for display.
                        console.log();

                        google.maps.event.addDomListener(
                            window,
                            "init",
                            initMap()
                        );
                        $("#information").append(
                            "<h1>" +
                                countries[i].name.common +
                                "</h1>"
                        );
                        $("#information").append(
                            countries[i].flag + "<br>"
                        );
                        $("#information").append(
                            "Capital City: " +
                                countries[i].capital +
                                "<br>"
                        );
                        $("#information").append(
                            "Region: " + countries[i].region
                        );

                        console.log(countries[i].capital);
                    }
                }
            }
        });
    }

    $("input").on("input", function(e) {
        if ($(e.target).val() == "") {
        } else {
            $("#results").show();
            xhr = $.ajax({
                url: "https://flame-egg.glitch.me/",
                data: {
                    q: $(e.target).val()
                    // or input.val();
                },
                success: function(data) {
                    var results = $("#results");
                    var printInHtml = "";

                    for (var i = 0; i < data.length; i++) {
                        if (data.length > 0) {
                            printInHtml +=
                                '<div class="result">' + data[i] + "</div>";
                        } else {
                            printInHtml = "<div>" + "No result dude" + "</div>";
                        }
                        results.html(printInHtml);
                    }
                }
            });
        }
    });

    // function findCityInfo(city) {
    //     $("#information").empty();
    //     $.ajax({
    //         url: "/cities.json",
    //         method: "GET",
    //         success: function(cities) {
    //             for (var i = 0; i < cities.length; i++) {
    //                 var countryCode = (cities[i].country)
    //                 if (city == cities[i].name) {
    //                     var lt = cities[i].lat;
    //                     var lg = cities[i].lng;
    //                     function initMap() {
    //                         var myLatLng = { lat: lt, lng: lg };
    //
    //                         // Create a map object and specify the DOM element for display.
    //                         var map = new google.maps.Map(
    //                             document.getElementById("map"),
    //                             {
    //                                 center: myLatLng,
    //                                 zoom: 3
    //                             }
    //                         );
    //
    //                         // Create a marker and set its position.
    //                         var marker = new google.maps.Marker({
    //                             map: map,
    //                             position: myLatLng,
    //                             title: "Hello World!"
    //                         });
    //                     }
    //                     // Create a map object and specify the DOM element for display.
    //                     console.log();
    //
    //                     google.maps.event.addDomListener(
    //                         window,
    //                         "init",
    //                         initMap()
    //                     );
    //                     $("#information").append(
    //                         "Region: " + cities[i].country
    //                     );
    //
    //                     console.log(countries[i].capital);
    //                 }
    //             }
    //         }
    //     });
    // }

    //
    // $("input").on("input", function(ev) {
    //     if ($(ev.target).val() == "") {
    //     } else {
    //         $("#results").show();
    //         xhhr = $.ajax({
    //             url: "/cities.json",
    //             method: "GET",
    //             success: function(data) {
    //                 var results = $("#results");
    //                 var printInHtml = "";
    //
    //                 for (var i = 0; i < city.length; i++) {
    //                     if (city.length > 0) {
    //                         printInHtml +=
    //                             '<div class="result">' + data[i] + "</div>";
    //                     } else {
    //                         printInHtml = "<div>" + "No result dude" + "</div>";
    //                     }
    //                     results.html(printInHtml);
    //                 }
    //             }
    //         });
    //     }
    // });

    results.on("mouseover", ".result", function(e) {
        $(".highlight").removeClass("highlight");
        $(e.target).addClass("highlight");
    });

    results.on("mousedown", ".result", function() {
        var choice = $(".highlight").html();
        input.val(choice);
        $("#results").hide();
        findCountryInfo(choice);
        console.log(choice);
        if ($(".result").hasClass("highlight")) {
        }
    });

    $(document).on("keydown", function(e) {
        if (e.keyCode == 13) {
            var choice = $(".highlight").html();
            console.log(choice);
            findCountryInfo(choice);
            input.val(choice);
            $("#results").hide();
            return findInfo();
        } else if (e.keyCode == 40) {
            if (!$(".result").hasClass("highlight")) {
                $("#results div:first-child").addClass("highlight");
            } else if ($("#results div:last-child").hasClass("highlight")) {
                return;
            } else {
                $(".highlight")
                    .removeClass("highlight")
                    .next()
                    .addClass("highlight");
            }
        } else if (e.keyCode == 38) {
            if (!$(".result").hasClass("highlight")) {
                $("#results div:last-child").addClass("highlight");
            } else {
                $(".highlight")
                    .removeClass("highlight")
                    .prev()
                    .addClass("highlight");
            }
        }
    });

})();
