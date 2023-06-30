const { Client } = require('@notionhq/client')

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

const databaseId = process.env.NOTION_DATABASE_ID


export default async function handler(req, res) {
    const { method } = req

    switch (method) {
        case 'GET':
            try {
                const response = await notion.databases.query({
                    database_id: databaseId,
                })

                res.status(200).json(response.results)
            } catch (error) {
                res.status(500).json({ statusCode: 500, message: error.message })
            }

            break
    }
}