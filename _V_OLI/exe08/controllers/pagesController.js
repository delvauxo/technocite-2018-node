exports.home = (req, res) => {
    res.render('home', {
        title:"Ma home page", 
        h1: `{title}`, 
        test:"This is my test"
    })
}

exports.about = (req, res) => {
    res.render('about', {
        title: "Ma page about", 
        h1: `{title}`, 
        content: "Lorem Ipsum Dolor emet..."
    })
} 

exports.contact = (req, res) => {
    res.render('contact', {
        title: "Ma page contact", 
        h1: `{title}`, 
        tel: "+32 487 610 422"
    })
}

exports.services = (req, res) => {
    res.render('services', {
        title: "Ma page service",
        h1: `{title}`,
        content: `Voici le contenu de {title}`
    })
}