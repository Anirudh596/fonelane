import { useState } from 'react';
import { Slider } from "react-slider";


// eslint-disable-next-line react/prop-types
const CustomSlider = ({ value, onChange }) => {
    const [rangeValue, setRangeValue] = useState(value);

    const handleSliderChange = (newValue) => {
        setRangeValue(newValue);
        onChange(newValue); // Propagate the change to the parent component
    };

    return (
       
            
            <Slider
                value={rangeValue}
                onChange={handleSliderChange}
                min={0}
                max={100}
                step={1}
                defaultValue={rangeValue}
            />
        
    );
};

export default CustomSlider;
