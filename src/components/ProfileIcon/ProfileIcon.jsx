import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Auth, API } from 'aws-amplify';
// import {fetchResourceData, getImageUrl} from '../utils/API';
import DefaultAvatar from '../../images/default-avatar.png';
// import { fetchUserInfoWithEmail } from '../utils/API';

const ProfileIcon = props => {
    const [attachmentUrl, setAttachmentUrl] = useState('');

    /**
     * We are making a call to fetchUserWithEmail in the App Bar
     * And we are making the same call again here just to fetch the avatarPictureUri
     * @param email
     */
    const setUserData = (email, isSelfProfile) => {
        //TODO call api
        // fetchResourceData(email, isSelfProfile)
        //     .then(response => {
        //         if (response && response.profileImage) {
        //             setAttachmentUrl(getImageUrl(response.profileImage));
        //         }
        //     })
        //     .catch(err => console.log('OMG', err.message));
    };

    useEffect(() => {
        let currentUser = null;
        Auth.currentAuthenticatedUser({
            bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
        }).then(user => {
            currentUser = user.attributes.email;
            if (props.email) {
                setUserData(props.email, props.email === currentUser);
            } else {
                setUserData(currentUser, true);
            }
        });
    }, [props.email]);

    return (
        <div className="margin-auto">
            <Link to="/profile">
                <img
                    className="icon profile-icon"
                    src={attachmentUrl || DefaultAvatar}
                />
            </Link>
        </div>
    );
};

export default ProfileIcon;