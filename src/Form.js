import React , {useState} from 'react';
import styled from 'styled-components';
import {Datepicker} from '@ijavad805/react-datepicker'
import styles from './Form.module.css' 

const Form = () => {

    const Form = styled.form`

    display : flex;
    flex-direction : column;
    width:50%;
    margin : auto;
    `


    const Container = styled.div `
    display:flex;
    margin :auto;
    background-color : #72b8bb;
    width : 20%;
    padding : 2rem 3.5rem 2rem 2rem;
    border-radius : 2rem;
    `
    return ( 
        <Container>
      <Form>
<label className={styles.label} >نام</label>
<input className={styles.input} type="text"/>
<label className={styles.label}>نام خانوادگی</label>
<input className={styles.input} type="text"/>
<label className={styles.label}>ایمیل</label>
<input className={styles.input} type="email"/>
<label className={styles.label}>تاریخ تولد</label>
<Datepicker/>
<br/>
<button className={styles.btn}>
ثبت نام
</button>
      


</Form>
  
        </Container>

    );
}
 
export default Form;