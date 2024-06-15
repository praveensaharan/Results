"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Spin, Typography, Alert } from 'antd';
import { useRouter } from "next/navigation";

const resultLinks = {
  "12th-arts": "https://rj-12-arts-result.indiaresults.com/rj/bser/class-12-arts-result-2024/",
  "12th-science": "https://rj-12-science-result.indiaresults.com/rj/bser/class-12-science-result-2024/",
  "12th-commerce": "https://rj-12-commerce-result.indiaresults.com/rj/bser/class-12-commerce-result-2024/",
  "10th": "https://rajasthan-10th-result.indiaresults.com/rj/bser/class-10-result-2024/"
};

const formSchema = z.object({
  studentName: z.string().min(1, {
    message: "Name is required.",
  }),
  studentClass: z.enum(["10th", "12th-science", "12th-commerce", "12th-arts"], {
    errorMap: () => ({ message: "Please select a valid class." }),
  }),
});
type FormSchemaType = z.infer<typeof formSchema>;

export default function Services2() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });
  const router = useRouter();

  const handleSubmit = async (data: FormSchemaType) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://hot-tamarah-bestfit-71ef38d0.koyeb.app/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.studentName,
          url: resultLinks[data.studentClass],
        }),
      });
      const result = await response.json();
      if (response.ok) {
        console.log("Search started successfully:", result);
        const uuid = result.uuid + "9999999" + data.studentClass;
        router.push(`about/names/${uuid}`);
      } else {
        console.error("Error starting search:", result.message);
      }
    } catch (error) {
      console.error("Error starting search:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const { isValid } = form.formState;

  return (
    <div className="bg-gray-100">
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md pt-36">
        <Typography.Title level={2} className="text-center">RBSE Results</Typography.Title>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="studentClass"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select class</SelectLabel>
                          <SelectItem value="10th">10th</SelectItem>
                          <SelectItem value="12th-science">12th Science</SelectItem>
                          <SelectItem value="12th-commerce">12th Commerce</SelectItem>
                          <SelectItem value="12th-arts">12th Arts</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-[1/2] bg-gray-600 hover:bg-gray-700 focus:bg-blue-800 mt-5"
              disabled={!isValid || isLoading}
            >
              {isLoading ? <Spin size="small" /> : "Get Results"}
            </Button>

          </form>
        </Form>
        {!isLoading && <Alert className="mt-5" message="Search Your Dream Result " type="warning" />}
      </div>
    </div>
  );
}
