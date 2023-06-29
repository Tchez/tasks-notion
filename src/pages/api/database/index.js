const { Client } = require('@notionhq/client')

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

export default async function handler(req, res) {
    const database = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID
    })
    res.status(200).json(database)
}