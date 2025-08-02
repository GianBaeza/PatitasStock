import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/features/inicio/components/card";

import React from "react";

export default function CardInicio() {
    return (
        <Card className=" h-fit bg-white border border-gray-200 shadow-sm rounded-xl p-5 flex flex-col gap-2 minimal-box">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-gray-800">
                    Card Title
                </CardTitle>
                <CardDescription className="text-gray-500 text-sm">
                    Card Description
                </CardDescription>
                <CardAction className="text-xs text-gray-400">
                    Card Action
                </CardAction>
            </CardHeader>
            <CardContent className="py-2">
                <p className="text-gray-700">Card Content</p>
            </CardContent>
            <CardFooter className="pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-400">Card Footer</p>
            </CardFooter>
        </Card>
    );
}
