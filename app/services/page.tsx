"use client"

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
import Link from "next/link";

const formSchema = z.object({
  rollNumber: z.string().min(1, {
    message: "Roll Number is required.",
  }),
  studentClass: z.enum(["10th", "12th-science", "12th-commerce", "12th-arts"], {
    errorMap: () => ({ message: "Please select a valid class." }),
  }),
});
type FormSchemaType = z.infer<typeof formSchema>;

const Services = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const { isValid } = form.formState;

  return (
    <div className="bg-gray-100">
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md pt-36">
        <Typography.Title level={2} className="text-center">RBSE Results</Typography.Title>
        <Form {...form}>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            <FormField
              control={form.control}
              name="rollNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Roll Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your roll number" {...field} />
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
              className="w-[1/2] bg-gray-600 hover:bg-gray-700 focus:bg-blue-800 mt-5"
              disabled={!isValid || isLoading}
            > <Link
              className=""
              href={{
                pathname: "/services/result",
                query: {
                  rollNumber: form.watch("rollNumber"),
                  studentClass: form.watch("studentClass"),
                },
              }}
              passHref
            >
                {isLoading ? <Spin size="small" /> : "Get Results"} </Link>
            </Button>

          </form>
        </Form>
        {!isLoading && <Alert className="mt-5" message="Search Your Dream Result " type="warning" />}
      </div>
    </div>
  );
}

export default Services;
