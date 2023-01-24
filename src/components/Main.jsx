import data from "../data";
import Card from "./Card";

export default function Main() {
    const cards = data.map( (entry, id) => {
        return (
        <div className="card--wrapper" key={id}>
            {id > 0 && <hr></hr>}
            <Card key={entry.id} {...entry} />
        </div>
        )
    })
    return (
        <main>
            {cards}
        </main>
    )
}