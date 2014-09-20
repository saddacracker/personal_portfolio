var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Tag Model
 * ==================
 */

var Tag = new keystone.List('Tag', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Tag.add({
	name: { type: String, required: true }
});

Tag.relationship({ ref: 'Gallery', path: 'tags' });

Tag.register();
