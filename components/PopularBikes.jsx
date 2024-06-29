import {client} from "@/sanity/lib/client";
import Link from "next/link";
import PopularBikesCarousel from "@/components/PopularBikesCarousel";

const getData = async () => {
    const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories) ]{
  _id,
    name,
    description,
    images,
    price,
    price_id,
    "slug": slug.current,
    "categories": categories[]->{
    name
    }
}`;
    const data = await client.fetch(query);

    return data;
}

const PopularBikes = async () => {
    const bikes = await getData();
    console.log(bikes);
    return <section className="py-24">
        <div className="container mx-auto">
            <h2 className="text-center">Most Popular Bikes</h2>
            <p className="text-center mb-[30px]">
                The Wolrd's Premium Brands In One Destination
            </p>
            <PopularBikesCarousel bikes={bikes} />
            <div>Carousel</div>
            <Link href="/our-bikes">
                <button className="btn btn-accent mx-auto rounded-full">See all bikes</button>
            </Link>
        </div>
    </section>;
}

export default PopularBikes