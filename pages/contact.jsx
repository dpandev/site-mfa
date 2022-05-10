import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Contact = () => {

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Email is invalid'),
    message: yup.string().required('Message must be filled out.')
  })

  const formOptions = { resolver: yupResolver(validationSchema) }
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { errors } = formState

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (data) => {
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    })

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4))
    return false;
  }

  return (
    <div className={styles.contactContainer}>
      <div className={styles.heading}>
        <h2>Contact Us</h2>
      </div>
      <div className={styles.subheading}>
        <span>For questions, comments or concerns, please send us a message using the form below.</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
        <div className={styles.labelContainer}>
          <label htmlFor="name" className={styles.formLabel}>Name</label>
          <span className={styles.invalidFeedback}>{errors.name?.message}</span>
        </div>
        <input
          name="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          className={`${styles.formControl} ${errors.name ? styles.isInvalid : ''}`}
          {...register('name')}
        />
        <div className={styles.labelContainer}>
          <label htmlFor="email" className={styles.formLabel}>Email</label>
          <span className={styles.invalidFeedback}>{errors.email?.message}</span>
        </div>
        <input
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className={`${styles.formControl} ${errors.email ? styles.isInvalid : ''}`}
          {...register('email')}
        />
        <div className={styles.labelContainer}>
          <label htmlFor="message" className={styles.formLabel}>Message</label>
          <span className={styles.invalidFeedback}>{errors.message?.message}</span>
        </div>
        <textarea
          name="message"
          type="text"
          rows="4"
          onChange={(e) => setMessage(e.target.value)}
          className={`${styles.formControl} ${styles.messageBox} ${errors.email ? styles.isInvalid : ''}`}
          {...register('message')}
        />
        <button type="submit" className={styles.formSubmit}>Send</button>
      </form>
    </div>
  )
}

export default Contact