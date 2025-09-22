import {Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/home/Home.tsx";
import {Test} from "../pages/test/Test.tsx";

// eslint-disable-next-line react-refresh/only-export-components
const LazyWrapper = ({children}: { children: React.ReactNode}) => {
    return (
        <Suspense fallback={<div>로딩중...</div>}>
            {children}
        </Suspense>
    )
}

export const router = createBrowserRouter([
    {
        path: '/',
        element:
            <LazyWrapper><Home /></LazyWrapper>,
    },
    {
        path: '/test',
        element: <LazyWrapper><Test /></LazyWrapper>
    }
])