module.exports = {

    'checking nav font sizes on Desktop breakpoints': function (client) {
        var globals = client.globals.desktop.fonts;

        client.init().resizeWindow(1280, 1000)
        client.elements('css selector', '#nav-main .dp-main-menu a, #work-main-menu-wrapper .dp-main-menu a', function (x) {
            var numOfElements = x.value.length
            for (var i = 1; i <= numOfElements; i++) {
                var currentElem = '.dp-main-menu li:nth-of-type' + "(" + i + ")";

                client.verify.cssProperty(currentElem, "font-size", globals.nav.size)
                client.verify.cssProperty(currentElem + ">" + "a", "color", globals.nav.color)

            }
        })

    },

    'checking main body fontsizes on Desktop': function (client) {
        client.init().resizeWindow(1280, 1000)
        var globals = client.globals.desktop.fonts;
        client.init()
            .verify.cssProperty(".work-data-title > a", "font-size", globals.h2.size)
            .verify.cssProperty(".work-data-title > a", "color", globals.h2.color)
            .verify.cssProperty(".work-data-teaser", "font-size", globals.mainP.size)
            .verify.cssProperty(".work-data-teaser", "color", globals.mainP.color)


    },

    "checking footer fontsizes on Footer": function (client) {
        var globals = client.globals.desktop.fonts;
        client.init().resizeWindow(1280, 1000)
        client.elements('css selector', '.footer-inner  div h3', function (x) {
            var numOfElements = x.value.length;

            for (var i = 1; i <= numOfElements; i++) {
                client.verify.cssProperty(".footer-inner div:nth-of-type" + "(" + i + ") > h3", "font-size", globals.h3.size)
                client.verify.cssProperty(".footer-inner div:nth-of-type" + "(" + i + ") > h3", "color", globals.h3.color)
                console.log(i)
            }
        })
        // checking Adress section in footer
        client.verify.cssProperty(".main-footer .footer-inner address", "font-size", globals.p.size)
        client.verify.cssProperty(".main-footer .footer-inner address", "color", globals.p.color)
            //checking social links in footer

            .elements('css selector', ".main-footer .footer-inner .social ul a", function (elems) {
                var socialLinks = elems.value.length;
                console.log(socialLinks)

                for (var i = 1; i <= socialLinks; i++) {
                    client.verify.cssProperty(".social ul li:nth-of-type" + '(' + i + ')' + "> span > a", "font-size", globals.p.size)
                    client.verify.cssProperty(".social ul li:nth-of-type" + '(' + i + ')' + "> span > a", "color", globals.p.footerColor)
                }
            })


            .end()
    }
}
