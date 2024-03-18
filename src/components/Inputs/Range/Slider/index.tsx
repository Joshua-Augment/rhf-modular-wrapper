import { InputWrapper, ISlider } from '../../../core'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Slider = (props: ISlider) => {
  return (
    <InputWrapper type={props.type ?? 'slider'} {...props}>
      <_Slider {...props} />
    </InputWrapper>
  )
}

const _Slider = (props: any) => {
  return <RangeSlider 
    {...props} 
    {...props.sliderOptions} 
    value={props.value} 
    onInput={(a:any) => props.onChange(a)} 
  />
}

export default Slider