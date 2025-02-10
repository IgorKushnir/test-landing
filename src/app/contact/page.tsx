import {typographyClasses} from '@/lib/typography';

export default function Contact () {
    return (
        <section>
            <h1 className={typographyClasses.h1}>Contact</h1>
            <div className='grid grid-col-2 gap-4'>
                <p className={typographyClasses.p1}>Addresss:</p>
                <p className={typographyClasses.t1}>Kyiv, Putivlska st., 39</p>
                <p className={typographyClasses.p1}>Email:</p>
                <p className={typographyClasses.t1}>igor.kushnir@perfsol.tech</p>
                <p className={typographyClasses.p1}>Phone:</p>
                <p className={typographyClasses.t1}>+380953249400</p>
            </div>
        </section>
    )
}