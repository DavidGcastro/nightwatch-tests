module.exports = {
    'desktop breakpoint/ Global styles': function (client) {
        client.init().verify.title("Digital Pulp | Digital Pulp")
    },

    'Testing the nav on 1280 breakpoint': function (client) {
        client.init().resizeWindow(1280, 1000)
            .elements('css selector', '#nav-main .dp-main-menu a, #work-main-menu-wrapper .dp-main-menu a', function (x) {

                var numberOfElements = x.value.length;
                for (var i = 1; i <= numberOfElements; i++) {
                    checkLink('.dp-main-menu li:nth-of-type' + "(" + i + ")")
                }

                function checkLink(navIteration) {

                    var linkDest = ['company', "work", "expertise", "people", "careers"];
                    client.verify.containsText(navIteration, linkDest[i - 1].toUpperCase())
                    client.expect.element(navIteration + ">" + "a").to.have.attribute('href').which.contains(client.launch_url + "/" + linkDest[i - 1])
                    client.verify.cssProperty(navIteration + ">" + "a", "color", client.globals.desktop.fonts.nav.color)

                    // checking hover state if nav links
                    client.moveToElement(navIteration + "> " + "a", 10, 10).pause(200)
                        .verify.cssProperty(navIteration + ">" + "a", "color", client.globals.desktop.fonts.nav.hover)
                }
            })


    },

    'Testing pagination bullets and button hover/color': function (client) {
        client.init()
            .waitForElementPresent('.swiper-pagination-bullets', 200)
    },

    'testing if clicking bullets activates active state': function (client) {

        client.url(client.launch_url).waitForElementPresent('body', 100)
            .elements('css selector', '.swiper-pagination-bullet', function (res) {
                var numberOfElements = res.value.length;
                for (var i = 1; i <= numberOfElements; i++) {
                    clicked('.swiper-pagination-bullet:nth-of-type' + '(' + i + ')')
                }

                function clicked(iteration) {
                    client.click(iteration, function () {
                        return client.expect.element('.swiper-pagination-bullet-active').to.be.present + console.log(iteration)
                    })
                }
            })

            //checks hover state of read more button
            .moveToElement("#home-teaser-content .swiper-slide .read-more a", 10, 20, function () {
                client.pause(200)
                client.verify.cssProperty("#home-teaser-content .swiper-slide .read-more a:hover ", "background-color", client.globals.desktop.buttons.hover)
            })
    },

    'Checking footer text': function (client) {
        client.init()
            .elements("css selector", ".main-footer .footer-inner div .footer_title", function (elems) {
                var footerTitles = elems.value.length;
                console.log(footerTitles)
                for (var i = 1; i <= footerTitles; i++) {
                     var footerTitlesArr = ["ABOUT", "ADDRESS", "CONNECT WITH US"]
                    client.verify.containsText(".footer-inner div:nth-of-type" + "(" + i + ") > h3" , footerTitlesArr[i - 1])
                }
            })


    },

    'checking social links in footer': function (client) {
        client.init()
            .waitForElementPresent('.main-footer .footer-inner .social ul', 100)
            .elements('css selector', "ul li span a", function (elems) {
                var socialLinks = elems.value.length;
                console.log(socialLinks)
                for (var i = 1; i <= socialLinks; i++) {
                    var linkText = ['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'Google Maps'];
                    client.verify.containsText(".social ul li:nth-of-type" + '(' + i + ')' + "> span > a", linkText[i - 1])
                }


            })
            .end();
    }

}
