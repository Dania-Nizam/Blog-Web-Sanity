import {PortableTextComponents} from '@portabletext/react';

export const components:PortableTextComponents = {
    block:{
        h4:({children})=><h4 className='text-4xl  font-sans font-bold text-amber-400'>{children}</h4>

    },

    listItem:{
        bullet:({children})=><li className='list-disc font-bold marker:text-black list-inside ml-4'>{children}</li>
    },

    marks:{
        strong:({children})=><strong className='font-bold text-black dark:text-white'>{children}</strong>
    }
}