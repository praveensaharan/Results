"use client";

import { useEffect, useState } from "react";
import { Spin, Typography, Alert, Table, Input } from 'antd';
import Link from 'next/link';

interface ProductPageProps {
    params: {
        id: string;
    };
}

const Results: React.FC<ProductPageProps> = ({ params }) => {
    const { id } = params;
    const [results, setResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filteredResults, setFilteredResults] = useState<any[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
    const [studentClass, setStudentClass] = useState<string>('');

    useEffect(() => {
        if (id) {
            const [uuid, cls] = id.split('9999999');
            fetchResults(uuid, cls);
        }
    }, [id]);

    const fetchResults = async (uuid: string, cls: string) => {
        try {
            setIsLoading(true);
            const response = await fetch(`https://rbse-results.onrender.com/results/${uuid}`);
            if (response.ok) {
                const data = await response.json();
                setResults(data || []);
                setFilteredResults(data || []);
                setStudentClass(cls);
            } else {
                const errorData = await response.json();
                setError(errorData.message || "An error occurred while fetching results.");
            }
        } catch (error) {
            setError("An error occurred while fetching results.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleTableChange = (pagination: any) => {
        setPagination(pagination);
    };

    const handleSearch = (value: string) => {
        setSearchText(value);
        const filteredData = results.filter((item: any) =>
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.father_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredResults(filteredData);
        setPagination({ ...pagination, current: 1 });
    };

    const columns = [
        {
            title: 'Roll Number',
            dataIndex: 'roll_number',
            key: 'roll_number',
            width: '20%',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            ellipsis: true,
            render: (text: string) => <Typography.Text strong>{text}</Typography.Text>,
        },
        {
            title: "Father&apos;s Name",
            dataIndex: 'father_name',
            key: 'father_name',
            ellipsis: true,
        },
        {
            title: 'Link',
            key: 'link',
            render: (text: any, record: any) => (
                <Link href={` /services/result?rollNumber=${record.roll_number}&studentClass=${studentClass}`}>
                    View Details
                </Link>
            ),
        },
    ];

    const { Search } = Input;

    if (isLoading) {
        return <Spin size="large" className="flex justify-center mt-36" />;
    }

    if (error) {
        return <Alert className="mt-5" message={error} type="error" />;
    }

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
                <Typography.Title level={2} className="text-center mb-6">Search Results</Typography.Title>
                <div className="mb-4">
                    <Search
                        placeholder="Search by name or father's name"
                        onSearch={handleSearch}
                        enterButton
                        className="mb-4"
                    />
                </div>
                <Typography.Text strong className="mb-4">Class: {studentClass}</Typography.Text>
                <Table
                    columns={columns}
                    dataSource={filteredResults}
                    rowKey="roll_number"
                    pagination={{
                        ...pagination,
                        total: filteredResults.length,
                        showSizeChanger: true,
                        showQuickJumper: true,
                        pageSizeOptions: ['10', '20', '50'],
                        onChange: handleTableChange,
                    }}
                    bordered
                    size="middle"
                />
            </div>
        </div>
    );
}

export default Results;
