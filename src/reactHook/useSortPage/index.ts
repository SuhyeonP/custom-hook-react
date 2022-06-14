import React from 'react';

type Order = 'asc' | 'desc';

interface ICustomTableHook {
    inputOrder?: Order;
    inputOrderBy: string;
    inputLimit?: number;
    inputOffset?: number;
}

export function useSortPage({
                                inputOrder = 'asc',
                                inputOrderBy,
                                inputLimit = 10,
                                inputOffset = 0,
                            }: ICustomTableHook): [
    number,
    number,
    (event: unknown, newPage: number) => void,
    (e: React.ChangeEvent<HTMLInputElement>) => void,
    Order,
    string,
    (id: string) => () => void,
] {
    const [order, setOrder] = React.useState<Order>(inputOrder);
    const [orderBy, setOrderBy] = React.useState<string>(inputOrderBy);

    const [offset, setOffset] = React.useState<number>(inputOffset);
    const [limit, setLimit] = React.useState<number>(inputLimit);

    const sortHandler = React.useCallback(
        (id: string) => () => {
            if (id === orderBy) {
                setOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
            } else {
                setOrder('asc');
                setOrderBy(id);
            }
        },
        [order, orderBy],
    );

    const handlingPage = React.useCallback((event: unknown, newPage: number) => {
        setOffset(newPage);
    }, []);

    const handlingLimit = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const limitTemp = parseInt(e.target.value, 10);
            setOffset(0);
            // todo check setPage when change limit
            setLimit(limitTemp);
        },
        [],
    );

    return [
        offset,
        limit,
        handlingPage,
        handlingLimit,
        order,
        orderBy,
        sortHandler,
    ];
}
