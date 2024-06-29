import {client} from "@/sanity/lib/client";
import BikeCategories from "@/components/BikeCategories";

const getData = async () => {
    const query = `*[_type == 'product'] {
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "categories": categories[]-> {name}
    }`;

    return await client.fetch(query)
}
const OurBikes = async () => {
    const bikes = await getData();

    return (
        <div>
            <BikeCategories bikes={bikes} />
        </div>
    )
}
export default OurBikes
