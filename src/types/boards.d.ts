interface Card {
    text: string,
    author: string,
    timestamp: string
}

interface Column {
    id: number,
    name: string,
    color: string,
    cards?: Card[]
}
interface BoardProps {
    columns: Column[]
}
