import React, { useMemo } from 'react'
import { InputWrapper, ISlider } from '../../../core'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useFormContext } from 'react-hook-form';

const Slider = (props: ISlider) => {
  const {watch, setValue} = useFormContext()

  const _val = watch(props.name)
  const val = useMemo(()=>_val,[_val])


  return (
    <InputWrapper type={props.type ?? 'slider'} {...props}>
      <RangeSlider {...props} {...props.sliderOptions} value={val} onInput={(a:any) => setValue(props.name, a)} />
    </InputWrapper>
  )
}

export default Slider