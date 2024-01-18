"use client"
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
    placeName: z.string().min(3).max(255),
});

export default function PlaceForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            placeName: "",
        },
    })

    const handleSubmit = (() => {
        console.log('working');
    });

    return <main>
        <div className="max-w-md mx-auto my-16 px-5">
            <h1 className="text-2xl font-bold">Add Place</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <FormField
                        control={form.control}
                        name="placeName"
                        render={({ field }) => {
                            return <FormItem>
                                <FormLabel>Place Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Place Name"
                                        typeof="text"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        }}
                    />
                    <Button
                        type="submit"
                        className="mt-4 w-full">
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    </main>
}