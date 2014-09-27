var keystone = require('keystone');
    async = require('async');

exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // Set locals
    locals.section = 'gallery';
    locals.data = {
        galleries: [],
        tags: []
    };
    
    // Load all tags
    view.on('init', function(next) {
    
        var q = keystone.list('Tag').model.find().sort('title');

        q.exec(function(err, results) {
            locals.data.tags = results;
            next(err);
        });
    
    });
    
    // Load the galleries by sortOrder
    view.on('init', function(next) {

        var q = keystone.list('Gallery').model.find().sort('sortOrder').populate('tag');

        q.exec(function(err, results) {
            locals.data.galleries = results;
            next(err);
        });

    });
    
    // Render the view
    view.render('gallery');
    
};




