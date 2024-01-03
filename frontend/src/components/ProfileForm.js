import React, { useState } from 'react'
import { axiosReq } from '../api/axiosDefaults';
import { Alert, Col, Form, Row } from 'react-bootstrap';
import { COUNTRY_CODES } from '../constants/constants';
import ReactCountryFlag from 'react-country-flag';
import styles from '../styles/ProfileForm.module.css';

const ProfileForm = () => {

    const [profileData, setProfileData] = useState({ nickname: '', country: 'AF'});
    const { nickname, country } = profileData;

    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("nickname", nickname);
        formData.append("country", country);

        try {
            await axiosReq.post("create_player_profile/", formData);
        } catch (err) {
            console.log(err);
            setErrors(err.response?.data);
        }
    }

    const handleCountryChange = (event) => {
        const key = event.target.value;
        setProfileData(prev => ({
            ...prev,
            country: key
        }));
    }

    return ( 
        <Form onSubmit={handleSubmit} className="mt-3">
            <Row className="d-flex justify-content-center">
                <Col md={6}>
                    <Form.Group controlId="nickname">
                        <Form.Control 
                            className={styles.Input}
                            type="text"
                            placeholder="Nickname"
                            onChange={(e) => {
                                setProfileData({
                                    ...profileData,
                                    nickname: e.target.value
                                })
                            }}
                        />
                    </Form.Group>
                    {errors?.nickname?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col md={4}>
                    <Form.Group 
                        controlId="exampleForm.SelectCustom"
                        className="my-auto">
                        <Form.Control as="select"
                            onChange={handleCountryChange}
                            className={styles.Input}
                        >
                            {Object.keys(COUNTRY_CODES).map(key => (
                                <option 
                                    key={key}
                                    value={key}
                                    onChange={handleCountryChange}
                                >{COUNTRY_CODES[key]}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    {errors?.country?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}
                </Col>
                <Col md={2}>
                    <ReactCountryFlag
                        className="emojiFlag mt-0"
                        countryCode={country}
                        svg
                        style={{
                            fontSize: '3em',
                            lineHeight: '3em',
                        }}
                        aria-label="United States"
                    />  
                </Col>
            </Row>
            
            
        </Form>
    )
}

export default ProfileForm