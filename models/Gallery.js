var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
    //autokey: { from: 'name', path: 'key', unique: true }
    // autokey: { path: 'slug', from: 'name', unique: true }
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Gallery.add({
    title: { type: String, required: true },
    content: {
        brief: { type: Types.Html, wysiwyg: true, height: 150 },
        extended: { type: Types.Html, wysiwyg: true, height: 400 }
    },
    publishedDate: { type: Date, default: Date.now },
    heroImage: { type: Types.CloudinaryImage },
    tags: { type: Types.Relationship, ref: 'Tag', many: true },
    images: { type: Types.CloudinaryImages }
});

Gallery.register();

