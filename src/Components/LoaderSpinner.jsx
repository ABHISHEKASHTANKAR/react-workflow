import React from 'react'
import {ThreeCircles} from 'react-loader-spinner';

const LoaderSpinner = () => {
    return (
        <div>
            <ThreeCircles
                height="100"
                width="100"
                color="#ddd"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor="#45a29e"
                innerCircleColor="#66fcf1"
                middleCircleColor="#c5c6c7"
            />
        </div>
    )
}

export default LoaderSpinner