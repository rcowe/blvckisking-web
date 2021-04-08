// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
//
// export default function Slider() {
//     return (
//         <>
//             <AwesomeSlider
//                 media={[
//                     {
//                         source: 'https://res.cloudinary.com/di5thiyyl/image/upload/v1617857476/blvckisking-images/quote1_k7beyw.png',
//                     },
//                     {
//                         source: 'https://res.cloudinary.com/di5thiyyl/image/upload/v1617857475/blvckisking-images/quote2_d9byfc.png',
//                     },
//                     {
//                         source: 'https://res.cloudinary.com/di5thiyyl/image/upload/v1617857476/blvckisking-images/quote3_mjcotw.png',
//                     },
//                 ]}
//             />
//         </>
//     )
// };

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider() {
    return (
        <>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
                <div data-src="https://res.cloudinary.com/di5thiyyl/image/upload/v1617857476/blvckisking-images/quote1_k7beyw.png" />
                <div data-src="https://res.cloudinary.com/di5thiyyl/image/upload/v1617857475/blvckisking-images/quote2_d9byfc.png" />
                <div data-src="https://res.cloudinary.com/di5thiyyl/image/upload/v1617857476/blvckisking-images/quote3_mjcotw.png" />
            </AutoplaySlider>
        </>
    )
};

export default Slider;