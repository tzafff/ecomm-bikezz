import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary/5">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                {/*    text*/}
                    <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start">
                        <h1 className="text-center xl:text-left mb-6">
                            Where <span>JoyFul</span> Cycling Begins
                        </h1>
                        <p className="mb-10 text-lg max-w-[580px] mx-auto text-center xl:text-left xl:mx-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eligendi blanditiis facere recusandae ex nostrum adipisci, facilis possimus enim, explicabo tempora dolorum error nihil ullam aliquam, magnam et reprehenderit. Sunt.
                        </p>
                    {/*    btn group*/}
                        <div className="flex items-center gap-4 mx-auto xl:mx-0">
                            <Link href="/our-bikes" className="mx-auto md:mx-0">
                                <button className="btn btn-primary rounded-full">Shop Now</button>
                            </Link>
                            <Link href="/our-bikes" className="mx-auto md:mx-0">
                                <button className="btn btn-accent rounded-full">Our Bikes</button>
                            </Link>
                        </div>
                    </div>
                {/*    image*/}
                    <div className="hidden xl:flex">
                        <Image src='/hero/bike.png' width={765} alt='hero' height={480} quality={100}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
