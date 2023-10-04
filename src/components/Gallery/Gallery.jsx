import datas from '../../data/data'
import Card from '../Card/Card'

export default function Gallery() {
    return (
        <main className='gallery'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}