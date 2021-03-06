// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {promises as fs} from 'fs';
import path from 'path';
import {NextApiRequest, NextApiResponse} from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const {
        method,
    } = req

    switch (method) {
        case 'GET':
            await getRequest(res);
            break
        case 'POST':
            await postRequest(req, res);
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }


    async function getRequest(res: NextApiResponse) {

        const rawData = await fs.readFile(path.resolve(__dirname, '../../../../db/db.json'));

        let tasks = JSON.parse(rawData.toString());

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        res.end(JSON.stringify(tasks));
    }

    async function postRequest(req: NextApiRequest, res: NextApiResponse) {
        const data = await fs.writeFile(path.resolve(__dirname, '../../../../db/db.json'), JSON.stringify(req.body));

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({result: "success"}));
    }

}
