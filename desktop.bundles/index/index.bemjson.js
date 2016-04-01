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
        }
    ]
};