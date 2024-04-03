'use client';
import {ClipLoader} from "react-spinners";

const override = {
    display: 'block',
    margin: '100px auto'
}
function LoadingPage({loading}) {
    return (
        <div>
            <ClipLoader
                color='#3b82f6'
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default LoadingPage;