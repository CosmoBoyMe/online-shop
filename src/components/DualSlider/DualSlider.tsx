import { useState, useEffect, useRef, ChangeEvent, memo } from 'react'

import * as S from './DualSlider.styles'

interface IDualSliderProps {
  readonly min: number
  readonly max: number
  readonly title: string
  readonly mark?: string
  onChange: ({ min, max }: { min: number; max: number }) => void
}

const DualSlider = memo(function DualSlider({ min, max, title, mark, onChange }: IDualSliderProps) {
  const [minValue, setMinValue] = useState(min)
  const [maxValue, setMaxValue] = useState(max)
  const minValueRef = useRef<HTMLInputElement>(null)
  const maxValueRef = useRef<HTMLInputElement>(null)

  const handleMinThumbChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(event.target.value), maxValue - 1)
    setMinValue(value)
    event.target.value = value.toString()
  }

  const handleMaxThumbChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(event.target.value), minValue + 1)
    setMaxValue(value)
    event.target.value = value.toString()
  }

  useEffect(() => {
    onChange({ min: minValue, max: maxValue })
  }, [minValue, maxValue, onChange])

  return (
    <S.DualSLider>
      <S.Title>{title}</S.Title>
      <S.Content>
        <S.LeftThumb
          type='range'
          min={min}
          max={max}
          value={minValue}
          ref={minValueRef}
          onChange={handleMinThumbChange}
        />
        <S.RightThumb
          type='range'
          min={min}
          max={max}
          value={maxValue}
          ref={maxValueRef}
          onChange={handleMaxThumbChange}
        />
        <S.Track />
        <S.Fields>
          <S.ValueField>
            {minValue}
            <S.MarkSymbol>{mark}</S.MarkSymbol>
          </S.ValueField>
          <S.ValueField>
            {maxValue}
            <S.MarkSymbol>{mark}</S.MarkSymbol>
          </S.ValueField>
        </S.Fields>
      </S.Content>
    </S.DualSLider>
  )
})

export { DualSlider }
