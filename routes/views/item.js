var keystone = require('keystone');
    async = require('async');

exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // locals.section is used to set the currently selected
    // item in the header navigation.
    locals.section = 'gallery';
    locals.filters = {
        item: req.params.item
    };
	locals.data = {
		items: []
	};
    
    // Load the current item
    view.on('init', function(next) {
        
        var q = keystone.list('Gallery').model.findOne({
            key: locals.filters.item
        }).populate('tags');
        
        q.exec(function(err, result) {
            locals.data.item = result;
            next(err);
        });
        
    });
    
    // Render the view
    view.render('item');
    
};
