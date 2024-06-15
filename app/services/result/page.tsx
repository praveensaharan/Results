"use client"

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import ResultDisplay from "../../components/results/ResultDisplay";
import { Spin } from 'antd';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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

const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const rollNumber = searchParams?.get('rollNumber');
    const studentClass = searchParams?.get('studentClass');

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [htmlContent, setHtmlContent] = useState<ResultContent | null>(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await axios.get(`https://hot-tamarah-bestfit-71ef38d0.koyeb.app/result`, {
                    params: {
                        rollno: rollNumber,
                        student_class: studentClass,
                    },
                });

                if (response.status === 200 && response.data && response.data.html_content != null) {
                    setHtmlContent(response.data.html_content);
                } else {
                    throw new Error("Invalid response format: html_content not found");
                }
            } catch (error) {
                console.error("Error fetching results:", error);
                setHtmlContent(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchResults();
    }, [rollNumber, studentClass]);

    return (
        <div className='mt-24'>
            {isLoading && <div className="text-center"><Spin size="large" /></div>}
            {!isLoading && (
                <div style={{ marginTop: "20px" }}>
                    <div className="text-center mt-4">
                        <Button onClick={() => router.back()}>Back</Button>
                    </div>
                    {htmlContent ? (
                        <ResultDisplay html_content={htmlContent} />
                    ) : (
                        <div>Error fetching results. Please try again.</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Page;
