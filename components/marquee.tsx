import Image from 'next/image'

import marquee_image from '../public/assets/marquee_image.png'

const Marquee = () => {

    const partners = [
        { name: 'Marquee Item 1' },
        { name: 'Marquee Item 2' },
        { name: 'Marquee Item 3' },
        { name: 'Marquee Item 4' },
        { name: 'Marquee Item 5' },
    ]

    return(
        <div className="marquee-container flex justify-end mr-10 h-screen overflow-hidden">
            <div className="marquee-left">
                {
                    partners.map((partner, index)=>
                        <Image src={marquee_image} alt='marquee-image' className='mt-8 animate-marquee' height={300}/>
                    )
                }
            </div>
            <div className="marquee-right ml-8 translate-y-[-100%]">
                {
                    partners.map((partner, index)=>
                        <Image src={marquee_image} alt='marquee-image' className='mt-8 animate-marquee2'height={300}/>
                    )
                }
                {
                    partners.map((partner, index)=>
                        <Image src={marquee_image} alt='marquee-image' className='mt-8 animate-marquee2'height={300}/>
                    )
                }
            </div>
        </div>
    )
    
}

export default Marquee;