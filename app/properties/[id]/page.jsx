'use client'

import { useRouter, useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

const PropertiesAddPage = () => {
    const router = useRouter()
    const {id} = useParams()
    const searchParams = useSearchParams()

    const name = searchParams.get('name')

    return (
        <div>
            <h1 className='text-3xl'>Properties Add</h1>

        </div>
    );
};

export default PropertiesAddPage;
