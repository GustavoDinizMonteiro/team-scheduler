const config = {
	url: 'http://localhost:3000',
	routes: [
		{
			url: '/team',
			operations: ['post']
		},
		{
			url: '/team/members',
			operations: ['get']
		},
		{
			url: '/team/pending-members',
			operations: ['get', 'patch']
		},
		{
			url: '/team/tag',
			operations: ['post', 'get', 'patch']
		},
		{
			url: '/user/hours',
			operations: ['get', 'patch']
		},
		{
			url: '/login',
			operations: ['post']
		},
		{
			url: '/signup',
			operations: ['post']
		}
	]
};

module.exports = config;