// pages/api/fetchResults.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { rollno, student_class } = req.query;

        if (!rollno || !student_class) {
            return res.status(400).json({ error: 'Roll number and student class are required.' });
        }

        try {
            const response = await axios.get(`https://rbse-results.onrender.com/result`, {
                params: {
                    rollno: rollno as string,
                    student_class: student_class as string,
                },
            });

            if (response.status === 200 && response.data && response.data.html_content != null) {
                res.status(200).json({ html_content: response.data.html_content });
            } else {
                throw new Error('Invalid response format: html_content not found');
            }
        } catch (error) {
            console.error('Error fetching results:', error);
            res.status(500).json({ error: 'Error fetching results. Please try again.' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
