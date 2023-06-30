function hello(req, res) {
    res.status(200).json({
        text: 'Welcome to the Notion Tasks API! Below are the endpoints you can use.',
        endpoints: [
            {
                path: '/api/database',
                shortDescription: 'Returns information from the database contained in the environment variables',
                description: 'This endpoint returns information from the database related to the ID contained in the environment variables'
            },
            {
                path: '/api/database/:id',
                shortDescription: 'Returns information from the database passed in the URL',
                description: 'This endpoint returns database information related to the ID passed in the URL',
            }
        ]
    })
}
export default hello