import React from "react";

interface InputProps {
    props?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function Input({ props }: InputProps) {
    return (
        <input {...props} className="border border-gray-300 rounded-md p-2" />
    );
}
