import { ReactNode } from 'react';
interface MapProps<T> {
    array: T[];
    render: (item: T, index: number) => ReactNode;
}
export default function Map<T>({ array, render }: MapProps<T>): (string | number | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | import("react").ReactPortal)[];
export {};
