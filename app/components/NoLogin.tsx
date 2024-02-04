'use client'
import { useRouter } from "next/navigation";

export const NoLogin = () =>{
    useRouter().push('/login');
    return null;
}