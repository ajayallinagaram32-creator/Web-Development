const ecommerceProduct = {
	id: 'P12345',
	name: 'Wireless Headphones',
	brand: 'Acme Audio',
	price: 99.99,
	currency: 'USD',
	stock: 120,
	categories: ['electronics', 'audio'],
	rating: 4.5
};

const yourDetails = {
	fullName: 'Alex Johnson',
	username: 'alex.j',
	email: 'alex.johnson@example.com',
	city: 'Seattle',
	country: 'USA',
	bio: 'Frontend developer and coffee enthusiast.'
};

const instagramPost = {
	postId: 'IG98765',
	author: 'alex.j',
	imageUrl: 'https://example.com/photos/beach.jpg',
	caption: 'Sunset vibes 🌅',
	likes: 482,
	comments: [
		{ user: 'kate', text: 'Amazing!' },
		{ user: 'sam', text: 'Wish I was there' }
	],
	tags: ['sunset', 'vacation']
};

const ecommerceOrder = {
	orderId: 'O20260223-001',
	customer: {
		name: 'Alex Johnson',
		email: 'alex.johnson@example.com'
	},
	items: [
		{ productId: 'P12345', name: 'Wireless Headphones', quantity: 1, price: 99.99 }
	],
	subtotal: 99.99,
	shipping: 5.0,
	total: 104.99,
	status: 'processing'
};

// Print original objects
console.log('Original ecommerceProduct:', JSON.stringify(ecommerceProduct, null, 2));
console.log('Original yourDetails:', JSON.stringify(yourDetails, null, 2));
console.log('Original instagramPost:', JSON.stringify(instagramPost, null, 2));
console.log('Original ecommerceOrder:', JSON.stringify(ecommerceOrder, null, 2));

// Update two key values from each JSON variable
// ecommerceProduct: update price and stock
ecommerceProduct.price = 89.99;
ecommerceProduct.stock = 95;

// yourDetails: update city and bio
yourDetails.city = 'Portland';
yourDetails.bio = 'Frontend developer, photographer, coffee lover.';

// instagramPost: update caption and likes
instagramPost.caption = 'Golden hour at the coast 🌅';
instagramPost.likes = instagramPost.likes + 120; // new likes

// ecommerceOrder: update status and total
ecommerceOrder.status = 'shipped';
ecommerceOrder.total = ecommerceOrder.subtotal + ecommerceOrder.shipping + 0; // no change to shipping, shown as update

// Print updated objects
console.log('\nUpdated ecommerceProduct:', JSON.stringify(ecommerceProduct, null, 2));
console.log('Updated yourDetails:', JSON.stringify(yourDetails, null, 2));
console.log('Updated instagramPost:', JSON.stringify(instagramPost, null, 2));
console.log('Updated ecommerceOrder:', JSON.stringify(ecommerceOrder, null, 2));

// Export objects for potential reuse
if (typeof module !== 'undefined' && module.exports) {
	module.exports = { ecommerceProduct, yourDetails, instagramPost, ecommerceOrder };
}

