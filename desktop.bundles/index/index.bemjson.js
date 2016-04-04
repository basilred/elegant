module.exports = {
    block : 'page',
    title : 'Elegant',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' },
        { elem : 'css', url : 'https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,600' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    mods : { theme : 'elegant' },
    content : [
        {
            block : 'header',
            content : [
                {
                    block : 'row',
                    mix : [ { block : 'header', elem : 'menu-row' } ],
                    content : [
                        {
                            block : 'logo',
                            mix : [ { block : 'header', elem : 'logo' } ],
                        },
                        {
                            block : 'menu',
                            mix : [ { block : 'header', elem : 'menu' } ],
                            content : [
                                'Menu'
                            ]
                        },
                        {
                            elem : 'col',
                            elemMods : { lw : 12 },
                            content : [
                                {
                                    block : 'header',
                                    elem : 'text',
                                    content : [
                                        'Say <span>Haloa</span> to your Portfolio'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'about',
            content : [
                {
                    block : 'caption',
                    pre : 'Who we Are',
                    text : 'Tell The World About Yourself'
                },
                {
                    block : 'about',
                    elem : 'text',
                    content : [
                        'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc, fiant sollemnes in futurum.'
                    ]
                },
                {
                    block : 'button',
                    mix : [ { block : 'about', elem : 'button' } ],
                    mods : { theme : 'elegant' },
                    text : 'Read More About Us'
                }
            ]
        },
        {
            block : 'work',
            content : [
                {
                    block : 'caption',
                    pre : 'What We Do',
                    text : 'Show Your Amazing Work'
                },
                {
                    block : 'grid'
                }
            ]
        },
        {
            block : 'people',
            content : [
                {
                    block : 'caption',
                    pre : 'Who We Are',
                    text : 'The Amazing People Behind This'
                },
                {
                    block : 'about',
                    elem : 'text',
                    content : [
                        'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.'
                    ]
                },
                {
                    block : 'cards',
                    content : [
                        {
                            elem : 'item',
                            content : [
                                {
                                    block : 'card',
                                    pic : '../../common.blocks/card/tobias.jpg',
                                    name : 'Tobias Schneider',
                                    position : 'CEO',
                                    text : 'Lorem ipsum dolor sit amet, conse tetuer adi piscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.'
                                }
                            ]
                        },
                        {
                            elem : 'item',
                            content : [
                                {
                                    block : 'card',
                                    pic : '../../common.blocks/card/jack.jpg',
                                    name : 'Jack Knife',
                                    position : 'Designer',
                                    text : 'Lorem ipsum dolor sit amet, conse tetuer adi piscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.'
                                }
                            ]
                        },
                        {
                            elem : 'item',
                            content : [
                                {
                                    block : 'card',
                                    pic : '../../common.blocks/card/ricki.jpg',
                                    name : 'Ricki Hall',
                                    position : 'Developer',
                                    text : 'Lorem ipsum dolor sit amet, conse tetuer adi piscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'post',
            content : [
                {
                    block : 'caption',
                    pre : 'last post',
                    text : 'We like to write'
                },
                {
                    block : 'post-card',
                    pic : '../../common.blocks/post-card/__pic/post-card__pic.jpg',
                    date : '14 september 2015',
                    header : 'Change Your Space',
                    text : 'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores.'
                },
                {
                    block : 'button',
                    mix : [ { block : 'post', elem : 'button' } ],
                    mods : { theme : 'elegant' },
                    text : 'More From Our Blog'
                }
            ]
        },
        {
            block : 'contacts',
            content : [
                {
                    block : 'caption',
                    pre : 'contact us',
                    text : 'Work With Us'
                },
                {
                    block : 'map',
                    content : [

                    ]
                },
                {
                    elem : 'items',
                    content : [
                        { header : 'location', info : '198 West 21th Street, New York, NY 10010' },
                        { header : 'phone', info : '+88 (0) 101 1234567<br>+88 (0) 101 7654321' },
                        { header : 'fax', info : '+88 (0) 202 1234567<br>+88 (0) 202 7654321' },
                        { header : 'email', info : 'elegant@elegant.com<br>commercial@elegant.com' }
                    ].map(function (item) {
                        return {
                            block : 'contact-card',
                            content : [
                                {
                                    elem : 'header',
                                    content : item.header
                                },
                                {
                                    elem : 'info',
                                    content : item.info
                                }
                            ]
                        };
                    })
                }
            ]
        }
    ]
};
