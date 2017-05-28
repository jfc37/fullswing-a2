export function toIdArray(array: Array<{id: number}>): number[] {
    return array
        ? array.map(a => a.id)
        : [];
}

export function containsId(array: Array<{id: number}>, item: {id: number}): boolean {
    return array.map(t => t.id).indexOf(item.id) === -1;
}
