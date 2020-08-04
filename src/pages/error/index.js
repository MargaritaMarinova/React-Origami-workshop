import React from 'react'
import PageLayout from '../../components/page-layout'
import styles from './index.module.css'
import hmEmoji from '../../images/hmEmoji.jpg'

const ErrorPage = () => {
    return (
        <PageLayout>
        <div className = {styles['error-message']}>Something went wrong...</div>
        <img className = {styles['error-image']} src = {hmEmoji} />
        </PageLayout>
    )

}

export default ErrorPage