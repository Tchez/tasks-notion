export default function handler(req, res) {
    const {
        query: { id },
    } = req

    res.status(200).json({
        id,
        info: 'This endpoint is in development'
    })
}