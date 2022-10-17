import { useEffect, useState } from 'react';

import { useTelegram } from '../../hooks/useTelegram'

import './styles.css'

const Form = () => {
  const { tg } = useTelegram()

  const [country, setCountry] = useState()
  const [street, setStreet] = useState()
  const [subject, setSubject] = useState()

  const onChangeCountry = (event) => {
    setCountry(event.target.value)
  }
  const onChangeStreet = (event) => {
    setStreet(event.target.value)
  }

  const onChangeSubject = (event) => {
    setSubject(event.taget.value)
  }

  useEffect(() => {
    tg.Mainbutton.setParams({
      text: 'Отправить данные'
    })
  }, [tg])

  useEffect(() => {
    if (!street || !country) {
      tg.Mainbutton.hide()
    } else {
      tg.Mainbutton.show()
    }
  }, [country, street, tg])

  return (
    <div className='form'>
      <h3>Введите ваши данные</h3>
      <input value={country} className='input' onChange={onChangeCountry} type="text" placeholder='Страна' />
      <input value={street} className='input' onChange={onChangeStreet} type="text" placeholder='Улица' />
      <select onChange={onChangeSubject} value={subject} className='select'>
        <option value="physical">Физ. лицо</option>
        <option value="legal">Юр. лицо</option>
      </select>
    </div>
  );
};

export default Form;
