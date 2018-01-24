exports.registerHelpers = (hbs) => {
    hbs.registerHelper('static-map', ([lat, lng]) => {
        return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=800x150&maptype=roadmap
        &markers=color:red%7C${lat},${lng}&key=${process.env.API_KEY}&scale=2`
    })
}