function hello(req, res) {
    res.status(200).json({
        text: 'Hello, World.',
        endpoints: [
            {
                path: '/api',
                description: 'This endpoint'
            },
            {
                path: '/api/database',
                description: 'Return the database with id from .env file'
            },
            {
                path: '/api/database/:id',
                description: 'Return the database with id from url'
            }
        ]
    })
}
export default hello