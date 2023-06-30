const { Client } = require('@notionhq/client')

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

async function getTasks(id) {
    const response = await notion.databases.query({
        database_id: id,
    })

    return response.results
}

export default async function handler(req, res) {
    const { method } = req
    const { id } = req.query

    switch (method) {
        case 'GET':
            try {
                const tasks = await getTasks(id)
                res.status(200).json(tasks)
            }
            catch (error) {
                res.status(500).json({ statusCode: 500, message: error.message })
            }
            break
    }
}