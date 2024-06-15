import React from "react";
import { Card, Typography, Table, Progress, Divider, Alert } from "antd";
import { UserOutlined, IdcardOutlined, HomeOutlined, SmileOutlined, RiseOutlined } from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface ResultContent {
    roll_number: string;
    name: string;
    father_name: string;
    mother_name: string;
    school: string;
    total_marks: string;
    percentage: string;
    subject_marks: { subject: string; marks: string }[];
}

interface ResultDisplayProps {
    html_content: ResultContent;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ html_content }) => {

    const columns = [
        {
            title: 'Subject',
            dataIndex: 'subject',
            key: 'subject',
            width: '50%',
        },
        {
            title: 'Marks',
            dataIndex: 'marks',
            key: 'marks',
            align: 'center' as const,
        }
    ];

    const extractNumericMarks = (marks: string): number | null => {
        const numericPart = marks.match(/\d+/)?.[0];
        return numericPart ? parseInt(numericPart) : null;
    };

    const filteredSubjectMarks = html_content.subject_marks
        .filter(subject => subject.subject && subject.marks)
        .map(subject => ({
            subject: subject.subject,
            marks: extractNumericMarks(subject.marks) || 0
        }));


    const totalSubjects = filteredSubjectMarks.length;
    const totalMarks = filteredSubjectMarks.reduce((acc, subject) => acc + subject.marks, 0);
    const averageMarks = totalMarks / totalSubjects;


    let lowestSubject = { subject: '', marks: Number.MAX_SAFE_INTEGER };
    filteredSubjectMarks.forEach(subject => {
        if (subject.marks < lowestSubject.marks) {
            lowestSubject = subject;
        }
    });


    const chartData = filteredSubjectMarks.map(subject => ({
        subject: subject.subject,
        marks: subject.marks,
        aboveAverage: averageMarks,
    }));


    const pieChartData = filteredSubjectMarks.map(subject => ({
        name: subject.subject,
        value: subject.marks,
    }));

    return (
        <div className="max-w-4xl mx-auto p-4">
            <Card
                title={<Typography.Title level={3} style={{ margin: 0 }}>RBSE Result</Typography.Title>}
                bordered={false}
                style={{ width: '100%' }}
            >
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 px-4">
                        <Typography.Paragraph>
                            <IdcardOutlined /> <strong>Roll Number:</strong> {html_content.roll_number}
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            <UserOutlined /> <strong>Name:</strong> {html_content.name}
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            <SmileOutlined /> <strong>Father&apos;s Name:</strong> {html_content.father_name}
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            <SmileOutlined /> <strong>Mother&apos;s Name:</strong> {html_content.mother_name}
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            <HomeOutlined /> <strong>School:</strong> {html_content.school}
                        </Typography.Paragraph>

                        <Divider />

                        <Typography.Title level={4}>Subject Marks</Typography.Title>
                        <Table
                            columns={columns}
                            dataSource={filteredSubjectMarks}
                            pagination={false}
                            rowKey="subject"
                            bordered
                            size="small"
                            style={{ marginBottom: 20 }}
                        />

                        <Typography.Title level={4}>Performance Overview</Typography.Title>
                        <Typography.Paragraph>
                            <strong>Total Marks:</strong> {html_content.total_marks}
                        </Typography.Paragraph>
                        <Typography.Paragraph>
                            <strong>Percentage:</strong> {html_content.percentage}%
                        </Typography.Paragraph>
                        <Alert
                            message={`Your lowest subject marks (${lowestSubject.subject}): ${lowestSubject.marks}`}
                            type="warning"
                        />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <Typography.Title level={4}>Subject-wise Performance</Typography.Title>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart
                                data={chartData}
                                margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="subject" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="marks" name="Marks" stroke="#8884d8" />
                                <Line type="monotone" dataKey="aboveAverage" name="Average Marks" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>

                        <Divider />

                        <Typography.Title level={4}>Overall Performance</Typography.Title>
                        <Progress
                            strokeColor={{ from: '#108ee9', to: '#87d068' }}
                            percent={parseFloat(html_content.percentage)}
                            status="active"
                            format={(percent) => `${percent}%`}
                        />

                        <Divider />

                        <Typography.Title level={4}>Marks Distribution</Typography.Title>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={pieChartData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                >
                                    {
                                        pieChartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`} />
                                        ))
                                    }
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>

                        <Divider />


                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ResultDisplay;
