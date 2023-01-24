import data from "../data";
import Card from "./Card";

export default function Main() {
    const cards = data.map( entry => {
        return (
            <Card key={entry.id} {...entry} />
        )
    })
    return (
        <main>
            <Card key={data[0].id} {...data[0]} />
        </main>
    )
}