const config = {
	url: 'http://localhost:3000',
	routes: [
		{
			url: '/team',
			operations: ['post'] //OK
		},
		{
			url: '/team/members',
			operations: ['get'] // OK
		},
		{
			url: '/team/pendding-members',
			operations: ['post'] // OK
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
			operations: ['post'] //OK
		}
	]
};

module.exports = config;