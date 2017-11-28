const config = {
	url: 'http://localhost:3000',
	routes: [
		{
			url: '/team',
			operations: ['post'] //OK
		},
		{
			url: '/team/members',
			operations: ['get', 'post']
		},
		{
			url: '/user/hours',
			operations: ['get', 'patch']
		},
		{
			url: '/login',
			operations: ['post'] //OK
		},
		{
			url: '/signup',
			operations: ['post']
		}
	]
};

module.exports = config;